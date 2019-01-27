const Home = { 

  data: function () {
    return {
      headline: `Ahoy, I'm Kalle`,
      subheadline: `Product Manager, UI/UX Designer, Magician and Vagabond`,
    }
  },


  template: `
  <div id="home">
    <div class="row block hero">
      <div class="large-10 medium-10 small-12 small-centered medium-centered large-centered columns">
        <div class="large-12 columns">
          <div class="hero-image">
            <img src="src/img/headshot@2x.png" alt="">
          </div>
          <div class="hero-title">
            <h1><strong>{{ headline }}</strong></h1>
            <h3>{{ subheadline }}</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="row block dual-info-block">
      <div class="large-10 medium-10 small-12 small-centered medium-centered large-centered columns">
        <div class="large-5 columns info-block-sidebar">
          <div class="info-block">
            <h3><strong><div class="underline"></div>Where I am</strong></h3>
            <p><strong>Currently:</strong> Swiss alps</p>
            <p><strong>Next up:</strong> Bristol</p>
            <a href="https://docs.google.com/spreadsheets/d/14bqDOb2B-KImXapcQs3Iq3OaZe7RG-Ie6iypnn4BqRE/edit#gid=1055595212">See my travel plans</a>
          </div>
          <div class="info-block">
            <h3 style="line-height: 30px;"><div style="width: 180px; bottom: -35px" class="underline"></div><strong>What I'm <div style="bottom: -35px" class="underline"></div>working on</strong></h3>
            <ol>
              <li>Engineering Manager at IWT</li>
              <li>Creating software at Kin</li>
              <li>Learning Vue.js</li>
            </ol>
          </div>
        </div>
        <div class="large-7 columns">
          <h1><strong>Me in 10 seconds:</strong></h1>
          <p>Half Norwegian, half Finnish. Been traveling the world full-time the last three years. Used to be a professional magician, then stumbled into tech.</p>
          <p>Learning is my most reliable source of happiness. I’m always looking at picking up new skills. Currently, I’m learning to program, but in the past, I’ve dabbled in everything from leather work, to singing and photography.</p>
      </div>
    </div>
    </div>
  </div>

  ` }

const BlogHome = { 

  data: function () {
    return {
      page_title: 'Blog Posts',
      posts: [] 
    }
  },

  methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 10
        }).then(res => {
          this.posts = res.data.data
        })
      }
    },
    created() {
      this.getPosts()
    },
  
  template: `

  <div id="blog-home">
    <div class="large-8 medium-10 small-10 medium-centered small-centered large-centered">
        <div
            v-for="(post,index) in posts"
            :key="post.slug + '_' + index"
            class="teaser"
          >
            <router-link :to="'/blog/' + post.slug">
              <article class="media">
                <figure>
                  <img
                    v-if="post.featured_image"
                    :src="post.featured_image"
                    alt=""
                  >
                </figure>
                <h3>{{ post.title }}</h3>
                <p>{{ post.summary }}</p>
                <div class="large-3">
                  <button>Read essay</button>
                </div>
              </article>
            </router-link>
          </div>
      </div>
    </div>
</div>`
}

const BlogPost = { 

  data: function () {
    return {
      post: [] 
    }
  },

  methods: {
    getPost() {
      butter.post.retrieve(this.$route.params.slug)
        .then(res => {
          this.post = res.data
        }).catch(res => {
          console.log(res)
        })
    }
  },
  created() {
      this.getPost()
  },


  template: `
    <div id="blog-post" class="article">
    <div class="large-8 medium-10 small-10 medium-centered small-centered large-centered">
      <img :src="post.data.featured_image" alt=""/>
      <h1>{{ post.data.title }}</h1>
      <h4>By: {{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
      <div v-html="post.data.body"></div>

      <router-link
        v-if="post.meta.previous_post"
        :to="/blog/ + post.meta.previous_post.slug"
        class="button"
      >
        {{ post.meta.previous_post.title }}
      </router-link>
      <router-link
        v-if="post.meta.next_post"
        :to="/blog/ + post.meta.next_post.slug"
        class="button"
      >
        {{ post.meta.next_post.title }}
      </router-link>
    </div>
  </div>
  `
}

  

  

const Contact = { template: `
  <div id="contact">
    <div class="row block dual-info-block">
        <div class="large-10 medium-10 small-12 small-centered medium-centered large-centered columns">
          <div class="large-7 columns">
            <h1><strong>Contact:</strong></h1>
            <p>If you want to get in touch, drop me a line below or contact me through email or WhatsApp.</p>
            <form id="contact-form" method="POST" action="https://formspree.io/hello@kallemoen.com">
              <input type="text" name="name" placeholder="Your name">
              <input type="text" name="email" placeholder="Your email">
              <textarea name="message" placeholder="Write something witty…"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
          <div class="large-5 columns info-block-sidebar">
            <div class="info-block">
              <h3><strong><div class="underline" style="width:120px;"></div>Say hi</strong></h3>
              <p><strong>Email:</strong> hello@kallemoen.com</p>
              <p><strong>WhatsApp:</strong> +47 970 93 175</p>
            </div>
            <div class="info-block">
              <h3><strong><div class="underline"></div>The Socials</strong></h3>
              <p><strong>Facebook:</strong> <a href="https://www.facebook.com/KalleMoen">/kallemoen</a></p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/kallemoen/">/in/kallemoen</a></p>
              <p><strong>Instagram:</strong> <a href="https://www.instagram.com/kallemoen/">@kallemoen</a></p>
            </div>
          </div>
        </div>
      </div>
  </div>`
}



const router = new VueRouter({
  saveScrollPosition: true,
  routes: [
    { path: '/', component: Home },
    { path: '/blog', name: 'blog-home', component: BlogHome },
    { path: '/blog/:slug', name: 'blog-post', component: BlogPost },
    { path: '/contact', component: Contact }
  ]
})

const app = new Vue({
  router,

  data: {
    butter: null,
  },

  created () {
    window.addEventListener("load", this.assignButter);
  },

  methods: {
    assignButter: function () {
      this.butter = window.butter;
    }
  }
}).$mount('#app')
