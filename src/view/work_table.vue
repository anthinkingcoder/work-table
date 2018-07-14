<template>
  <div class="work-table-container">
    <div class="work-list-container">
      <div class="work-category">
        <p>新建</p>
      </div>
      <DragList ownClass="work-list" @dragItemEnterChange="dragItemEnterChange" @dragItemChange="dragItemChange">
        <div>
          <DragItem v-for="(item,index) in questions1" :key="item.id" :id="index">
            <div class="work-list-item" :style="{'border-left-color':item.question_priority_color}"
            >
              <a class="work-title">
                {{item.question_name}}
              </a>
              <div class="work-time">
                <!--<Icon type="eye" size="12"></Icon>-->
                <span>{{item.update_at}}</span>
              </div>
              <ul class="work-list-content">
                <li>
                  <!--<Tag type="border" color="#e4e5e7">#{{item.id}}</Tag>-->
                </li>
                <li>
                  <!--<Tag :color="item.question_priority_color">{{item.question_category_name}}</Tag>-->
                </li>
                <li>
                  <!--<Icon type="speakerphone" size="12"></Icon>-->
                  <span class="ellipsis-text">{{item.pointer_user_name}}</span>
                </li>
              </ul>
            </div>
          </DragItem>
        </div>
      </DragList>
    </div>

    <div class="work-list-container">
      <div class="work-category">
        <p>处理中</p>
      </div>
      <DragList :width="280" :height="1280">
        <DragItem v-for="(item,index) in questions2" :id="index">
          <div class="work-list-item" :style="{'border-left-color':item.question_priority_color}"
          >
            <a class="work-title">
              {{item.question_name}}
            </a>
            <div class="work-time">
              <!--<Icon type="eye" size="12"></Icon>-->
              <span>{{item.update_at}}</span>
            </div>
            <ul class="work-list-content">
              <li>
                <!--<Tag type="border" color="#e4e5e7">#{{item.id}}</Tag>-->
              </li>
              <li>
                <!--<Tag :color="item.question_priority_color">{{item.question_category_name}}</Tag>-->
              </li>
              <li>
                <!--<Icon type="speakerphone" size="12"></Icon>-->
                <span class="ellipsis-text">{{item.pointer_user_name}}</span>
              </li>
            </ul>
          </div>
        </DragItem>
      </DragList>

    </div>
  </div>
</template>

<script>
  import DragList from '../components/drag_list.vue'
  import DragItem from '../components/drag_item.vue'

  export default {
    data () {
      return {
        list: [],
        questions1: [
          {
            'question_name': '问题1',
            'id': 2,
            'question_status': 1,
            'question_priority': 0,
            'question_category': 1,
            'update_at': '2018-05-09',
            'create_user_name': '周琳',
            'pointer_user_name': '周琳',
            'question_priority_color': 'rgb(91, 192, 222)',
            'model_name': null
          },
          {
            'question_name': '问题2',
            'id': 3,
            'question_status': 1,
            'question_priority': 0,
            'question_category': 1,
            'update_at': '2018-05-18',
            'create_user_name': '周琳',
            'pointer_user_name': '周琳',
            'question_priority_color': 'rgb(91, 192, 222)',
            'model_name': '成员模块'
          },
          {
            'question_name': '问题3',
            'id': 4,
            'question_status': 1,
            'question_priority': 1,
            'question_category': 2,
            'update_at': '2018-05-09',
            'create_user_name': '周琳',
            'pointer_user_name': '周琳',
            'question_priority_color': 'rgb(91, 192, 222)',
            'model_name': '成员模块'
          },
          {
            'question_name': '问题4',
            'id': 5,
            'question_status': 1,
            'question_priority': 1,
            'question_category': 1,
            'update_at': '2018-05-09',
            'create_user_name': '周琳',
            'pointer_user_name': '周琳',
            'question_priority_color': 'rgb(91, 192, 222)',
            'model_name': '成员模块'
          }],
        questions2: [
          {
            'question_name': '有趣的bug',
            'id': 1,
            'question_status': 2,
            'question_priority': 2,
            'question_category': 2,
            'update_at': '2018-05-18',
            'create_user_name': '周琳',
            'pointer_user_name': '周琳',
            'question_priority_color': 'rgb(91, 192, 222)',
            'model_name': '成员模块'
          },
          {
            'question_name': '有趣的任务',
            'id': 1,
            'question_status': 2,
            'question_priority': 2,
            'question_category': 2,
            'update_at': '2018-05-18',
            'create_user_name': '周琳',
            'pointer_user_name': '周琳',
            'question_priority_color': 'rgb(91, 192, 222)',
            'model_name': '成员模块'
          },
          {
            'question_name': '有趣的问题',
            'id': 1,
            'question_status': 2,
            'question_priority': 2,
            'question_category': 2,
            'update_at': '2018-05-18',
            'create_user_name': '周琳',
            'pointer_user_name': '周琳',
            'question_priority_color': 'rgb(91, 192, 222)',
            'model_name': '成员模块'
          }
        ],
      }
    },
    components: {
      DragList,
      DragItem
    },
    methods: {
      dragItemChange (index) {
        console.info(this.questions1[index])
      },
      dragItemEnterChange (newIndex, oldIndex) {
        let questions = this.questions1
        newIndex = parseInt(newIndex)
        oldIndex = parseInt(oldIndex)
        console.info([newIndex, oldIndex])
        let oldQuestion = questions[oldIndex]
        this.$set(this.questions1, oldIndex, questions[newIndex])
        this.$set(this.questions1, newIndex, oldQuestion)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .work-table-container {
    overflow-x: scroll;
    background-color: #eee;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    padding-top: 200px;
  }

  .work-list-container {
    margin-right: 20px;
    background-color: #fff;
    height: 1280px;
    width: 280px;
  }

  .work-list {
    margin: 10px 5px 5px 5px;

  }

  .work-list-item {
    display: block;
    padding: 20px 10px;
    border-left: 5px solid #f8ac59;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
    border-radius: 3px;
    background-color: #fff;
  }

  .work-list-content {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .work-list-content li {
    margin-right: 10px;
    font-size: 12px;
    color: #b2b2b2;
  }

  .ellipsis-text {
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
  }

  .work-time {
    margin-top: 10px;
    text-align: left;
    font-size: 12px;
    color: #b2b2b2;
  }

  li, ul {
    list-style: none;
  }

  .work-category {
    height: 42px;
    line-height: 42px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #fff;
    border: 1px solid #eee;
  }

</style>
