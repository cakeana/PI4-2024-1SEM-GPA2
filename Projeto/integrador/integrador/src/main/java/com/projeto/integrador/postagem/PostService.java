package com.projeto.integrador.postagem;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.FieldValue;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.projeto.integrador.postagem.domain.PostDto;
import com.projeto.integrador.postagem.domain.PostListResponse;
import com.projeto.integrador.postagem.domain.PostListResponseDto;
import com.projeto.integrador.postagem.domain.PostResponse;

@Service
public class PostService {

	@Autowired
	PostListResponse list;

	public PostResponse createPost(PostDto post) throws InterruptedException, ExecutionException, IOException {

		PostResponse response = new PostResponse();
		Firestore firestore = FirestoreClient.getFirestore();
		DocumentReference document = firestore.collection("post").document();
		post.setId(document.getId());
		
		 Map<String, Object> data = new HashMap<>();
	        data.put("nome", post.getNome());
	        data.put("conteudo", post.getConteudo());
	        data.put("imagem", post.getImagem());
	        data.put("photoUrl", post.getPhotoUrl());
	        data.put("time", FieldValue.serverTimestamp());
		
		
		ApiFuture<WriteResult> set = document.set(data);

		response.setId(post.getId());
		response.setAtualizacao(set.get().getUpdateTime().toDate().toString());

		return response;
	}

	public PostListResponse getPostList() throws InterruptedException, ExecutionException {
		Firestore firestore = FirestoreClient.getFirestore();
		ApiFuture<QuerySnapshot> apiFuture = firestore.collection("post").get();
		List<QueryDocumentSnapshot> documents = apiFuture.get().getDocuments();
		List<PostListResponseDto> collect = documents.stream().map((doc) -> doc.toObject(PostListResponseDto.class))
				.collect(Collectors.toList());

		list.setList(collect);

		return list;
	}
}
