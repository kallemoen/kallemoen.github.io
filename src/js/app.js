const Home = {

  data: function () {
    return {
      headline: `Ahoy, I'm Kalle`,
      subheadline: `Product Manager and Entrepreneur`,
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

    <div class="row block dual-info-block last">
      <div class="large-10 medium-10 small-12 small-centered medium-centered large-centered columns">
        <div class="large-5 columns info-block-sidebar">
          <div class="info-block">
            <h3><strong><div class="underline"></div>Where I am</strong></h3>
            <p><strong>Currently: </strong>Lisbon</p>
            <p><strong>Next up: </strong>Buenos Aires</p>
          </div>
          <div class="info-block">
            <h3 style="line-height: 30px;"><div style="width: 180px; bottom: -35px" class="underline"></div><strong>What I'm <div style="bottom: -35px" class="underline"></div>working on</strong></h3>
            <ol>
              <li><a href="www.getkin.io">Co-founder at Kin</a></li>
              <li>Studying Math</li>
            </ol>
          </div>
        </div>
        <div class="large-7 columns">
          <h1><strong>Me in 10 seconds:</strong></h1>
          <p>Half Norwegian, half Finnish. Been traveling the world full-time for the last four years. Used to be a professional magician, then stumbled into tech.</p>
          <p>Learning is my most reliable source of happiness. I’m always looking at picking up new skills. Currently, I’m studying math, but in the past, I’ve dabbled in everything from leatherwork, to singing and photography.</p>
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
      <div class="opt-in">
        <div class="content-wrapper">
          <h3>Want to read more articles like this?</h3>
          <p>Drop your email below and I'll let you know when I write another one.</p>


          <!-- Begin Mailchimp Signup Form -->
          <div id="mc_embed_signup">
          <form action="https://kallemoen.us20.list-manage.com/subscribe/post?u=e4ab87fd73e22a38e086d80d7&amp;id=2ac6b04364" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
          <div class="mc-field-group">
          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Your email...">
          </div>
          <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
          </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e4ab87fd73e22a38e086d80d7_2ac6b04364" tabindex="-1" value=""></div>
          <button type="submit" value="Count me in!" name="subscribe" id="mc-embedded-subscribe" class="button">Count me in!</button>
          </div>
          </form>
          </div>
          <!--End mc_embed_signup-->
        </div>
       </div>







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
          <div class="large-5 columns info-block-sidebar last">
            <div class="info-block">
              <h3><strong><div class="underline" style="width:120px;"></div>Say hi</strong></h3>
              <p><strong>Email:</strong> hello@kallemoen.com</p>
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

const Projects = {

  data: function () {
    return {
      headline: `Projects`,
      subheadline: `Some of my side-projects over the years`,
    }
  },


  template: `
  <div id="home">
    <div class="row block hero">
      <div class="large-10 medium-10 small-12 small-centered medium-centered large-centered columns">
        <div class="large-6 large-centered columns">
          <div class="hero-title-noimg">
            <h1><strong>{{ headline }}</strong></h1>
            <h3>{{ subheadline }}</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="row projects last">
      <div class="large-10 medium-10 small-11 small-centered medium-centered large-centered">
        <div class="large-5 medium-5 small-12 columns">
          <img src="./src/img/snuggle.png">
        </div>
        <div class="large-7 medium-7 small-12 columns">
          <h3><strong>Snugglepoof t-shirt</strong></h3>
          <p>For a while, everyone at my company was obsessed with which Harry Potter house they were in. Our CEO, who was totally out of the loop, managed to mispronounce Hufflepuff as Snugglepoof in a company-wide call. A colleague and I found it  hilarious, and I decided to design our own emblem. I chose the armadillo as the house animal since we had recently done armadillo racing at a company off-site. We ended up printing it on t-shirts and sending it to everyone in the company.</p>
        </div>
      </div>
    </div>

    <div class="row projects">
      <div class="large-10 medium-10 small-11 small-centered medium-centered large-centered">
        <div class="large-5 medium-5 small-12 columns">
          <img src="./src/img/leather-wallet.png">
        </div>
        <div class="large-7 medium-7 small-12 columns">
          <h3><strong>Handmade leather wallets</strong></h3>
          <p>Back in 2014, I was part of starting a maker space in Oslo. During that time I got to know a guy that did leather work. He taught me and a friend the basics and let us borrow his tools. When Christmas approached, the maker space had a member booth at a Christmas design market. My friend and I decided to make a batch of leather wallets that we sold. The wallets we had left became Christmas presents that year. </p>
        </div>
      </div>
    </div>

    <div class="row projects">
      <div class="large-10 medium-10 small-11 small-centered medium-centered large-centered">
        <div class="large-5 medium-5 small-12 columns">
          <img src="./src/img/smm.png">
        </div>
        <div class="large-7 medium-7 small-12 columns">
          <h3><strong>Simple Mantra Meditation</strong></h3>
          <p>I've meditated big parts of my life. In early 2018 I wanted to try mantra-based meditation like TM, which was different from what I had done in the past. After researching it, I learned that it was difficult to learn it without paying thousands of dollars. I found this so stupid that I decided to build a mini-site that explains exactly how you do it.</p>
        </div>
      </div>
    </div>

    <div class="row projects">
      <div class="large-10 medium-10 small-11 small-centered medium-centered large-centered">
        <div class="large-5 medium-5 small-12 columns">
          <img src="./src/img/books.png">
        </div>
        <div class="large-7 medium-7 small-12 columns">
          <h3><strong>Book notes</strong></h3>
          <p>I discuss book recommendations with friends all the time. Instead of writing down book recommendations to everyone that asks, I've created a public Workflowy doc where I share my book notes and a personal score from 1-5.  <a href="https://workflowy.com/s/book-notes/P3PY4iJlsz9pDsVn">You can find my notes here.</a> (external link)</p>
        </div>
      </div>
    </div>

  </div>
  ` }




const router = new VueRouter({
  hashbang: false,
  saveScrollPosition: true,
  routes: [
    { path: '/', component: Home },
    { path: '/blog', name: 'blog-home', component: BlogHome },
    { path: '/blog/:slug', name: 'blog-post', component: BlogPost },
    { path: '/contact', component: Contact },
    { path: '/projects', component: Projects }
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
