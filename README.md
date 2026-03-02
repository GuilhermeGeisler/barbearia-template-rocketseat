# 💈 Hair Day - Sistema de Agendamento para Barbearia

## 🌟 Sobre o Projeto  
Aplicação web de agendamento para barbearia desenvolvida como exercício do curso de Full Stack da Rocketseat. O sistema permite que o usuário visualize horários disponíveis, agende um corte para um cliente e gerencie os compromissos do dia de forma simples e intuitiva.

- 🎨 Interface escura e moderna, focada na experiência do usuário
- 📱 Layout totalmente responsivo (mobile e desktop)
- 🕐 Seleção de data e horário com validação de disponibilidade
- 📋 Listagem de agendamentos organizados por período (manhã, tarde, noite)
- ❌ Cancelamento de agendamentos com confirmação
- 🔌 API simulada com JSON Server para persistência dos dados

---

## 🚀 Funcionalidades  

| **Seção**                | **Conteúdo**                                   |  
|--------------------------|------------------------------------------------|  
| ✅ Seleção de data       | 🗓️ Input de data com dia atual como mínimo     |  
| ✅ Horários disponíveis  | ⏰ Lista de horários gerada dinamicamente       |  
| ✅ Agendamento           | 📝 Formulário com nome do cliente + horário    |  
| ✅ Listagem por período  | 🌅 Manhã, tarde e noite separadamente           |  
| ✅ Cancelamento          | 🗑️ Ícone para remover agendamento com confirm   |  
| ✅ Validações            | ⚠️ Impede agendamento em horário passado ou ocupado |  

---

## 🛠️ Tecnologias Utilizadas  
<div align="center">  
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">  
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">  
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">  
  <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack">  
  <img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black" alt="Babel">  
  <img src="https://img.shields.io/badge/Day.js-FF5F4C?style=for-the-badge&logo=day.js&logoColor=white" alt="Day.js">  
  <img src="https://img.shields.io/badge/JSON_Server-000000?style=for-the-badge&logo=json&logoColor=white" alt="JSON Server">  
</div>  

---

## 📂 Estrutura de Arquivos
```
hairday/
├── index.html # Estrutura principal da página
├── package.json # Dependências e scripts
├── server.json # Banco de dados fake (JSON Server)
├── webpack.config.js # Configuração do Webpack
├── src/ # Código fonte
│ ├── main.js # Ponto de entrada da aplicação
│ ├── assets/ # Imagens e ícones
│ │ ├── logo.svg
│ │ ├── scissors.svg # Favicon
│ │ ├── calendar.svg
│ │ ├── person.svg
│ │ ├── cancel.svg
│ │ └── (morning, afternoon, night).svg
│ ├── styles/ # Arquivos CSS
│ │ ├── global.css
│ │ ├── form.css
│ │ └── schedule.css
│ ├── modules/ # Módulos JS
│ │ ├── form/
│ │ │ ├── submit.js
│ │ │ ├── date-change.js
│ │ │ ├── hours-load.js
│ │ │ └── hours-click.js
│ │ ├── schedules/
│ │ │ ├── load.js
│ │ │ ├── show.js
│ │ │ └── cancel.js
│ │ └── page-load.js
│ ├── services/ # Comunicação com a API
│ │ ├── api-config.js
│ │ ├── schedule-fetch-by-day.js
│ │ ├── schedule-new.js
│ │ └── schedule-cancel.js
│ ├── utils/ # Utilitários
│ │ └── opening-hours.js
│ └── libs/ # Configuração de bibliotecas
│ └── dayjs.js
```

---

## 🎨 Design e Estilo  
**Paleta de Cores:**

- `#19181b` - Fundo da página
- `#232225` - Fundo do formulário
- `#2e2c30` - Elementos secundários (logo, bordas)
- `#b8952e` - Cor de destaque (botões, bordas de foco)
- `#f5f4f5` / `#b2afb6` - Textos principal e secundário

**Tipografia:**

- Fonte Principal: Catamaran (Google Fonts)
- Tamanhos: 1rem (padrão), 1.5rem (títulos), 0.87rem (textos auxiliares)

---

## 🔥 Destaques Técnicos

- **Arquitetura Modular:** Separação clara entre serviços, utilitários e módulos da interface.
- **Webpack + Babel:** Build automatizado com suporte a JavaScript moderno e carregamento de CSS/Assets.
- **JSON Server:** API fake para simular operações CRUD de agendamentos.
- **Validação de Horários:** Horários passados ou já ocupados são desabilitados automaticamente.
- **Day.js:** Manipulação e formatação de datas de forma consistente (locale pt-br).
- **Eventos Dinâmicos:** Atualização da lista de agendamentos ao mudar a data ou ao agendar/cancelar.
- **CSS Responsivo:** Layout flexível que se adapta a telas menores (max-width: 1100px).
- **Scroll Customizado:** Estilização da barra de rolagem para combinar com o tema.

---

## 🧑‍💻 Desenvolvedor  
<table> <tr> <td align="center"> <a href="https://www.linkedin.com/in/guilhermegeisler/"> <img src="https://avatars.githubusercontent.com/u/53203780?s=400&u=9a85ac6d2d3c55a872ab0bafd1d38d8bd0da5cc4&v=4" width="100px;" alt="Foto do Guilherme Geisler"/><br> <sub> <b>Guilherme Geisler</b> </sub> </a> </td> </tr> </table>

---

## 📧 Contato

Se tiver alguma dúvida, sugestão ou quiser entrar em contato, fique à vontade:  

- **LinkedIn**: [Guilherme Geisler](https://www.linkedin.com/in/guilhermegeisler/)  
- **Email**: [guilherme.sgeisler@gmail.com](mailto:guilherme.sgeisler@gmail.com)  

---

Feito com ❤️ por [Guilherme Geisler](https://www.linkedin.com/in/guilhermegeisler/) no curso da Rocketseat 🚀
