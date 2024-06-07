package com.projeto.integrador.publicacao;

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
import com.projeto.integrador.publicacao.domain.PublicacaoListResponse;
import com.projeto.integrador.publicacao.domain.PublicacaoRequest;
import com.projeto.integrador.publicacao.domain.PublicacaoResponse;

@Service
public class PublicacaoService {

	@Autowired
	PublicacaoListResponse list;

	public PublicacaoListResponse listar() throws InterruptedException, ExecutionException {

		Firestore firestore = FirestoreClient.getFirestore();
		ApiFuture<QuerySnapshot> apiFuture = firestore.collection("publicacao").get();
		List<QueryDocumentSnapshot> documents = apiFuture.get().getDocuments();
		List<PublicacaoResponse> collect = documents.stream().map((doc) -> {
			PublicacaoResponse response = doc.toObject(PublicacaoResponse.class);
			response.setId(doc.getId());
			return response;
		}).collect(Collectors.toList());

		list.setList(collect);

		return list;

	}

	public void criar(PublicacaoRequest request) {

		Firestore firestore = FirestoreClient.getFirestore();
		DocumentReference document = firestore.collection("publicacao").document();
		request.setId(document.getId());
		
		 Map<String, Object> data = new HashMap<>();
	        data.put("autor", request.getAutor());
	        data.put("titulo", request.getTitulo());
	        data.put("conteudo", request.getConteudo());
	        data.put("descricao", request.getDescricao());
	        data.put("img", request.getImg());
	        data.put("id", request.getId());
	        data.put("time", FieldValue.serverTimestamp());
	        
		ApiFuture<WriteResult> set = document.set(request);

	}

}
