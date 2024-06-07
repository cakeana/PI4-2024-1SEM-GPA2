package com.projeto.integrador.clinica;

import java.util.Arrays;
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
import com.projeto.integrador.clinica.domain.ClinicaListResponse;
import com.projeto.integrador.clinica.domain.ClinicaRequest;
import com.projeto.integrador.clinica.domain.ClinicaResponse;

@Service
public class ClinicaService {

    @Autowired
    private ClinicaListResponse list;

    public ClinicaListResponse listar() throws InterruptedException, ExecutionException {
        Firestore firestore = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> apiFuture = firestore.collection("clinica").get();
        List<QueryDocumentSnapshot> documents = apiFuture.get().getDocuments();
        List<ClinicaResponse> collect = documents.stream().map((doc) -> {
            ClinicaResponse response = doc.toObject(ClinicaResponse.class);
            response.setId(doc.getId());
            return response;
        }).collect(Collectors.toList());

        list.setList(collect);
        return list;
    }

    public void criar(ClinicaRequest request) {
        Firestore firestore = FirestoreClient.getFirestore();
        DocumentReference document = firestore.collection("clinica").document();
        request.setId(document.getId());

        Map<String, Object> data = new HashMap<>();
        data.put("nome", request.getNome());
        data.put("descricao", request.getDescricao());
        data.put("horario", request.getHorario());
        data.put("atendimento", request.getAtendimento());
        data.put("especialidades", Arrays.asList(request.getEspecialidades())); 
        data.put("telefone", request.getTelefone());
        data.put("endereco", request.getEndereco());
        data.put("mapsLink", request.getMapsLink());
        data.put("img", request.getImg());
        data.put("id", request.getId());
        data.put("time", FieldValue.serverTimestamp());

        ApiFuture<WriteResult> set = document.set(data);
    }

}
