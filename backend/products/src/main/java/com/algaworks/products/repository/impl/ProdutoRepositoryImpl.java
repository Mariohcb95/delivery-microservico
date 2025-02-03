package com.algaworks.products.repository.impl;

import org.springframework.stereotype.Repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Repository
public class ProdutoRepositoryImpl {

	@PersistenceContext
	private EntityManager manager;
}
