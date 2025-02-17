package com.algaworks.customers.assembler;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.algaworks.customers.model.UsuarioDTO;
import com.algaworks.customers.model.Usuario;

@Component
public class UsuarioDTOAssembler {

	@Autowired
	private ModelMapper modelMapper;

	public UsuarioDTO toDTO(Usuario usuario) {
		return modelMapper.map(usuario, UsuarioDTO.class);
	}

	public List<UsuarioDTO> toCollectionDTO(List<Usuario> usuarios) {
		return usuarios.stream().map(usuario -> toDTO(usuario)).collect(Collectors.toList());
	}
}
