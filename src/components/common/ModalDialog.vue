<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <!-- Modal header -->
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
};
</script>

<style>
.modal-mask {
  margin-top: 3rem;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  margin-top: 5%;
  height: 100%;
}

.modal-container {
  width: 70%;
  margin: 0px auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  width: 100%;
  margin-top: 0;
  text-align: center;
  color: #2d76c9;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
