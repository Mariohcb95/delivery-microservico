package com.algaworks.products.assembler;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.algaworks.products.model.ProdutoDTO;
import com.algaworks.products.model.Produto;

@Component
public class ProdutoDTOAssembler {

	@Autowired
	private ModelMapper modelMapper;

	public ProdutoDTOAssembler(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public ProdutoDTO toDTO(Produto produto) {
    	ProdutoDTO teste = modelMapper.map(produto, ProdutoDTO.class);
        return teste;
    }

	public List<ProdutoDTO> toCollectionDTO(Collection<Produto> produtos) {
		List<ProdutoDTO> teste =  produtos.stream().map(produto -> toDTO(produto)).collect(Collectors.toList());
		return teste;
	}
}
