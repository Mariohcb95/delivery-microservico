package com.algaworks.customers.model.input;

import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UsuarioInput {

	@Id
	private Long id;
	
	@NotBlank
	private String nome;

	@NotBlank
	@Email
	private String email;

}
