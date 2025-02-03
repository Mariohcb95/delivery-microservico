package com.algaworks.customers.controller;

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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.algaworks.customers.assembler.UsuarioDTOAssembler;
import com.algaworks.customers.assembler.UsuarioInputDisassembler;
import com.algaworks.customers.model.UsuarioDTO;
import com.algaworks.customers.model.input.SenhaInput;
import com.algaworks.customers.model.input.UsuarioComSenhaInput;
import com.algaworks.customers.model.input.UsuarioInput;
import com.algaworks.customers.model.Usuario;
import com.algaworks.customers.repository.UsuarioRepository;
import com.algaworks.customers.service.CadastroUsuarioService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/usuarios")
public class UsuarioController {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private CadastroUsuarioService cadastroUsuarioService;

	@Autowired
	private UsuarioDTOAssembler usuarioDTOAssembler;

	@Autowired
	private UsuarioInputDisassembler usuarioInputDisassembler;

	@GetMapping
	public List<UsuarioDTO> listar() {
		return usuarioDTOAssembler.toCollectionDTO(usuarioRepository.findAll());
	}

	@GetMapping(value = "/{usuarioId}")
	public UsuarioDTO buscar(@PathVariable Long usuarioId) {
		return usuarioDTOAssembler.toDTO(cadastroUsuarioService.buscarOuFalhar(usuarioId));
	}

	@PostMapping
	@ResponseStatus(value = HttpStatus.CREATED)
	public UsuarioDTO adicionar(@RequestBody @Valid UsuarioInput usuarioInput) {
		Usuario usuario = usuarioInputDisassembler.toDomainObject(usuarioInput);
		return usuarioDTOAssembler.toDTO(cadastroUsuarioService.salvar(usuario));
	}

	@PutMapping("/{usuarioId}")
	public UsuarioDTO atualizar(@PathVariable Long usuarioId, @RequestBody @Valid UsuarioInput usuarioInput) {
		Usuario usuario = cadastroUsuarioService.buscarOuFalhar(usuarioId);
		usuarioInputDisassembler.copyToDomainObject(usuarioInput, usuario);
		return usuarioDTOAssembler.toDTO(cadastroUsuarioService.salvar(usuario));
	}
	
	@DeleteMapping("/{usuarioId}")
	public Boolean Deletar(@PathVariable Long usuarioId) {
		return cadastroUsuarioService.deletar(usuarioId);
	}

}
