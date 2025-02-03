package com.algaworks.customers.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.algaworks.customers.model.Usuario;

@Repository
public interface UsuarioRepository extends CustomJpaRepository<Usuario, Long> {

	Optional<Usuario> findByEmail(String email);
}
