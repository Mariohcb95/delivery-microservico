package com.algaworks.products.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.algaworks.products.assembler.ProdutoDTOAssembler;
import com.algaworks.products.assembler.ProdutoInputDisassembler;
import com.algaworks.products.model.ProdutoDTO;
import com.algaworks.products.model.input.ProdutoInput;
import com.algaworks.products.model.Produto;
import com.algaworks.products.repository.ProdutoRepository;
import com.algaworks.products.service.CadastroProdutoService;


import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/produtos")
public class ProdutoController {

	@Autowired
	private ProdutoRepository produtoRepository;

	@Autowired
	private CadastroProdutoService cadastroProdutoService;

	@Autowired
	private ProdutoDTOAssembler produtoDTOAssembler;

	@Autowired
	private ProdutoInputDisassembler produtoInputDisassembler;

	@GetMapping
	public List<ProdutoDTO> listar(@RequestParam(required = false) boolean incluirInativo) {
		List<Produto> todosProdutos;
		if (incluirInativo) {
			todosProdutos = produtoRepository.findAll();
		} else {
			todosProdutos = produtoRepository.findAtivos();

		}
		return produtoDTOAssembler.toCollectionDTO(todosProdutos);
	}

	@GetMapping(value = "/{produtoId}")
	public ProdutoDTO buscar(@PathVariable Long produtoId) {
		Produto produto = cadastroProdutoService.buscarOuFalhar(produtoId);
		return produtoDTOAssembler.toDTO(produto);
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ProdutoDTO adicionar(@RequestBody @Valid ProdutoInput produtoInput) {
		Produto produto = produtoInputDisassembler.toDomainObject(produtoInput);
		produto = cadastroProdutoService.salvar(produto);
		return produtoDTOAssembler.toDTO(produto);
	}

	@PutMapping(value = "/{produtoId}")
	public ProdutoDTO atualizar(@PathVariable Long produtoId, @RequestBody @Valid ProdutoInput produtoInput) {
		Produto produtoAtual = cadastroProdutoService.buscarOuFalhar(produtoId);
		produtoInputDisassembler.copyToDomainObject(produtoInput, produtoAtual);
		produtoAtual = cadastroProdutoService.salvar(produtoAtual);
		return produtoDTOAssembler.toDTO(produtoAtual);

	}
	@DeleteMapping(value = "/{produtoId}")
	public Boolean deletar(@PathVariable Long produtoId) {				
		return cadastroProdutoService.deletar(produtoId);

	}

}