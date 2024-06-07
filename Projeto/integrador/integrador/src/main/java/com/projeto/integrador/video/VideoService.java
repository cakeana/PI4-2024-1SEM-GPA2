package com.projeto.integrador.video;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.projeto.integrador.video.domain.VideoRequest;
import com.projeto.integrador.video.domain.VideoResponse;

@Service
public class VideoService {

	public void criar(VideoRequest request) {
		Firestore firestore = FirestoreClient.getFirestore();
		DocumentReference document = firestore.collection("videos").document();
		String videoId = document.getId();
		request.setId(videoId);

		Map<String, Object> data = new HashMap<>();
		data.put("urlVideo", request.getUrlVideo());
		data.put("nome", request.getNome());
		data.put("descricao", request.getDescricao());
		data.put("conteudo", request.getConteudo());
		data.put("imgUrl", request.getImgUrl());
		data.put("id", videoId);

		ApiFuture<WriteResult> set = document.set(data);
	}

	public List<VideoResponse> listar() throws InterruptedException, ExecutionException {
		Firestore firestore = FirestoreClient.getFirestore();
		ApiFuture<QuerySnapshot> future = firestore.collection("videos").get();
		List<QueryDocumentSnapshot> documents = future.get().getDocuments();

		List<VideoResponse> videos = new ArrayList<>();
		for (DocumentSnapshot document : documents) {
			VideoRequest request = document.toObject(VideoRequest.class);
			VideoResponse response = new VideoResponse();
			response.setId(document.getId());
			response.setUrlVideo(request.getUrlVideo());
			response.setNome(request.getNome());
			response.setDescricao(request.getDescricao());
			response.setConteudo(request.getConteudo());
			response.setImgUrl(request.getImgUrl());
			videos.add(response);
		}

		return videos;
	}
}
