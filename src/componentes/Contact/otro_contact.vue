<template>
  <div id="app">
    <form class="vue-form" @submit.prevent="submit">
      <div class="error-message">
        <p v-show="!email.valid">Por favor, ingrese un email válido</p>
      </div>

      <fieldset>
        <legend>Formulario de Contacto</legend>
        <div>
          <label class="label" for="name">Nombre</label>
          <input type="text" name="name" id="name" required="" v-model="name" />
        </div>
        <div>
          <label class="label" for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required=""
            :class="{ email, error: !email.valid }"
            v-model="email.value"
          />
        </div>

        <div>
          <h4>Motivos</h4>

          <ul class="vue-form-list">
            <li>
              <input
                type="radio"
                name="radio-1"
                id="radio-1"
                value="angular"
                v-model="selection.framework"
              />
              <label for="radio-1">Hosting</label>
            </li>
            <li>
              <input
                type="radio"
                name="radio-2"
                id="radio-2"
                value="react"
                v-model="selection.framework"
              />
              <label for="radio-2">Diseño de página web</label>
            </li>
            <li>
              <input
                type="radio"
                name="radio-3"
                id="radio-3"
                value="vue"
                v-model="selection.framework"
              />
              <label for="radio-3">Mantenimiento</label>
            </li>
          </ul>
        </div>

        <div>
          <label class="label" for="textarea">Message with Counter</label>
          <textarea
            class="message"
            name="textarea"
            id="textarea"
            required=""
            v-model="message.text"
            :maxlength="message.maxlength"
          ></textarea>
          <span class="counter"
            >{{ message.text.length }} / {{ message.maxlength }}</span
          >
        </div>
        <div><input type="submit" value="Send Form" /></div>
      </fieldset>
    </form>

    <div class="debug">
      <pre><code>{{ $data }}</code></pre>
    </div>
  </div>
</template>
<style src="./contact.css"></style>
