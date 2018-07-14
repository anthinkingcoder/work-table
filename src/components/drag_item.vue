<template>
  <div class="drag-item" :class="{'drag-item-drag':isDragMe}" :draggable="draggable"
       ref="dragItem">
    <slot>
    </slot>
  </div>
</template>

<script>
  import Emitter from '../mixins/emitter'
  export default {
    name: 'DragItem',
    mixins: [ Emitter ],
    props: {
      draggable: {
        type: Boolean,
        default: true
      },
      id: {
      }
    },
    mounted () {
      this.initDragEvent();
    },
    data () {
      return {
        isDragMe: false
      }
    },
    methods: {
      initDragEvent () {
        let dragContainer = this.$refs.dragItem
        dragContainer.ondragstart = () => {
          this.isDragMe = true
          console.info(this.isDragMe)
          this.dispatch('dragList', 'dragStart', this.id)
        }
        dragContainer.ondragend = () => {
          this.isDragMe = false
          this.dispatch('dragList', 'dragEnd', this.id)
        }
        dragContainer.ondragenter = () => {
          this.dispatch('dragList', 'dragEnter', this.id)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .drag-item {
    margin-bottom: 10px;
    width: 100%;
    padding: 2px;
    box-sizing: border-box;
  }

  .drag-item-drag {
    border: 1px dashed #b2b2b2 !important;
    border-radius: 3px;
  }
</style>
