<template>
    <div class="layout-padding card-examples row items-start">
        <q-toolbar color="purple">
        <q-toolbar-title> 
        <i class="material-icons">grade</i> {{title}}
        </q-toolbar-title></q-toolbar>

        <q-card v-for="movie in todos" :key="movie['.key']" >
        <q-card-media>
            <q-video
           :src="movie.ylink"
           style="width: 320px; height: 240px"
              
            />
            <!-- <pre>{{movie.ylink}}</pre> -->
        </q-card-media>
        <q-card-title>
           {{movie.task}} 
            <!-- <span slot="subtitle">{{movie.desc}}</span> -->
        </q-card-title>
        <q-card-main>
          <p style="word-wrap:break word;">{{movie.desc}}</p>
        </q-card-main>
        </q-card>
    </div>
</template>
      

<script>

import {
  // dom,
  // event,
  // openURL,
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QInput,
  QItemTile,
  QCardMain,
  QVideo,
  QCard,
  QCardMedia,
  QCardTitle
} from 'quasar'

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QInput,
    QItemTile,
    QCardMain,
    QVideo,
    QCardMedia,
    QCardTitle,
    QCard
  },
  mounted () {
    this.$bindAsArray('todos', this.$db.ref('todos'))
  },
  data () {
    return {
      title: 'Latest Movie Trailers',
      todos: [],
      childName: '',
      mother: {
        name: 'Mama',
        children: [
          {
            name: 'IronMan',
            desc: '',
            ylink: ''
          },
          {
            name: 'The Last Jedi',
            desc: 'The Last Jedi',
            ylink: ''
          },
          {
            name: 'The Return of the Jedi',
            desc: '',
            ylink: ''
          },
          {
            name: 'The Return of the Jedi',
            desc: '',
            ylink: ''
          }
        ]
      }
    }
  },
  methods: {
    add (task) {
      let todo = {
        task
      }
      // push mo pa
      // this.mother.children.push(child)
      this.$firebaseRefs.todos.push(todo)
      this.childName = ''
    },
    mounted () {
      this.$bindAsArray('todos', this.$db.ref('todos'))
    },
    remove (i) {
      // this.mother.children.splice(i, 1)
      this.$firebaseRefs.todos.child(i).remove()
    },
    updateItem: function (item) {
      // item =
      const {
        todos
      } = this.$firebaseRefs
      todos.child(todos['.key']).set(item)
    }
  }
}
</script>