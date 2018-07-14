<template>
  <div class="drag-list" :class="ownClass" ref="dragList">
    <slot></slot>
  </div>
</template>
<script>
  import Emitter from '../mixins/emitter'

  let id = 1
  export default {
    name: 'dragList',
    mixins: [Emitter],
    props: {
      anchorable: {
        type: Boolean,
        default: true
      },
      ownClass: {
        type: [String, Number]
      },

    },
    data () {
      return {
        dragActiveId: '',
        curDragEnterId: '',
        curDragListId: '',
        id: '',
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        this.$on('dragStart', activeId => {
          this.dragActiveId = activeId
          this.curDragEnterId = activeId
          this.curDragListId = this.id
        })

        this.$on('dragEnd', id => {
          this.$emit('dragItemChange', id)
        })

        this.$on('dragEnter', id => {
          if (this.isDragOwnDragItem ()) {

          }
          if (this.curDragEnterId !== id && this.id !== this.dragActiveId) {
            this.$emit('dragItemEnterChange', this.curDragEnterId, id)
            this.curDragEnterId = id
          }
        })
        this.id = this.getId()

        this.initDragEvent()
      },
      getId () {
        return id++
      },
      isDragOwnDragItem () {
        return this.curDragListId === this.id
      },
      initDragEvent () {
        let dragList = this.$refs.dragList
        dragList.ondragenter = () => {
          console.info('workList ondragenter')
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .drag-list {
  }


</style>
