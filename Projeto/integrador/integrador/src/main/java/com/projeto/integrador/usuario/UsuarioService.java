package com.projeto.integrador.usuario;

import org.springframework.stereotype.Service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.projeto.integrador.usuario.domain.UsuarioRequest;

@Service
public class UsuarioService {

	public void criar(UsuarioRequest request) {

		Firestore firestore = FirestoreClient.getFirestore();
		DocumentReference document = firestore.collection("usuario").document(request.getId());
		ApiFuture<WriteResult> set = document.set(request);

	}

}
