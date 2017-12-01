<template>
  <div>
    <q-toolbar color="purple">
      <!--
        For Toolbar title, we use
        QToolbarTitle component
      -->
      <q-toolbar-title>
        
        <i class="material-icons">grade</i> {{title}}
      </q-toolbar-title>
      <!--
        In a Toolbar, buttons are best
        configured as "flat" and with an icon,
        but any button will do
      -->
      <q-btn flat>
        <q-icon name="face" />
      </q-btn>
      <!--
        ...and also small flat round buttons
      -->
      <q-btn flat round small>
        <q-icon name="favorite" />
      </q-btn>
    </q-toolbar>

    <q-input v-model="childName" float-label="Movie Title" />
    <q-input v-model="desc" float-label="Description" />
    <q-input v-model="ylink" float-label="Trailer Video Link" />
    <q-btn icon="add" @click="add(childName, desc, ylink)" color="purple">Add Movie</q-btn>
    
    <q-list highlight>
      <q-list-header>My Favorite Movies</q-list-header>
      <q-item v-for="ch in todos" :key="ch['.key']">
        <q-item-main>
          <q-item-tile label>{{ch.task}}</q-item-tile>
          <!-- <q-item-tile sublabel>index {{ch['.key']}}</q-item-tile> -->
        </q-item-main>
        <q-item-side right>
          <q-btn @click="remove(ch['.key'])" round small color="purple" icon="delete" />
        </q-item-side>
        <q-item-side>
          <q-btn @click="updateItem(ch['.key'])" round small color="purple" icon="edit" />
        </q-item-side>
      </q-item>
    </q-list>
  </q-list>
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
  QItemTile
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
    QItemTile
  },
  mounted () {
    this.$bindAsArray('todos', this.$db.ref('todos'))
  },
  data () {
    return {
      title: 'Movies',
      todos: [],
      childName: '',
      desc: '',
      ylink: '',
      mother: {
        name: 'Mama',
        children: [
          {name: 'The Last Jedi'},
          {name: 'The Return of the Jedi'}
        ]
      }
    }
  },
  methods: {
    add (task, desc, ylink) {
      let todo = {
        task,
        desc,
        ylink
      }
      // push mo pa
      // this.mother.children.push(child)
      this.$firebaseRefs.todos.push(todo)
      this.childName = ''
      this.desc = ''
      this.ylink = ''
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