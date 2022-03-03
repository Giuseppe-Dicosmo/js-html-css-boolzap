const app = new Vue({
  el: "#container",
  data: {
    chat: "",
    newMessaggio: "",
    cerca: "",
    done: false,
    orario: dayjs().format("HH:mm"),
    colse: true,
    contacts: [
      {
        name: "Michele",
        avatar: "img/DSC0683.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "img/sibvworyqs0-e1591176638733.jpg",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "img/societa-imprenditore.png",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "img/DSC0683.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],
  },
  methods: {
    pushMessaggio: function () {
      if (this.newMessaggio !== "") {
        const index = this.chat;

        const groupMessages = {
          date: `${new Date().getDate()}\/${
            new Date().getMonth() + 1
          }\/${new Date().getFullYear()} ${new Date().getHours()}\:${new Date().getMinutes()}\:${new Date().getSeconds()}`,
          text: this.newMessaggio,
          status: "sent",
        };

        this.contacts[index].messages.push(groupMessages);
        this.newMessaggio = "";

        setTimeout(() => {
          this.pushMyMessaggio(index);
        }, 2000);
      }
    },

    pushMyMessaggio: function (index) {
      const groupMessages = {
        // date: this.orario,
        date: `${new Date().getDate()}\/${
          new Date().getMonth() + 1
        }\/${new Date().getFullYear()} ${new Date().getHours()}\:${new Date().getMinutes()}\:${new Date().getSeconds()}`,
        text: "ok",
        status: "received",
      };
      this.contacts[index].messages.push(groupMessages);
    },

    ora: function (date) {
      const ore = date.split(" ")[1];
      return ore.substring(0, 5);
    },
  },
});
