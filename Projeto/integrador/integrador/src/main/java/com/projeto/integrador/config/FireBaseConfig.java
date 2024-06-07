package com.projeto.integrador.config;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import javax.annotation.PostConstruct;

import org.springframework.context.annotation.Configuration;
import org.springframework.util.ResourceUtils;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

@Configuration
public class FireBaseConfig {

	@PostConstruct
	public void configurarConexaoFirebase() throws IOException {

		File file = ResourceUtils.getFile("classpath:config/forum-9432a-firebase-adminsdk-m6oeq-9e71c2a375.json");
		FileInputStream serviceAccount = new FileInputStream(file);

		FirebaseOptions options = new FirebaseOptions.Builder()
				.setCredentials(GoogleCredentials.fromStream(serviceAccount)).build();

		FirebaseApp.initializeApp(options);

	}

}
