

class Cadastro {
   #contato = 5511958480468;
   constructor() {
      //declara dentro do construtor o DOM
      const nome = document.querySelector('#nome')
      const idade = document.querySelector('#idade')
      const estadocivil = document.querySelector('#ec')
      const container = document.querySelector('.navbar')
      const mnsErro = document.querySelector('.erro')
      const whatsapp = document.querySelector('.whatsapp')
      const btn = document.querySelector('#btn')

      //instância
      //declara cada objeto e sua propriedade e inicializa cada 
      this.nome = nome;
      this.idade = idade;
      this.estadocivil = estadocivil;
      this.container = container;
      this.mnsErro = mnsErro;
      this.whatsapp = whatsapp;
      this.btn = btn;
      
      

   }


   eventoInput() {



   }
   contatoWhatsapp() {
      this.whatsapp.addEventListener('click', (e) => {
         e.preventDefault()

         const nome = this.nome.value;
         const idade = this.idade.value;
         const ec = this.estadocivil.value;

         if (nome.trim() === '' || idade.trim() === '' || ec.trim() === '') {
            this.mnsErro.style.color = 'white';
            return this.mnsErro.textContent = 'preencha os campos'


         }
         else {


            const mensagem = `Olá tudo bem meu nome é ${this.nome.value} 
            vi seu número ${this.#contato} e tenho ${this.idade.value}, meu estado civil é ${this.estadocivil.value}
         `
            const url = `https://wa.me/${this.#contato}?text=${encodeURIComponent(mensagem)}`;
            window.open(url, '_blank')

            //reset
            this.nome.value = ''
            this.idade.value = ''
            this.estadocivil.value = ''
            this.mnsErro.textContent = ''


         }

      })

   }
   //
}

const novocadastro = new Cadastro();
novocadastro.eventoInput()
novocadastro.contatoWhatsapp()








































