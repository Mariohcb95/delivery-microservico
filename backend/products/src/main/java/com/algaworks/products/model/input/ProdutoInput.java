package com.algaworks.products.model.input;

import java.math.BigDecimal;

import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ProdutoInput {

	@Id
	private Long id;
	
	@NotBlank
	private String nome;

	@NotBlank
	private String descricao;

	@NotNull
	@PositiveOrZero
	private BigDecimal preco;

	@NotNull
	private Boolean ativo;

}
