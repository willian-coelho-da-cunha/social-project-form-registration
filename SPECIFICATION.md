# Specification | Social project form registration


# Specifications

**Nome**
---
- Texto.
- Obrigatório informar.
- Sendo necessário 1 caractere minimamente.
- Mas, não podendo ultrapassar 64 caracteres.
- Não pode conter apenas espaços em branco. Assim como, não pode haver mais de 1 espaço em branco entre as palavras.

**Objetivo**
---
- Texto.
- Obrigatório informar.
- Sendo necessários 32 caracteres minimamente.
- Mas, não podendo ultrapassar 256 caracteres.
- Não pode conter apenas espaços em branco. Assim como, não pode haver mais de 1 espaço em branco entre as palavras.

**Modelo de atuação**
---
- Seleção única.
- Valores possíveis: Associação, Fundação, e Outro modelo.
- Obrigatório informar.
- Quando "Outro modelo", deverá informar o modelo de atuação.

**Associação**
---
- Estatuto da associação
  - Booleano (Possui estatuto?).
  - Assumir inicialmente como true.

- C. N. P. J.
  - Número.
  - Obrigatório informar.
  - O valor apresentado deverá conter máscara.

- Inscrição na Receita Federal
  - Booleano (Possui inscrição?)
  - Assumir inicialmente como falso.

- Inscrição na Receita Estadual
  - Booleano (Possui inscrição?)
  - Assumir inicialmente como falso.

- Inscrição na Prefeitrua.
  - Booleano (Possui inscrição?)
  - Assumir inicialmente como falso.

- Colaboradores(as)
  - Booleano (Há colaboradores assalariados?)
  - Assumir inicialmente como true.

Fundação
---
- Instituidor
  - Nome / Razão social.
    - Texto.
    - Obrigatório informar.
    - Sendo necessários 6 caracteres minimamente.
    - Mas, não podendo ultrapassar 64 caracteres.
    - Não pode conter apenas espaços em branco. Assim como, não pode haver mais de 1 espaço em branco entre as palavras.

  - C. P. F. / C. N. P. J.
    - Número.
    - Obrigatório informar.
    - O valor apresentado deverá conter máscara.

  - Endereço
    - Especificação abaixo.

  - Estatuto da associação
    - Booleano (Possui estatuto?).
    - Assumir inicialmente como true.

**Endereço**
---
- Logradouro
  - Texto.
  - Obrigatório informar.
  - Sendo necessário 8 caractere minimamente.
  - Mas, não podendo ultrapassar 64 caracteres.
  - Não pode conter apenas espaços em branco. Assim como, não pode haver mais de 1 espaço em branco entre as palavras.

- Número
  - Número.
  - Obrigatório informar.
  - Faixa de valores entre 0 e 10.000.
  - Alternativamente, poderá marcar uma caixa de checagem para informar que não há número.
      - Booleano (Não há número?).
      - Assumir inicialmente como falso.

- Complemento
  - Texto.
  - Não é obrigatório informar.
  - Sendo necessários 0 caracteres minimamente.
  - Mas, não podendo ultrapassar 256 caracteres.
  - Não pode conter apenas espaços em branco. Assim como, não pode haver mais de 1 espaço em branco entre as palavras.

- C. E. P.
  - Número.
  - Obrigatório informar.
  - O valor apresentado deverá conter máscara.
  - Ao ser informado corretamente, tentar localizar o Bairro, Município, Estado, e País.
  - Bem como, dispor os valores localizados nos campos de formulário correspondentes.
  - Bem como, alterar estado de tais campos para somente leitura.

- Bairro
  - Entidade.
  - Obrigatório informar.
  - Preenchido automaticamente.
  - Ou, valor textual deverá ser informado.
  - Sendo necessário 1 caractere minimamente.
  - Mas, não podendo ultrapassar 32 caracteres.
  - Não pode conter apenas espaços em branco. Assim como, não pode haver mais de 1 espaço em branco entre as palavras.

- Município
  - Entidade.
  - Obrigatório informar.
  - Preenchido automaticamente.
  - Ou, valor textual deverá ser informado.
  - Sendo necessário 1 caractere minimamente.
  - Mas, não podendo ultrapassar 32 caracteres.
  - Não pode conter apenas espaços em branco. Assim como, não pode haver mais de 1 espaço em branco entre as palavras.

- Estado
  - Entidade.
  - Obrigatório informar.
  - Preenchido automaticamente.
  - Ou, valor textual deverá ser informado.
  - Sendo necessário 1 caractere minimamente.
  - Mas, não podendo ultrapassar 32 caracteres.
  - Não pode conter apenas espaços em branco. Assim como, não pode haver mais de 1 espaço em branco entre as palavras.

- Pais
  - Entidade.
  - Obrigatório informar.
  - Preenchido automaticamente.
  - Ou, valor textual deverá ser informado.
  - Sendo necessário 1 caractere minimamente.
  - Mas, não podendo ultrapassar 32 caracteres.
  - Não pode conter apenas espaços em branco. Assim como, não pode haver mais de 1 espaço em branco entre as palavras.

# Referências bibliográficas

**Como criar um projeto social**
https://blog.bcredi.com.br/como-criar-um-projeto-social/
Accessed on Sunday, July 18th, 2021 at 07:57pm.
