<template>
  <div class="container m-auto mt-5 px-3">
    <div
      class="text-green-theme font-playfair text-5xl text-center p-4 font-extrabold"
    >
      Contact <span class="text-green-theme">Us</span>
    </div>
    <div class="text-red-theme text-center text-3xl font-bold mb-6">
      We'd love to hear <span class="text-green-theme">from you</span>
    </div>
    <form class="mb-4 md:flex md:flex-wrap" novalidate @submit.prevent="submit">
      <div class="field-group mb-4 md:w-full">
        <label class="field-label" for="email">Message</label>

        <textarea
          ref="message"
          v-model="message"
          class="field md:w-168 text-lg"
          name="message"
          rows="10"
          cols="50"
          required
          minlength="5"
        ></textarea>
      </div>
      <div class="field-group mb-4 md:w-full">
        <label class="field-label" for="email">Send via: </label>
        <div class="radio">
          <label class="cursor-pointer font-bold" for="WA">Whatsapp</label>
          <input id="WA" v-model="via" class="field" value="wa" type="radio" />
        </div>
        <div class="radio">
          <label class="cursor-pointer font-bold" for="Email">Email</label>
          <input
            id="Email"
            v-model="via"
            class="field"
            value="email"
            type="radio"
          />
        </div>
      </div>
      <div class="flex w-full">
        <MyButton class="sm:w-44 w-full" type="submit">Send</MyButton>
      </div>
    </form>
    <a ref="link"></a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      emailSubject: 'Customer Question From Miaumi Web',
      message: '',
      via: 'wa',
    }
  },
  head: {
    title: 'Contact Us | Miaumi Cattery',
  },
  created() {
    const query = this.$route.query
    this.message = query.body || ''
    this.emailSubject = query.subject || this.emailSubject
  },
  methods: {
    submit() {
      const messageElm = this.$refs.message
      if (!messageElm.checkValidity()) {
        messageElm.classList.add('invalid')
        messageElm.reportValidity()
        return
      } else {
        messageElm.classList.remove('invalid')
      }

      if (this.via === 'wa') {
        this.sendViaWA()
      } else {
        this.sendViaEmail()
      }
    },
    setupLink(link, type) {
      const anchor = this.$refs.link

      anchor.setAttribute('href', link)
      if (type === 'wa') {
        anchor.setAttribute('rel', 'noreferrer noopener')
        anchor.setAttribute('target', '_blank')
      }
      anchor.click()

      this.message = ''
    },
    sendViaWA() {
      let payload = `Hello,\n\n${this.message}`
      payload = encodeURIComponent(payload)

      const base =
        navigator.maxTouchPoints > 1
          ? `https://wa.me/{{phone}}/?text={{text}}`
          : `https://web.whatsapp.com/send?phone={{phone}}&text={{text}}`

      const link = base
        .replace('{{phone}}', '6282348005555')
        .replace('{{text}}', payload)

      this.setupLink(link, 'wa')
    },
    sendViaEmail() {
      let payload = `Hello,\n\n ${this.message}`
      payload = encodeURIComponent(payload)

      const base = 'mailto:{{email}}?subject={{subject}}&body={{body}}'

      const link = base
        .replace('{{email}}', 'mamicattery@gmail.com')
        .replace('{{subject}}', encodeURIComponent(this.emailSubject))
        .replace('{{body}}', payload)

      this.setupLink(link)
    },
  },
}
</script>
