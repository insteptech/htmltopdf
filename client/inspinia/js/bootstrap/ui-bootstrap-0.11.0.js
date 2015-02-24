



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>bootstrap/ui-bootstrap-0.11.0.js at gh-pages · angular-ui/bootstrap</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="angular-ui/bootstrap" name="twitter:title" /><meta content="Native AngularJS (Angular) directives for Bootstrap. Small footprint (5kB gzipped!), no 3rd party JS dependencies (jQuery, bootstrap JS) required!" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/1530011?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/1530011?v=3&amp;s=400" property="og:image" /><meta content="angular-ui/bootstrap" property="og:title" /><meta content="https://github.com/angular-ui/bootstrap" property="og:url" /><meta content="Native AngularJS (Angular) directives for Bootstrap. Small footprint (5kB gzipped!), no 3rd party JS dependencies (jQuery, bootstrap JS) required!" property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="4C6C100A:5F9A:CFF939C:5461F443" name="octolytics-dimension-request_id" /><meta content="611561" name="octolytics-actor-id" /><meta content="jorgeramos" name="octolytics-actor-login" /><meta content="0c9da8e4c1cd70f10571570417cbaff258a9c6fb62d5d651addcc769ed47b18b" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="UpX9zkAoRLLGVPTElnv6zwlHFV7rKB/ary14WappPcHFs4r14MqCeY9CYT+JHOWye7ctjzsqLfSGfjBoFx2DPw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-94520383be830bbbe79cdce9fb3f76d4037ec1ca67d72952e14a36b8c2362b55.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-9464c22b2a91bc6a645005fea4347a43672ae879419c4d60808c39bcf2b68748.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="e955c7b0cd21a51d92e14c023ca0eb10">

      
  <meta name="description" content="Native AngularJS (Angular) directives for Bootstrap. Small footprint (5kB gzipped!), no 3rd party JS dependencies (jQuery, bootstrap JS) required!">
  <meta name="go-import" content="github.com/angular-ui/bootstrap git https://github.com/angular-ui/bootstrap.git">

  <meta content="1530011" name="octolytics-dimension-user_id" /><meta content="angular-ui" name="octolytics-dimension-user_login" /><meta content="6094683" name="octolytics-dimension-repository_id" /><meta content="angular-ui/bootstrap" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="6094683" name="octolytics-dimension-repository_network_root_id" /><meta content="angular-ui/bootstrap" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/angular-ui/bootstrap/commits/gh-pages.atom" rel="alternate" title="Recent Commits to bootstrap:gh-pages" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/angular-ui/bootstrap/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/angular-ui/bootstrap/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/jorgeramos" data-ga-click="Header, go to profile, text:username">
      <img alt="jorgeramos" class="avatar" data-user="611561" height="20" src="https://avatars0.githubusercontent.com/u/611561?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">jorgeramos</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="angular-ui/bootstrap">This repository</span>
    </li>
      <li>
        <a href="/angular-ui/bootstrap/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="BqGX+qHjYTnhVsfhmMRZbnPNH7ok+eWdg0NdAm4um4SyROP43NvUGCeDASNre4ttoigF3kWu1gNqIM7bSg49wA==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Dr4vu7C/K1z4Hif1UVhZ4NMeDUvsc/txrgG6P+K4nOpXp8HF8l6bvagvmjEr7kwLtgyUxF1lQ1IMn5ZVykiDig==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="6094683" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/angular-ui/bootstrap/watchers">
        543
      </a>
      <a href="/angular-ui/bootstrap/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/angular-ui/bootstrap/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="t+GGm6aJoUvhS8G1rUtDOwDozAe355ZJ2OE60WLz3RrsfjqMPl3RdrT+Bwq0Fi+e6QwvE2dwanoXfGzBcvm2eQ==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar angular-ui/bootstrap">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/angular-ui/bootstrap/stargazers">
          6,826
        </a>
</form>
    <form accept-charset="UTF-8" action="/angular-ui/bootstrap/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="AHwiYxOH9nIRNCg2jRJG9REsU/Pmxy7zQclDA9CDHHyCYYivFdcnUqxTh99T4hlm3sqB+lPuKLVCJa6+e9xVBA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star angular-ui/bootstrap">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/angular-ui/bootstrap/stargazers">
          6,826
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/angular-ui/bootstrap/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of angular-ui/bootstrap to your account" aria-label="Fork your own copy of angular-ui/bootstrap to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/angular-ui/bootstrap/network" class="social-count">3,715</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/angular-ui" class="url fn" itemprop="url" rel="author"><span itemprop="title">angular-ui</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/angular-ui/bootstrap" class="js-current-repository js-repo-home-link" data-pjax-container-selector="#js-repo-pjax-container">bootstrap</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders" role="navigation" data-issue-count-url="/angular-ui/bootstrap/issues/counts" data-pjax-container-selector="#js-repo-pjax-container">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/angular-ui/bootstrap/tree/gh-pages" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /angular-ui/bootstrap/tree/gh-pages">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/angular-ui/bootstrap/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /angular-ui/bootstrap/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/angular-ui/bootstrap/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /angular-ui/bootstrap/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/angular-ui/bootstrap/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /angular-ui/bootstrap/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/angular-ui/bootstrap/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /angular-ui/bootstrap/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/angular-ui/bootstrap/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /angular-ui/bootstrap/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/angular-ui/bootstrap.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/angular-ui/bootstrap.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:angular-ui/bootstrap.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:angular-ui/bootstrap.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/angular-ui/bootstrap" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/angular-ui/bootstrap" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/angular-ui/bootstrap" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save angular-ui/bootstrap to your computer and use it in GitHub Desktop." aria-label="Save angular-ui/bootstrap to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/angular-ui/bootstrap/archive/gh-pages.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of angular-ui/bootstrap as a zip file"
                   title="Download the contents of angular-ui/bootstrap as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/angular-ui/bootstrap/blob/f07fecb62f114b6d6d8ecd4926b0497e3acea21c/ui-bootstrap-0.11.0.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:be9143947d1eb9f85e16a09e41cfd948 -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="gh-pages"
    title="gh-pages"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">gh-pages</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/blob/fix2110/ui-bootstrap-0.11.0.js"
                 data-name="fix2110"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="fix2110">fix2110</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/blob/gh-pages/ui-bootstrap-0.11.0.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/blob/karma11/ui-bootstrap-0.11.0.js"
                 data-name="karma11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="karma11">karma11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/blob/master/ui-bootstrap-0.11.0.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/blob/popover-clickoff/ui-bootstrap-0.11.0.js"
                 data-name="popover-clickoff"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="popover-clickoff">popover-clickoff</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/blob/pr1862/ui-bootstrap-0.11.0.js"
                 data-name="pr1862"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="pr1862">pr1862</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/blob/ttip_refactor/ui-bootstrap-0.11.0.js"
                 data-name="ttip_refactor"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="ttip_refactor">ttip_refactor</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/tree/0.11.2/ui-bootstrap-0.11.0.js"
                 data-name="0.11.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.11.2">0.11.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/tree/0.11.1/ui-bootstrap-0.11.0.js"
                 data-name="0.11.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.11.1">0.11.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/tree/0.11.0/ui-bootstrap-0.11.0.js"
                 data-name="0.11.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.11.0">0.11.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/tree/0.10.0/ui-bootstrap-0.11.0.js"
                 data-name="0.10.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.10.0">0.10.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/tree/0.9.0/ui-bootstrap-0.11.0.js"
                 data-name="0.9.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.9.0">0.9.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/tree/0.8.0/ui-bootstrap-0.11.0.js"
                 data-name="0.8.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.8.0">0.8.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/tree/0.7.0/ui-bootstrap-0.11.0.js"
                 data-name="0.7.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.7.0">0.7.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/tree/0.6.0/ui-bootstrap-0.11.0.js"
                 data-name="0.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.6.0">0.6.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/tree/0.5.0/ui-bootstrap-0.11.0.js"
                 data-name="0.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.5.0">0.5.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/tree/0.4.0/ui-bootstrap-0.11.0.js"
                 data-name="0.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.4.0">0.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/tree/0.3.0/ui-bootstrap-0.11.0.js"
                 data-name="0.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.3.0">0.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/tree/0.2.0/ui-bootstrap-0.11.0.js"
                 data-name="0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.0">0.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular-ui/bootstrap/tree/0.1.0/ui-bootstrap-0.11.0.js"
                 data-name="0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.0">0.1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/angular-ui/bootstrap/find/gh-pages"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="ui-bootstrap-0.11.0.js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/angular-ui/bootstrap/tree/gh-pages" class="" data-branch="gh-pages" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">bootstrap</span></a></span></span><span class="separator"> / </span><strong class="final-path">ui-bootstrap-0.11.0.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Pawel Kozlowski" class="avatar" data-user="973550" height="24" src="https://avatars1.githubusercontent.com/u/973550?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/pkozlowski-opensource" rel="contributor">pkozlowski-opensource</a></span>
        <time datetime="2014-05-01T15:59:12Z" is="relative-time">May 1, 2014</time>
        <div class="commit-title">
            <a href="/angular-ui/bootstrap/commit/88e7851be705bb7f45fa5ea8107d8ded3b33f97b" class="message" data-pjax="true" title="chore(release): v0.11.0">chore(release): v0.11.0</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Pawel Kozlowski" data-user="973550" height="24" src="https://avatars1.githubusercontent.com/u/973550?v=3&amp;s=48" width="24" />
            <a href="/pkozlowski-opensource">pkozlowski-opensource</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>3800 lines (3259 sloc)</span>
          <span class="meta-divider"></span>
        <span>118.742 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/angular-ui/bootstrap/raw/gh-pages/ui-bootstrap-0.11.0.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/angular-ui/bootstrap/blame/gh-pages/ui-bootstrap-0.11.0.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/angular-ui/bootstrap/commits/gh-pages/ui-bootstrap-0.11.0.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw js-conduit-openfile-check"
             href="http://mac.github.com"
             data-url="github-mac://openRepo/https://github.com/angular-ui/bootstrap?branch=gh-pages&amp;filepath=ui-bootstrap-0.11.0.js"
             aria-label="Open this file in GitHub for Mac"
             data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/angular-ui/bootstrap/edit/gh-pages/ui-bootstrap-0.11.0.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/angular-ui/bootstrap/delete/gh-pages/ui-bootstrap-0.11.0.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="cm">/*</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="cm"> * angular-ui-bootstrap</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="cm"> * http://angular-ui.github.io/bootstrap/</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="cm"></span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="cm"> * Version: 0.11.0 - 2014-05-01</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="cm"> * License: MIT</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">angular.module(<span class="s2">&quot;ui.bootstrap&quot;</span>, [<span class="s2">&quot;ui.bootstrap.transition&quot;</span>,<span class="s2">&quot;ui.bootstrap.collapse&quot;</span>,<span class="s2">&quot;ui.bootstrap.accordion&quot;</span>,<span class="s2">&quot;ui.bootstrap.alert&quot;</span>,<span class="s2">&quot;ui.bootstrap.bindHtml&quot;</span>,<span class="s2">&quot;ui.bootstrap.buttons&quot;</span>,<span class="s2">&quot;ui.bootstrap.carousel&quot;</span>,<span class="s2">&quot;ui.bootstrap.dateparser&quot;</span>,<span class="s2">&quot;ui.bootstrap.position&quot;</span>,<span class="s2">&quot;ui.bootstrap.datepicker&quot;</span>,<span class="s2">&quot;ui.bootstrap.dropdown&quot;</span>,<span class="s2">&quot;ui.bootstrap.modal&quot;</span>,<span class="s2">&quot;ui.bootstrap.pagination&quot;</span>,<span class="s2">&quot;ui.bootstrap.tooltip&quot;</span>,<span class="s2">&quot;ui.bootstrap.popover&quot;</span>,<span class="s2">&quot;ui.bootstrap.progressbar&quot;</span>,<span class="s2">&quot;ui.bootstrap.rating&quot;</span>,<span class="s2">&quot;ui.bootstrap.tabs&quot;</span>,<span class="s2">&quot;ui.bootstrap.timepicker&quot;</span>,<span class="s2">&quot;ui.bootstrap.typeahead&quot;</span>]);</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">angular.module(<span class="s1">'ui.bootstrap.transition'</span>, [])</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line"><span class="cm"> * $transition service provides a consistent interface to trigger CSS 3 transitions and to be informed when they complete.</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line"><span class="cm"> * @param  {DOMElement} element  The DOMElement that will be animated.</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line"><span class="cm"> * @param  {string|object|function} trigger  The thing that will cause the transition to start:</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line"><span class="cm"> *   - As a string, it represents the css class to be added to the element.</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line"><span class="cm"> *   - As an object, it represents a hash of style attributes to be applied to the element.</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line"><span class="cm"> *   - As a function, it represents a function to be called that will cause the transition to occur.</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line"><span class="cm"> * @return {Promise}  A promise that is resolved when the transition finishes.</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">.factory(<span class="s1">'$transition'</span>, [<span class="s1">'$q'</span>, <span class="s1">'$timeout'</span>, <span class="s1">'$rootScope'</span>, <span class="kt">function</span>(<span class="nv">$q</span>, <span class="nv">$timeout</span>, <span class="nv">$rootScope</span>) {</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">  <span class="k">var</span> <span class="nf">$transition</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">element</span>, <span class="nv">trigger</span>, <span class="nv">options</span>) {</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">    options <span class="o">=</span> options <span class="o">||</span> {};</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">    <span class="k">var</span> deferred <span class="o">=</span> $q.<span class="no">defer</span>();</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">    <span class="k">var</span> endEventName <span class="o">=</span> $transition[options.animation <span class="o">?</span> <span class="s1">'animationEndEventName'</span> <span class="o">:</span> <span class="s1">'transitionEndEventName'</span>];</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">    <span class="k">var</span> <span class="nf">transitionEndHandler</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">event</span>) {</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">      $rootScope.$<span class="nf">apply</span>(<span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">        element.unbind(endEventName, transitionEndHandler);</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">        deferred.resolve(element);</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">    <span class="k">if</span> (endEventName) {</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">      element.bind(endEventName, transitionEndHandler);</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">    <span class="c1">// Wrap in a timeout to allow the browser time to update the DOM before the transition is to occur</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">    $timeout(<span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">      <span class="k">if</span> ( angular.isString(trigger) ) {</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">        element.addClass(trigger);</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">      } <span class="k">else</span> <span class="k">if</span> ( angular.isFunction(trigger) ) {</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">        trigger(element);</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">      } <span class="k">else</span> <span class="k">if</span> ( angular.isObject(trigger) ) {</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">        element.css(trigger);</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">      <span class="c1">//If browser does not support transitions, instantly resolve</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">      <span class="k">if</span> ( <span class="o">!</span>endEventName ) {</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">        deferred.resolve(element);</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">    <span class="c1">// Add our custom cancel function to the promise that is returned</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">    <span class="c1">// We can call this if we are about to run a new transition, which we know will prevent this transition from ending,</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">    <span class="c1">// i.e. it will therefore never raise a transitionEnd event for that transition</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">    <span class="no">deferred.promise</span>.<span class="nf">cancel</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">      <span class="k">if</span> ( endEventName ) {</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">        element.unbind(endEventName, transitionEndHandler);</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">      deferred.reject(<span class="s1">'Transition cancelled'</span>);</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">    <span class="k">return</span> deferred.promise;</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">  <span class="c1">// Work out the name of the transitionEnd event</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">  <span class="k">var</span> transElement <span class="o">=</span> <span class="no">document</span>.<span class="nf">createElement</span>(<span class="s1">'trans'</span>);</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">  <span class="k">var</span> transitionEndEventNames <span class="o">=</span> {</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">    <span class="s1">'WebkitTransition'</span><span class="o">:</span> <span class="s1">'webkitTransitionEnd'</span>,</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">    <span class="s1">'MozTransition'</span><span class="o">:</span> <span class="s1">'transitionend'</span>,</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">    <span class="s1">'OTransition'</span><span class="o">:</span> <span class="s1">'oTransitionEnd'</span>,</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">    <span class="s1">'transition'</span><span class="o">:</span> <span class="s1">'transitionend'</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">  <span class="k">var</span> animationEndEventNames <span class="o">=</span> {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">    <span class="s1">'WebkitTransition'</span><span class="o">:</span> <span class="s1">'webkitAnimationEnd'</span>,</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">    <span class="s1">'MozTransition'</span><span class="o">:</span> <span class="s1">'animationend'</span>,</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">    <span class="s1">'OTransition'</span><span class="o">:</span> <span class="s1">'oAnimationEnd'</span>,</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">    <span class="s1">'transition'</span><span class="o">:</span> <span class="s1">'animationend'</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">  <span class="kt">function</span> <span class="nf">findEndEventName</span>(<span class="nv">endEventNames</span>) {</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">    <span class="k">for</span> (<span class="k">var</span> name <span class="o">in</span> endEventNames){</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">      <span class="k">if</span> (transElement.<span class="no">style</span>[name] <span class="o">!==</span> <span class="kc">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">        <span class="k">return</span> endEventNames[name];</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">  $transition.transitionEndEventName <span class="o">=</span> findEndEventName(transitionEndEventNames);</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">  $transition.animationEndEventName <span class="o">=</span> findEndEventName(animationEndEventNames);</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">  <span class="k">return</span> $transition;</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">}]);</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">angular.module(<span class="s1">'ui.bootstrap.collapse'</span>, [<span class="s1">'ui.bootstrap.transition'</span>])</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">  .directive(<span class="s1">'collapse'</span>, [<span class="s1">'$transition'</span>, <span class="kt">function</span> (<span class="nv">$transition</span>) {</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">    <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">      <span class="nf">link</span>: <span class="kt">function</span> (<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>) {</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">        <span class="k">var</span> initialAnimSkip <span class="o">=</span> <span class="kc">true</span>;</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">        <span class="k">var</span> currentTransition;</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">        <span class="kt">function</span> <span class="nf">doTransition</span>(<span class="nv">change</span>) {</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">          <span class="k">var</span> newTransition <span class="o">=</span> $transition(element, change);</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">          <span class="k">if</span> (currentTransition) {</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">            currentTransition.cancel();</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">          currentTransition <span class="o">=</span> newTransition;</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">          newTransition.then(newTransitionDone, newTransitionDone);</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">          <span class="k">return</span> newTransition;</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">          <span class="kt">function</span> <span class="nf">newTransitionDone</span>() {</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">            <span class="c1">// Make sure it's this transition, otherwise, leave it alone.</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">            <span class="k">if</span> (currentTransition <span class="o">===</span> newTransition) {</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">              currentTransition <span class="o">=</span> <span class="kc">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">        <span class="kt">function</span> <span class="nf">expand</span>() {</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">          <span class="k">if</span> (initialAnimSkip) {</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">            initialAnimSkip <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">            expandDone();</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">          } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">            element.removeClass(<span class="s1">'collapse'</span>).addClass(<span class="s1">'collapsing'</span>);</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">            doTransition({ height<span class="o">:</span> element[<span class="m">0</span>].scrollHeight <span class="o">+</span> <span class="s1">'px'</span> }).then(expandDone);</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">        <span class="kt">function</span> <span class="nf">expandDone</span>() {</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">          element.removeClass(<span class="s1">'collapsing'</span>);</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">          element.addClass(<span class="s1">'collapse in'</span>);</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">          element.css({height<span class="o">:</span> <span class="s1">'auto'</span>});</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">        <span class="kt">function</span> <span class="nf">collapse</span>() {</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">          <span class="k">if</span> (initialAnimSkip) {</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">            initialAnimSkip <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">            collapseDone();</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">            element.css({height<span class="o">:</span> <span class="m">0</span>});</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">          } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">            <span class="c1">// CSS transitions don't work with height: auto, so we have to manually change the height to a specific value</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">            element.css({ height<span class="o">:</span> element[<span class="m">0</span>].scrollHeight <span class="o">+</span> <span class="s1">'px'</span> });</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">            <span class="c1">//trigger reflow so a browser realizes that height was updated from auto to a specific value</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">            <span class="k">var</span> x <span class="o">=</span> element[<span class="m">0</span>].offsetWidth;</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">            element.removeClass(<span class="s1">'collapse in'</span>).addClass(<span class="s1">'collapsing'</span>);</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">            doTransition({ height<span class="o">:</span> <span class="m">0</span> }).then(collapseDone);</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">        <span class="kt">function</span> <span class="nf">collapseDone</span>() {</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">          element.removeClass(<span class="s1">'collapsing'</span>);</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">          element.addClass(<span class="s1">'collapse'</span>);</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">        scope.$<span class="nf">watch</span>(attrs.collapse, <span class="kt">function</span> (<span class="nv">shouldCollapse</span>) {</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">          <span class="k">if</span> (shouldCollapse) {</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">            collapse();</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">          } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">            expand();</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">  }]);</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">angular.module(<span class="s1">'ui.bootstrap.accordion'</span>, [<span class="s1">'ui.bootstrap.collapse'</span>])</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">.constant(<span class="s1">'accordionConfig'</span>, {</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">  closeOthers<span class="o">:</span> <span class="kc">true</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">.controller(<span class="s1">'AccordionController'</span>, [<span class="s1">'$scope'</span>, <span class="s1">'$attrs'</span>, <span class="s1">'accordionConfig'</span>, <span class="kt">function</span> (<span class="nv">$scope</span>, <span class="nv">$attrs</span>, <span class="nv">accordionConfig</span>) {</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">  <span class="c1">// This array keeps track of the accordion groups</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">  <span class="nb">this</span>.groups <span class="o">=</span> [];</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">  <span class="c1">// Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">closeOthers</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">openGroup</span>) {</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">    <span class="k">var</span> closeOthers <span class="o">=</span> angular.isDefined($attrs.closeOthers) <span class="o">?</span> $scope.$<span class="nf">eval</span>($attrs.closeOthers) <span class="o">:</span> accordionConfig.closeOthers;</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">    <span class="k">if</span> ( closeOthers ) {</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">      angular.forEach(<span class="nb">this</span>.groups, <span class="kt">function</span> (<span class="nv">group</span>) {</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">        <span class="k">if</span> ( group <span class="o">!==</span> openGroup ) {</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">          group.isOpen <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">  <span class="c1">// This is called from the accordion-group directive to add itself to the accordion</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">addGroup</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">groupScope</span>) {</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">    <span class="k">var</span> that <span class="o">=</span> <span class="nb">this</span>;</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">    <span class="nb">this</span>.groups.<span class="nf">push</span>(groupScope);</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">    groupScope.$on(<span class="s1">'$destroy'</span>, <span class="kt">function</span> (<span class="nv">event</span>) {</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">      that.removeGroup(groupScope);</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">  <span class="c1">// This is called from the accordion-group directive when to remove itself</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">removeGroup</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">group</span>) {</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">    <span class="k">var</span> index <span class="o">=</span> <span class="nb">this</span>.groups.<span class="nf">indexOf</span>(group);</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">    <span class="k">if</span> ( index <span class="o">!==</span> <span class="o">-</span><span class="m">1</span> ) {</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">      <span class="nb">this</span>.groups.<span class="nf">splice</span>(index, <span class="m">1</span>);</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line"><span class="c1">// The accordion directive simply sets up the directive controller</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line"><span class="c1">// and adds an accordion CSS class to itself element.</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">.directive(<span class="s1">'accordion'</span>, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">    restrict<span class="o">:</span><span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">    controller<span class="o">:</span><span class="s1">'AccordionController'</span>,</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">    transclude<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">false</span>,</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">    templateUrl<span class="o">:</span> <span class="s1">'template/accordion/accordion.html'</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line"><span class="c1">// The accordion-group directive indicates a block of html that will expand and collapse in an accordion</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">.directive(<span class="s1">'accordionGroup'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">    require<span class="o">:</span><span class="s1">'^accordion'</span>,         <span class="c1">// We need this directive to be inside an accordion</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">    restrict<span class="o">:</span><span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">    transclude<span class="o">:</span><span class="kc">true</span>,              <span class="c1">// It transcludes the contents of the directive into the template</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">true</span>,                <span class="c1">// The element containing the directive will be replaced with the template</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">    templateUrl<span class="o">:</span><span class="s1">'template/accordion/accordion-group.html'</span>,</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">    scope<span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">      heading<span class="o">:</span> <span class="s1">'@'</span>,               <span class="c1">// Interpolate the heading attribute onto this scope</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">      isOpen<span class="o">:</span> <span class="s1">'=?'</span>,</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">      isDisabled<span class="o">:</span> <span class="s1">'=?'</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">    <span class="nf">controller</span>: <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">      <span class="no">this</span>.<span class="nf">setHeading</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">element</span>) {</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line">        <span class="nb">this</span>.heading <span class="o">=</span> element;</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>, <span class="nv">accordionCtrl</span>) {</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">      accordionCtrl.addGroup(scope);</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line">      scope.$<span class="nf">watch</span>(<span class="s1">'isOpen'</span>, <span class="kt">function</span>(<span class="nv">value</span>) {</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line">        <span class="k">if</span> ( value ) {</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">          accordionCtrl.closeOthers(scope);</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line">      <span class="no">scope</span>.<span class="nf">toggleOpen</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line">        <span class="k">if</span> ( <span class="o">!</span>scope.isDisabled ) {</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line">          scope.isOpen <span class="o">=</span> <span class="o">!</span>scope.isOpen;</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code js-file-line"><span class="c1">// Use accordion-heading below an accordion-group to provide a heading containing HTML</span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code js-file-line"><span class="c1">// &lt;accordion-group&gt;</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code js-file-line"><span class="c1">//   &lt;accordion-heading&gt;Heading containing HTML - &lt;img src=&quot;...&quot;&gt;&lt;/accordion-heading&gt;</span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code js-file-line"><span class="c1">// &lt;/accordion-group&gt;</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code js-file-line">.directive(<span class="s1">'accordionHeading'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code js-file-line">    transclude<span class="o">:</span> <span class="kc">true</span>,   <span class="c1">// Grab the contents to be used as the heading</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code js-file-line">    template<span class="o">:</span> <span class="s1">''</span>,       <span class="c1">// In effect remove this element!</span></td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code js-file-line">    require<span class="o">:</span> <span class="s1">'^accordionGroup'</span>,</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attr</span>, <span class="nv">accordionGroupCtrl</span>, <span class="nv">transclude</span>) {</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code js-file-line">      <span class="c1">// Pass the heading to the accordion-group controller</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code js-file-line">      <span class="c1">// so that it can be transcluded into the right place in the template</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code js-file-line">      <span class="c1">// [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code js-file-line">      accordionGroupCtrl.setHeading(transclude(scope, <span class="kt">function</span>() {}));</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code js-file-line"><span class="c1">// Use in the accordion-group template to indicate where you want the heading to be transcluded</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code js-file-line"><span class="c1">// You must provide the property on the accordion-group controller that will hold the transcluded element</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code js-file-line"><span class="c1">// &lt;div class=&quot;accordion-group&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code js-file-line"><span class="c1">//   &lt;div class=&quot;accordion-heading&quot; &gt;&lt;a ... accordion-transclude=&quot;heading&quot;&gt;...&lt;/a&gt;&lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code js-file-line"><span class="c1">//   ...</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code js-file-line"><span class="c1">// &lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code js-file-line">.directive(<span class="s1">'accordionTransclude'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code js-file-line">    require<span class="o">:</span> <span class="s1">'^accordionGroup'</span>,</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attr</span>, <span class="nv">controller</span>) {</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code js-file-line">      scope.$<span class="nf">watch</span>(<span class="kt">function</span>() { <span class="k">return</span> controller[attr.accordionTransclude]; }, <span class="kt">function</span>(<span class="nv">heading</span>) {</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code js-file-line">        <span class="k">if</span> ( heading ) {</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code js-file-line">          element.html(<span class="s1">''</span>);</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code js-file-line">          element.append(heading);</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code js-file-line">});</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code js-file-line">angular.module(<span class="s1">'ui.bootstrap.alert'</span>, [])</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code js-file-line">.controller(<span class="s1">'AlertController'</span>, [<span class="s1">'$scope'</span>, <span class="s1">'$attrs'</span>, <span class="kt">function</span> (<span class="nv">$scope</span>, <span class="nv">$attrs</span>) {</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code js-file-line">  $scope.closeable <span class="o">=</span> <span class="s1">'close'</span> <span class="o">in</span> $attrs;</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code js-file-line">.directive(<span class="s1">'alert'</span>, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code js-file-line">    restrict<span class="o">:</span><span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code js-file-line">    controller<span class="o">:</span><span class="s1">'AlertController'</span>,</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code js-file-line">    templateUrl<span class="o">:</span><span class="s1">'template/alert/alert.html'</span>,</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code js-file-line">    transclude<span class="o">:</span><span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code js-file-line">    replace<span class="o">:</span><span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code js-file-line">    scope<span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code js-file-line">      type<span class="o">:</span> <span class="s1">'@'</span>,</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code js-file-line">      close<span class="o">:</span> <span class="s1">'&amp;'</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code js-file-line">});</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code js-file-line">angular.module(<span class="s1">'ui.bootstrap.bindHtml'</span>, [])</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code js-file-line">  .directive(<span class="s1">'bindHtmlUnsafe'</span>, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code js-file-line">    <span class="k">return</span> <span class="kt">function</span> (<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attr</span>) {</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code js-file-line">      element.addClass(<span class="s1">'ng-binding'</span>).<span class="no">data</span>(<span class="s1">'$binding'</span>, attr.bindHtmlUnsafe);</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code js-file-line">      scope.$<span class="nf">watch</span>(attr.bindHtmlUnsafe, <span class="kt">function</span> <span class="nf">bindHtmlUnsafeWatchAction</span>(<span class="nv">value</span>) {</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code js-file-line">        element.html(value <span class="o">||</span> <span class="s1">''</span>);</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code js-file-line">angular.module(<span class="s1">'ui.bootstrap.buttons'</span>, [])</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code js-file-line">.constant(<span class="s1">'buttonConfig'</span>, {</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code js-file-line">  activeClass<span class="o">:</span> <span class="s1">'active'</span>,</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code js-file-line">  toggleEvent<span class="o">:</span> <span class="s1">'click'</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code js-file-line">.controller(<span class="s1">'ButtonsController'</span>, [<span class="s1">'buttonConfig'</span>, <span class="kt">function</span>(<span class="nv">buttonConfig</span>) {</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code js-file-line">  <span class="nb">this</span>.activeClass <span class="o">=</span> buttonConfig.activeClass <span class="o">||</span> <span class="s1">'active'</span>;</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code js-file-line">  <span class="nb">this</span>.toggleEvent <span class="o">=</span> buttonConfig.toggleEvent <span class="o">||</span> <span class="s1">'click'</span>;</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code js-file-line">.directive(<span class="s1">'btnRadio'</span>, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code js-file-line">    require<span class="o">:</span> [<span class="s1">'btnRadio'</span>, <span class="s1">'ngModel'</span>],</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code js-file-line">    controller<span class="o">:</span> <span class="s1">'ButtonsController'</span>,</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span> (<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>, <span class="nv">ctrls</span>) {</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code js-file-line">      <span class="k">var</span> buttonsCtrl <span class="o">=</span> ctrls[<span class="m">0</span>], ngModelCtrl <span class="o">=</span> ctrls[<span class="m">1</span>];</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code js-file-line">      <span class="c1">//model -&gt; UI</span></td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code js-file-line">      <span class="no">ngModelCtrl</span>.<span class="nf">$render</span> <span class="o">=</span> <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code js-file-line">        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$<span class="nf">eval</span>(attrs.btnRadio)));</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code js-file-line">      <span class="c1">//ui-&gt;model</span></td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code js-file-line">      element.bind(buttonsCtrl.toggleEvent, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code js-file-line">        <span class="k">var</span> isActive <span class="o">=</span> element.hasClass(buttonsCtrl.activeClass);</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code js-file-line">        <span class="k">if</span> (<span class="o">!</span>isActive <span class="o">||</span> angular.isDefined(attrs.uncheckable)) {</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code js-file-line">          scope.$<span class="nf">apply</span>(<span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code js-file-line">            ngModelCtrl.$setViewValue(isActive <span class="o">?</span> null <span class="o">:</span> scope.$<span class="nf">eval</span>(attrs.btnRadio));</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code js-file-line">            ngModelCtrl.$render();</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code js-file-line">.directive(<span class="s1">'btnCheckbox'</span>, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code js-file-line">    require<span class="o">:</span> [<span class="s1">'btnCheckbox'</span>, <span class="s1">'ngModel'</span>],</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code js-file-line">    controller<span class="o">:</span> <span class="s1">'ButtonsController'</span>,</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span> (<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>, <span class="nv">ctrls</span>) {</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code js-file-line">      <span class="k">var</span> buttonsCtrl <span class="o">=</span> ctrls[<span class="m">0</span>], ngModelCtrl <span class="o">=</span> ctrls[<span class="m">1</span>];</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code js-file-line">      <span class="kt">function</span> <span class="nf">getTrueValue</span>() {</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code js-file-line">        <span class="k">return</span> getCheckboxValue(attrs.btnCheckboxTrue, <span class="kc">true</span>);</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code js-file-line">      <span class="kt">function</span> <span class="nf">getFalseValue</span>() {</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code js-file-line">        <span class="k">return</span> getCheckboxValue(attrs.btnCheckboxFalse, <span class="kc">false</span>);</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code js-file-line">      <span class="kt">function</span> <span class="nf">getCheckboxValue</span>(<span class="nv">attributeValue</span>, <span class="nv">defaultValue</span>) {</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code js-file-line">        <span class="k">var</span> val <span class="o">=</span> scope.$<span class="nf">eval</span>(attributeValue);</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code js-file-line">        <span class="k">return</span> angular.isDefined(val) <span class="o">?</span> val <span class="o">:</span> defaultValue;</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code js-file-line">      <span class="c1">//model -&gt; UI</span></td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code js-file-line">      <span class="no">ngModelCtrl</span>.<span class="nf">$render</span> <span class="o">=</span> <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code js-file-line">        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code js-file-line">      <span class="c1">//ui-&gt;model</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code js-file-line">      element.bind(buttonsCtrl.toggleEvent, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code js-file-line">        scope.$<span class="nf">apply</span>(<span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code js-file-line">          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) <span class="o">?</span> getFalseValue() <span class="o">:</span> getTrueValue());</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code js-file-line">          ngModelCtrl.$render();</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code js-file-line">});</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code js-file-line"><span class="cm">* @ngdoc overview</span></td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code js-file-line"><span class="cm">* @name ui.bootstrap.carousel</span></td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code js-file-line"><span class="cm">*</span></td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code js-file-line"><span class="cm">* @description</span></td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code js-file-line"><span class="cm">* AngularJS version of an image carousel.</span></td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code js-file-line"><span class="cm">*</span></td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code js-file-line"><span class="cm">*/</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code js-file-line">angular.module(<span class="s1">'ui.bootstrap.carousel'</span>, [<span class="s1">'ui.bootstrap.transition'</span>])</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code js-file-line">.controller(<span class="s1">'CarouselController'</span>, [<span class="s1">'$scope'</span>, <span class="s1">'$timeout'</span>, <span class="s1">'$transition'</span>, <span class="kt">function</span> (<span class="nv">$scope</span>, <span class="nv">$timeout</span>, <span class="nv">$transition</span>) {</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code js-file-line">  <span class="k">var</span> self <span class="o">=</span> <span class="nb">this</span>,</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code js-file-line">    slides <span class="o">=</span> self.slides <span class="o">=</span> $scope.slides <span class="o">=</span> [],</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code js-file-line">    currentIndex <span class="o">=</span> <span class="o">-</span><span class="m">1</span>,</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code js-file-line">    currentTimeout, isPlaying;</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code js-file-line">  self.currentSlide <span class="o">=</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code js-file-line">  <span class="k">var</span> destroyed <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code js-file-line">  <span class="cm">/* direction: &quot;prev&quot; or &quot;next&quot; */</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code js-file-line">  self.select <span class="o">=</span> <span class="no">$scope</span>.<span class="nf">select</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">nextSlide</span>, <span class="nv">direction</span>) {</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code js-file-line">    <span class="k">var</span> nextIndex <span class="o">=</span> slides.<span class="nf">indexOf</span>(nextSlide);</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code js-file-line">    <span class="c1">//Decide direction if it's not given</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code js-file-line">    <span class="k">if</span> (direction <span class="o">===</span> <span class="kc">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code js-file-line">      direction <span class="o">=</span> nextIndex <span class="o">&gt;</span> currentIndex <span class="o">?</span> <span class="s1">'next'</span> <span class="o">:</span> <span class="s1">'prev'</span>;</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code js-file-line">    <span class="k">if</span> (nextSlide <span class="o">&amp;&amp;</span> nextSlide <span class="o">!==</span> self.currentSlide) {</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code js-file-line">      <span class="k">if</span> ($scope.$currentTransition) {</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code js-file-line">        $scope.$currentTransition.cancel();</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code js-file-line">        <span class="c1">//Timeout so ng-class in template has time to fix classes for finished slide</span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code js-file-line">        $timeout(goNext);</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code js-file-line">      } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code js-file-line">        goNext();</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code js-file-line">    <span class="kt">function</span> <span class="nf">goNext</span>() {</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code js-file-line">      <span class="c1">// Scope has been destroyed, stop here.</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code js-file-line">      <span class="k">if</span> (destroyed) { <span class="k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code js-file-line">      <span class="c1">//If we have a slide to transition from and we have a transition type and we're allowed, go</span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code js-file-line">      <span class="k">if</span> (self.currentSlide <span class="o">&amp;&amp;</span> angular.isString(direction) <span class="o">&amp;&amp;</span> <span class="o">!</span>$scope.noTransition <span class="o">&amp;&amp;</span> nextSlide.$element) {</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code js-file-line">        <span class="c1">//We shouldn't do class manip in here, but it's the same weird thing bootstrap does. need to fix sometime</span></td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code js-file-line">        nextSlide.$element.addClass(direction);</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code js-file-line">        <span class="k">var</span> reflow <span class="o">=</span> nextSlide.$element[<span class="m">0</span>].offsetWidth; <span class="c1">//force reflow</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code js-file-line">        <span class="c1">//Set all other slides to stop doing their stuff for the new transition</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code js-file-line">        angular.forEach(slides, <span class="kt">function</span>(<span class="nv">slide</span>) {</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code js-file-line">          angular.extend(slide, {direction<span class="o">:</span> <span class="s1">''</span>, entering<span class="o">:</span> <span class="kc">false</span>, leaving<span class="o">:</span> <span class="kc">false</span>, active<span class="o">:</span> <span class="kc">false</span>});</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code js-file-line">        angular.extend(nextSlide, {direction<span class="o">:</span> direction, active<span class="o">:</span> <span class="kc">true</span>, entering<span class="o">:</span> <span class="kc">true</span>});</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code js-file-line">        angular.extend(self.currentSlide<span class="o">||</span>{}, {direction<span class="o">:</span> direction, leaving<span class="o">:</span> <span class="kc">true</span>});</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code js-file-line">        $scope.$currentTransition <span class="o">=</span> $transition(nextSlide.$element, {});</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code js-file-line">        <span class="c1">//We have to create new pointers inside a closure since next &amp; current will change</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code js-file-line">        (<span class="kt">function</span>(<span class="nv">next</span>,<span class="nv">current</span>) {</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code js-file-line">          $scope.$currentTransition.then(</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code js-file-line">            <span class="kt">function</span>(){ transitionDone(next, current); },</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code js-file-line">            <span class="kt">function</span>(){ transitionDone(next, current); }</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code js-file-line">          );</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code js-file-line">        }(nextSlide, self.currentSlide));</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code js-file-line">      } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code js-file-line">        transitionDone(nextSlide, self.currentSlide);</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code js-file-line">      self.currentSlide <span class="o">=</span> nextSlide;</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code js-file-line">      currentIndex <span class="o">=</span> nextIndex;</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code js-file-line">      <span class="c1">//every time you change slides, reset the timer</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code js-file-line">      restartTimer();</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code js-file-line">    <span class="kt">function</span> <span class="nf">transitionDone</span>(<span class="nv">next</span>, <span class="nv">current</span>) {</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code js-file-line">      angular.extend(next, {direction<span class="o">:</span> <span class="s1">''</span>, active<span class="o">:</span> <span class="kc">true</span>, leaving<span class="o">:</span> <span class="kc">false</span>, entering<span class="o">:</span> <span class="kc">false</span>});</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code js-file-line">      angular.extend(current<span class="o">||</span>{}, {direction<span class="o">:</span> <span class="s1">''</span>, active<span class="o">:</span> <span class="kc">false</span>, leaving<span class="o">:</span> <span class="kc">false</span>, entering<span class="o">:</span> <span class="kc">false</span>});</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code js-file-line">      $scope.$currentTransition <span class="o">=</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code js-file-line">  $scope.$on(<span class="s1">'$destroy'</span>, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code js-file-line">    destroyed <span class="o">=</span> <span class="kc">true</span>;</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code js-file-line">  <span class="cm">/* Allow outside people to call indexOf on slides array */</span></td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code js-file-line">  <span class="no">self</span>.<span class="nf">indexOfSlide</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">slide</span>) {</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code js-file-line">    <span class="k">return</span> slides.<span class="nf">indexOf</span>(slide);</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">next</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code js-file-line">    <span class="k">var</span> newIndex <span class="o">=</span> (currentIndex <span class="o">+</span> <span class="m">1</span>) <span class="o">%</span> slides.<span class="no">length</span>;</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code js-file-line">    <span class="c1">//Prevent this user-triggered transition from occurring if there is already one in progress</span></td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code js-file-line">    <span class="k">if</span> (<span class="o">!</span>$scope.$currentTransition) {</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code js-file-line">      <span class="k">return</span> self.<span class="nf">select</span>(slides[newIndex], <span class="s1">'next'</span>);</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">prev</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code js-file-line">    <span class="k">var</span> newIndex <span class="o">=</span> currentIndex <span class="o">-</span> <span class="m">1</span> <span class="o">&lt;</span> <span class="m">0</span> <span class="o">?</span> slides.<span class="no">length</span> <span class="o">-</span> <span class="m">1</span> <span class="o">:</span> currentIndex <span class="o">-</span> <span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code js-file-line">    <span class="c1">//Prevent this user-triggered transition from occurring if there is already one in progress</span></td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code js-file-line">    <span class="k">if</span> (<span class="o">!</span>$scope.$currentTransition) {</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code js-file-line">      <span class="k">return</span> self.<span class="nf">select</span>(slides[newIndex], <span class="s1">'prev'</span>);</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">isActive</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">slide</span>) {</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code js-file-line">     <span class="k">return</span> self.currentSlide <span class="o">===</span> slide;</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code js-file-line">  $scope.$<span class="nf">watch</span>(<span class="s1">'interval'</span>, restartTimer);</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code js-file-line">  $scope.$on(<span class="s1">'$destroy'</span>, resetTimer);</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code js-file-line">  <span class="kt">function</span> <span class="nf">restartTimer</span>() {</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code js-file-line">    resetTimer();</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code js-file-line">    <span class="k">var</span> interval <span class="o">=</span> <span class="o">+</span>$scope.interval;</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code js-file-line">    <span class="k">if</span> (<span class="o">!</span><span class="nf">isNaN</span>(interval) <span class="o">&amp;&amp;</span> interval<span class="o">&gt;=</span><span class="m">0</span>) {</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code js-file-line">      currentTimeout <span class="o">=</span> $timeout(timerFn, interval);</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code js-file-line">  <span class="kt">function</span> <span class="nf">resetTimer</span>() {</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code js-file-line">    <span class="k">if</span> (currentTimeout) {</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code js-file-line">      $timeout.cancel(currentTimeout);</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code js-file-line">      currentTimeout <span class="o">=</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code js-file-line">  <span class="kt">function</span> <span class="nf">timerFn</span>() {</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code js-file-line">    <span class="k">if</span> (isPlaying) {</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code js-file-line">      $scope.<span class="no">next</span>();</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code js-file-line">      restartTimer();</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code js-file-line">    } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code js-file-line">      $scope.pause();</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">play</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code js-file-line">    <span class="k">if</span> (<span class="o">!</span>isPlaying) {</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code js-file-line">      isPlaying <span class="o">=</span> <span class="kc">true</span>;</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code js-file-line">      restartTimer();</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">pause</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code js-file-line">    <span class="k">if</span> (<span class="o">!</span>$scope.noPause) {</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code js-file-line">      isPlaying <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code js-file-line">      resetTimer();</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code js-file-line">  <span class="no">self</span>.<span class="nf">addSlide</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">slide</span>, <span class="nv">element</span>) {</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code js-file-line">    slide.$element <span class="o">=</span> element;</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code js-file-line">    slides.<span class="nf">push</span>(slide);</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code js-file-line">    <span class="c1">//if this is the first slide or the slide is set to active, select it</span></td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code js-file-line">    <span class="k">if</span>(slides.<span class="no">length</span> <span class="o">===</span> <span class="m">1</span> <span class="o">||</span> slide.active) {</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code js-file-line">      self.<span class="nf">select</span>(slides[slides.<span class="no">length</span><span class="o">-</span><span class="m">1</span>]);</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code js-file-line">      <span class="k">if</span> (slides.<span class="no">length</span> <span class="o">==</span> <span class="m">1</span>) {</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code js-file-line">        $scope.play();</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code js-file-line">    } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code js-file-line">      slide.active <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code js-file-line">  <span class="no">self</span>.<span class="nf">removeSlide</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">slide</span>) {</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code js-file-line">    <span class="c1">//get the index of the slide inside the carousel</span></td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code js-file-line">    <span class="k">var</span> index <span class="o">=</span> slides.<span class="nf">indexOf</span>(slide);</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code js-file-line">    slides.<span class="nf">splice</span>(index, <span class="m">1</span>);</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code js-file-line">    <span class="k">if</span> (slides.<span class="no">length</span> <span class="o">&gt;</span> <span class="m">0</span> <span class="o">&amp;&amp;</span> slide.active) {</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code js-file-line">      <span class="k">if</span> (index <span class="o">&gt;=</span> slides.<span class="no">length</span>) {</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code js-file-line">        self.<span class="nf">select</span>(slides[index<span class="o">-</span><span class="m">1</span>]);</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code js-file-line">      } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code js-file-line">        self.<span class="nf">select</span>(slides[index]);</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code js-file-line">    } <span class="k">else</span> <span class="k">if</span> (currentIndex <span class="o">&gt;</span> index) {</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code js-file-line">      currentIndex<span class="o">--</span>;</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code js-file-line"><span class="cm"> * @ngdoc directive</span></td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code js-file-line"><span class="cm"> * @name ui.bootstrap.carousel.directive:carousel</span></td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code js-file-line"><span class="cm"> * @restrict EA</span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code js-file-line"><span class="cm"> * @description</span></td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code js-file-line"><span class="cm"> * Carousel is the outer container for a set of image 'slides' to showcase.</span></td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code js-file-line"><span class="cm"> * @param {number=} interval The time, in milliseconds, that it will take the carousel to go to the next slide.</span></td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code js-file-line"><span class="cm"> * @param {boolean=} noTransition Whether to disable transitions on the carousel.</span></td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code js-file-line"><span class="cm"> * @param {boolean=} noPause Whether to disable pausing on the carousel (by default, the carousel interval pauses on hover).</span></td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code js-file-line"><span class="cm"> * @example</span></td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code js-file-line"><span class="cm">&lt;example module=&quot;ui.bootstrap&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code js-file-line"><span class="cm">  &lt;file name=&quot;index.html&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code js-file-line"><span class="cm">    &lt;carousel&gt;</span></td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code js-file-line"><span class="cm">      &lt;slide&gt;</span></td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code js-file-line"><span class="cm">        &lt;img src=&quot;http://placekitten.com/150/150&quot; style=&quot;margin:auto;&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code js-file-line"><span class="cm">        &lt;div class=&quot;carousel-caption&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code js-file-line"><span class="cm">          &lt;p&gt;Beautiful!&lt;/p&gt;</span></td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code js-file-line"><span class="cm">        &lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code js-file-line"><span class="cm">      &lt;/slide&gt;</span></td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code js-file-line"><span class="cm">      &lt;slide&gt;</span></td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code js-file-line"><span class="cm">        &lt;img src=&quot;http://placekitten.com/100/150&quot; style=&quot;margin:auto;&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code js-file-line"><span class="cm">        &lt;div class=&quot;carousel-caption&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code js-file-line"><span class="cm">          &lt;p&gt;D'aww!&lt;/p&gt;</span></td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code js-file-line"><span class="cm">        &lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code js-file-line"><span class="cm">      &lt;/slide&gt;</span></td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code js-file-line"><span class="cm">    &lt;/carousel&gt;</span></td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code js-file-line"><span class="cm">  &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code js-file-line"><span class="cm">  &lt;file name=&quot;demo.css&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code js-file-line"><span class="cm">    .carousel-indicators {</span></td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code js-file-line"><span class="cm">      top: auto;</span></td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code js-file-line"><span class="cm">      bottom: 15px;</span></td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code js-file-line"><span class="cm">    }</span></td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code js-file-line"><span class="cm">  &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code js-file-line"><span class="cm">&lt;/example&gt;</span></td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code js-file-line">.directive(<span class="s1">'carousel'</span>, [<span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code js-file-line">    transclude<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code js-file-line">    controller<span class="o">:</span> <span class="s1">'CarouselController'</span>,</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code js-file-line">    require<span class="o">:</span> <span class="s1">'carousel'</span>,</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code js-file-line">    templateUrl<span class="o">:</span> <span class="s1">'template/carousel/carousel.html'</span>,</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code js-file-line">    scope<span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code js-file-line">      interval<span class="o">:</span> <span class="s1">'='</span>,</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code js-file-line">      noTransition<span class="o">:</span> <span class="s1">'='</span>,</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code js-file-line">      noPause<span class="o">:</span> <span class="s1">'='</span></td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code js-file-line"><span class="cm"> * @ngdoc directive</span></td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code js-file-line"><span class="cm"> * @name ui.bootstrap.carousel.directive:slide</span></td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code js-file-line"><span class="cm"> * @restrict EA</span></td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code js-file-line"><span class="cm"> * @description</span></td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code js-file-line"><span class="cm"> * Creates a slide inside a {@link ui.bootstrap.carousel.directive:carousel carousel}.  Must be placed as a child of a carousel element.</span></td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code js-file-line"><span class="cm"> * @param {boolean=} active Model binding, whether or not this slide is currently active.</span></td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code js-file-line"><span class="cm"> * @example</span></td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code js-file-line"><span class="cm">&lt;example module=&quot;ui.bootstrap&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code js-file-line"><span class="cm">  &lt;file name=&quot;index.html&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code js-file-line"><span class="cm">&lt;div ng-controller=&quot;CarouselDemoCtrl&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code js-file-line"><span class="cm">  &lt;carousel&gt;</span></td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code js-file-line"><span class="cm">    &lt;slide ng-repeat=&quot;slide in slides&quot; active=&quot;slide.active&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code js-file-line"><span class="cm">      &lt;img ng-src=&quot;{{slide.image}}&quot; style=&quot;margin:auto;&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code js-file-line"><span class="cm">      &lt;div class=&quot;carousel-caption&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code js-file-line"><span class="cm">        &lt;h4&gt;Slide {{$index}}&lt;/h4&gt;</span></td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code js-file-line"><span class="cm">        &lt;p&gt;{{slide.text}}&lt;/p&gt;</span></td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code js-file-line"><span class="cm">      &lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code js-file-line"><span class="cm">    &lt;/slide&gt;</span></td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code js-file-line"><span class="cm">  &lt;/carousel&gt;</span></td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code js-file-line"><span class="cm">  Interval, in milliseconds: &lt;input type=&quot;number&quot; ng-model=&quot;myInterval&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code js-file-line"><span class="cm">  &lt;br /&gt;Enter a negative number to stop the interval.</span></td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code js-file-line"><span class="cm">&lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code js-file-line"><span class="cm">  &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code js-file-line"><span class="cm">  &lt;file name=&quot;script.js&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code js-file-line"><span class="cm">function CarouselDemoCtrl($scope) {</span></td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code js-file-line"><span class="cm">  $scope.myInterval = 5000;</span></td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code js-file-line"><span class="cm">}</span></td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code js-file-line"><span class="cm">  &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code js-file-line"><span class="cm">  &lt;file name=&quot;demo.css&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code js-file-line"><span class="cm">    .carousel-indicators {</span></td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code js-file-line"><span class="cm">      top: auto;</span></td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code js-file-line"><span class="cm">      bottom: 15px;</span></td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code js-file-line"><span class="cm">    }</span></td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code js-file-line"><span class="cm">  &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code js-file-line"><span class="cm">&lt;/example&gt;</span></td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code js-file-line"><span class="cm">*/</span></td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code js-file-line">.directive(<span class="s1">'slide'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code js-file-line">    require<span class="o">:</span> <span class="s1">'^carousel'</span>,</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code js-file-line">    transclude<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code js-file-line">    templateUrl<span class="o">:</span> <span class="s1">'template/carousel/slide.html'</span>,</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code js-file-line">    scope<span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code js-file-line">      active<span class="o">:</span> <span class="s1">'=?'</span></td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span> (<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>, <span class="nv">carouselCtrl</span>) {</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code js-file-line">      carouselCtrl.addSlide(scope, element);</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code js-file-line">      <span class="c1">//when the scope is destroyed then remove the slide from the current slides array</span></td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code js-file-line">      scope.$on(<span class="s1">'$destroy'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code js-file-line">        carouselCtrl.removeSlide(scope);</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code js-file-line">      scope.$<span class="nf">watch</span>(<span class="s1">'active'</span>, <span class="kt">function</span>(<span class="nv">active</span>) {</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code js-file-line">        <span class="k">if</span> (active) {</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code js-file-line">          carouselCtrl.<span class="nf">select</span>(scope);</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code js-file-line">});</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code js-file-line">angular.module(<span class="s1">'ui.bootstrap.dateparser'</span>, [])</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code js-file-line">.service(<span class="s1">'dateParser'</span>, [<span class="s1">'$locale'</span>, <span class="s1">'orderByFilter'</span>, <span class="kt">function</span>(<span class="nv">$locale</span>, <span class="nv">orderByFilter</span>) {</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code js-file-line">  <span class="nb">this</span>.parsers <span class="o">=</span> {};</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code js-file-line">  <span class="k">var</span> formatCodeToRegex <span class="o">=</span> {</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code js-file-line">    <span class="s1">'yyyy'</span><span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code js-file-line">      regex<span class="o">:</span> <span class="s1">'<span class="sc">\\</span>d{4}'</span>,</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code js-file-line">      <span class="nf">apply</span>: <span class="kt">function</span>(<span class="nv">value</span>) { <span class="nb">this</span>.year <span class="o">=</span> <span class="o">+</span>value; }</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code js-file-line">    <span class="s1">'yy'</span><span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code js-file-line">      regex<span class="o">:</span> <span class="s1">'<span class="sc">\\</span>d{2}'</span>,</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code js-file-line">      <span class="nf">apply</span>: <span class="kt">function</span>(<span class="nv">value</span>) { <span class="nb">this</span>.year <span class="o">=</span> <span class="o">+</span>value <span class="o">+</span> <span class="m">2000</span>; }</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code js-file-line">    <span class="s1">'y'</span><span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code js-file-line">      regex<span class="o">:</span> <span class="s1">'<span class="sc">\\</span>d{1,4}'</span>,</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code js-file-line">      <span class="nf">apply</span>: <span class="kt">function</span>(<span class="nv">value</span>) { <span class="nb">this</span>.year <span class="o">=</span> <span class="o">+</span>value; }</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code js-file-line">    <span class="s1">'MMMM'</span><span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code js-file-line">      regex<span class="o">:</span> $locale.DATETIME_FORMATS.MONTH.<span class="nf">join</span>(<span class="s1">'|'</span>),</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code js-file-line">      <span class="nf">apply</span>: <span class="kt">function</span>(<span class="nv">value</span>) { <span class="nb">this</span>.month <span class="o">=</span> $locale.DATETIME_FORMATS.MONTH.<span class="nf">indexOf</span>(value); }</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code js-file-line">    <span class="s1">'MMM'</span><span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code js-file-line">      regex<span class="o">:</span> $locale.DATETIME_FORMATS.SHORTMONTH.<span class="nf">join</span>(<span class="s1">'|'</span>),</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code js-file-line">      <span class="nf">apply</span>: <span class="kt">function</span>(<span class="nv">value</span>) { <span class="nb">this</span>.month <span class="o">=</span> $locale.DATETIME_FORMATS.SHORTMONTH.<span class="nf">indexOf</span>(value); }</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code js-file-line">    <span class="s1">'MM'</span><span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code js-file-line">      regex<span class="o">:</span> <span class="s1">'0[1-9]|1[0-2]'</span>,</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code js-file-line">      <span class="nf">apply</span>: <span class="kt">function</span>(<span class="nv">value</span>) { <span class="nb">this</span>.month <span class="o">=</span> value <span class="o">-</span> <span class="m">1</span>; }</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code js-file-line">    <span class="s1">'M'</span><span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code js-file-line">      regex<span class="o">:</span> <span class="s1">'[1-9]|1[0-2]'</span>,</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code js-file-line">      <span class="nf">apply</span>: <span class="kt">function</span>(<span class="nv">value</span>) { <span class="nb">this</span>.month <span class="o">=</span> value <span class="o">-</span> <span class="m">1</span>; }</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code js-file-line">    <span class="s1">'dd'</span><span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code js-file-line">      regex<span class="o">:</span> <span class="s1">'[0-2][0-9]{1}|3[0-1]{1}'</span>,</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code js-file-line">      <span class="nf">apply</span>: <span class="kt">function</span>(<span class="nv">value</span>) { <span class="nb">this</span>.date <span class="o">=</span> <span class="o">+</span>value; }</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code js-file-line">    <span class="s1">'d'</span><span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code js-file-line">      regex<span class="o">:</span> <span class="s1">'[1-2]?[0-9]{1}|3[0-1]{1}'</span>,</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code js-file-line">      <span class="nf">apply</span>: <span class="kt">function</span>(<span class="nv">value</span>) { <span class="nb">this</span>.date <span class="o">=</span> <span class="o">+</span>value; }</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code js-file-line">    <span class="s1">'EEEE'</span><span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code js-file-line">      regex<span class="o">:</span> $locale.DATETIME_FORMATS.DAY.<span class="nf">join</span>(<span class="s1">'|'</span>)</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code js-file-line">    <span class="s1">'EEE'</span><span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code js-file-line">      regex<span class="o">:</span> $locale.DATETIME_FORMATS.SHORTDAY.<span class="nf">join</span>(<span class="s1">'|'</span>)</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">createParser</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">format</span>) {</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code js-file-line">    <span class="k">var</span> map <span class="o">=</span> [], regex <span class="o">=</span> format.<span class="nf">split</span>(<span class="s1">''</span>);</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code js-file-line">    angular.forEach(formatCodeToRegex, <span class="kt">function</span>(<span class="nv">data</span>, <span class="nv">code</span>) {</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code js-file-line">      <span class="k">var</span> index <span class="o">=</span> format.<span class="nf">indexOf</span>(code);</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code js-file-line">      <span class="k">if</span> (index <span class="o">&gt;</span> <span class="o">-</span><span class="m">1</span>) {</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code js-file-line">        format <span class="o">=</span> format.<span class="nf">split</span>(<span class="s1">''</span>);</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code js-file-line">        regex[index] <span class="o">=</span> <span class="s1">'('</span> <span class="o">+</span> data.regex <span class="o">+</span> <span class="s1">')'</span>;</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code js-file-line">        format[index] <span class="o">=</span> <span class="s1">'$'</span>; <span class="c1">// Custom symbol to define consumed part of format</span></td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code js-file-line">        <span class="k">for</span> (<span class="k">var</span> i <span class="o">=</span> index <span class="o">+</span> <span class="m">1</span>, n <span class="o">=</span> index <span class="o">+</span> code.<span class="no">length</span>; i <span class="o">&lt;</span> n; i<span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code js-file-line">          regex[i] <span class="o">=</span> <span class="s1">''</span>;</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code js-file-line">          format[i] <span class="o">=</span> <span class="s1">'$'</span>;</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code js-file-line">        format <span class="o">=</span> format.<span class="nf">join</span>(<span class="s1">''</span>);</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code js-file-line">        map.<span class="nf">push</span>({ index<span class="o">:</span> index, apply<span class="o">:</span> data.apply });</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code js-file-line">    <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code js-file-line">      regex<span class="o">:</span> <span class="o">new</span> <span class="nc">RegExp</span>(<span class="s1">'^'</span> <span class="o">+</span> regex.<span class="nf">join</span>(<span class="s1">''</span>) <span class="o">+</span> <span class="s1">'$'</span>),</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code js-file-line">      map<span class="o">:</span> orderByFilter(map, <span class="s1">'index'</span>)</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">parse</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">input</span>, <span class="nv">format</span>) {</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code js-file-line">    <span class="k">if</span> ( <span class="o">!</span>angular.isString(input) ) {</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code js-file-line">      <span class="k">return</span> input;</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code js-file-line">    format <span class="o">=</span> $locale.DATETIME_FORMATS[format] <span class="o">||</span> format;</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code js-file-line">    <span class="k">if</span> ( <span class="o">!</span><span class="nb">this</span>.parsers[format] ) {</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code js-file-line">      <span class="nb">this</span>.parsers[format] <span class="o">=</span> <span class="nb">this</span>.createParser(format);</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code js-file-line">    <span class="k">var</span> parser <span class="o">=</span> <span class="nb">this</span>.parsers[format],</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code js-file-line">        regex <span class="o">=</span> parser.regex,</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code js-file-line">        map <span class="o">=</span> parser.map,</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code js-file-line">        results <span class="o">=</span> input.<span class="nf">match</span>(regex);</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code js-file-line">    <span class="k">if</span> ( results <span class="o">&amp;&amp;</span> results.<span class="no">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code js-file-line">      <span class="k">var</span> fields <span class="o">=</span> { year<span class="o">:</span> <span class="m">1900</span>, month<span class="o">:</span> <span class="m">0</span>, date<span class="o">:</span> <span class="m">1</span>, hours<span class="o">:</span> <span class="m">0</span> }, dt;</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code js-file-line">      <span class="k">for</span>( <span class="k">var</span> i <span class="o">=</span> <span class="m">1</span>, n <span class="o">=</span> results.<span class="no">length</span>; i <span class="o">&lt;</span> n; i<span class="o">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code js-file-line">        <span class="k">var</span> mapper <span class="o">=</span> map[i<span class="o">-</span><span class="m">1</span>];</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code js-file-line">        <span class="k">if</span> ( mapper.apply ) {</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code js-file-line">          mapper.apply.<span class="nf">call</span>(fields, results[i]);</td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code js-file-line">      <span class="k">if</span> ( isValid(fields.year, fields.month, fields.date) ) {</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code js-file-line">        dt <span class="o">=</span> <span class="o">new</span> <span class="nc">Date</span>( fields.year, fields.month, fields.date, fields.hours);</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code js-file-line">      <span class="k">return</span> dt;</td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code js-file-line">  <span class="c1">// Check if date is valid for specific month (and year for February).</span></td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code js-file-line">  <span class="c1">// Month: 0 = Jan, 1 = Feb, etc</span></td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code js-file-line">  <span class="kt">function</span> <span class="nf">isValid</span>(<span class="nv">year</span>, <span class="nv">month</span>, <span class="nv">date</span>) {</td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code js-file-line">    <span class="k">if</span> ( month <span class="o">===</span> <span class="m">1</span> <span class="o">&amp;&amp;</span> date <span class="o">&gt;</span> <span class="m">28</span>) {</td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code js-file-line">        <span class="k">return</span> date <span class="o">===</span> <span class="m">29</span> <span class="o">&amp;&amp;</span> ((year <span class="o">%</span> <span class="m">4</span> <span class="o">===</span> <span class="m">0</span> <span class="o">&amp;&amp;</span> year <span class="o">%</span> <span class="m">100</span> <span class="o">!==</span> <span class="m">0</span>) <span class="o">||</span> year <span class="o">%</span> <span class="m">400</span> <span class="o">===</span> <span class="m">0</span>);</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code js-file-line">    <span class="k">if</span> ( month <span class="o">===</span> <span class="m">3</span> <span class="o">||</span> month <span class="o">===</span> <span class="m">5</span> <span class="o">||</span> month <span class="o">===</span> <span class="m">8</span> <span class="o">||</span> month <span class="o">===</span> <span class="m">10</span>) {</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code js-file-line">        <span class="k">return</span> date <span class="o">&lt;</span> <span class="m">31</span>;</td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code js-file-line">    <span class="k">return</span> <span class="kc">true</span>;</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code js-file-line">}]);</td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code js-file-line">angular.module(<span class="s1">'ui.bootstrap.position'</span>, [])</td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code js-file-line"><span class="cm"> * A set of utility methods that can be use to retrieve position of DOM elements.</span></td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code js-file-line"><span class="cm"> * It is meant to be used where we need to absolute-position DOM elements in</span></td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code js-file-line"><span class="cm"> * relation to other, existing elements (this is the case for tooltips, popovers,</span></td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code js-file-line"><span class="cm"> * typeahead suggestions etc.).</span></td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code js-file-line">  .factory(<span class="s1">'$position'</span>, [<span class="s1">'$document'</span>, <span class="s1">'$window'</span>, <span class="kt">function</span> (<span class="nv">$document</span>, <span class="nv">$window</span>) {</td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code js-file-line">    <span class="kt">function</span> <span class="nf">getStyle</span>(<span class="nv">el</span>, <span class="nv">cssprop</span>) {</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code js-file-line">      <span class="k">if</span> (el.currentStyle) { <span class="c1">//IE</span></td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code js-file-line">        <span class="k">return</span> el.currentStyle[cssprop];</td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code js-file-line">      } <span class="k">else</span> <span class="k">if</span> ($<span class="no">window</span>.getComputedStyle) {</td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code js-file-line">        <span class="k">return</span> $<span class="no">window</span>.getComputedStyle(el)[cssprop];</td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code js-file-line">      <span class="c1">// finally try and get inline style</span></td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code js-file-line">      <span class="k">return</span> el.<span class="no">style</span>[cssprop];</td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code js-file-line"><span class="cm">     * Checks if a given element is statically positioned</span></td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code js-file-line"><span class="cm">     * @param element - raw DOM element</span></td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code js-file-line">    <span class="kt">function</span> <span class="nf">isStaticPositioned</span>(<span class="nv">element</span>) {</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code js-file-line">      <span class="k">return</span> (getStyle(element, <span class="s1">'position'</span>) <span class="o">||</span> <span class="s1">'static'</span> ) <span class="o">===</span> <span class="s1">'static'</span>;</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code js-file-line"><span class="cm">     * returns the closest, non-statically positioned parentOffset of a given element</span></td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code js-file-line"><span class="cm">     * @param element</span></td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code js-file-line">    <span class="k">var</span> <span class="nf">parentOffsetEl</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">element</span>) {</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code js-file-line">      <span class="k">var</span> docDomEl <span class="o">=</span> $<span class="no">document</span>[<span class="m">0</span>];</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code js-file-line">      <span class="k">var</span> offsetParent <span class="o">=</span> element.offsetParent <span class="o">||</span> docDomEl;</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code js-file-line">      <span class="k">while</span> (offsetParent <span class="o">&amp;&amp;</span> offsetParent <span class="o">!==</span> docDomEl <span class="o">&amp;&amp;</span> isStaticPositioned(offsetParent) ) {</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code js-file-line">        offsetParent <span class="o">=</span> offsetParent.offsetParent;</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code js-file-line">      <span class="k">return</span> offsetParent <span class="o">||</span> docDomEl;</td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code js-file-line">    <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code js-file-line"><span class="cm">       * Provides read-only equivalent of jQuery's position function:</span></td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code js-file-line"><span class="cm">       * http://api.jquery.com/position/</span></td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code js-file-line">      <span class="nf">position</span>: <span class="kt">function</span> (<span class="nv">element</span>) {</td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code js-file-line">        <span class="k">var</span> elBCR <span class="o">=</span> <span class="nb">this</span>.offset(element);</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code js-file-line">        <span class="k">var</span> offsetParentBCR <span class="o">=</span> { top<span class="o">:</span> <span class="m">0</span>, left<span class="o">:</span> <span class="m">0</span> };</td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code js-file-line">        <span class="k">var</span> offsetParentEl <span class="o">=</span> parentOffsetEl(element[<span class="m">0</span>]);</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code js-file-line">        <span class="k">if</span> (offsetParentEl <span class="o">!=</span> $<span class="no">document</span>[<span class="m">0</span>]) {</td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code js-file-line">          offsetParentBCR <span class="o">=</span> <span class="nb">this</span>.offset(angular.element(offsetParentEl));</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code js-file-line">          offsetParentBCR.<span class="no">top</span> <span class="o">+=</span> offsetParentEl.clientTop <span class="o">-</span> offsetParentEl.scrollTop;</td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code js-file-line">          offsetParentBCR.<span class="no">left</span> <span class="o">+=</span> offsetParentEl.clientLeft <span class="o">-</span> offsetParentEl.scrollLeft;</td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code js-file-line">        <span class="k">var</span> boundingClientRect <span class="o">=</span> element[<span class="m">0</span>].getBoundingClientRect();</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code js-file-line">        <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code js-file-line">          width<span class="o">:</span> boundingClientRect.<span class="no">width</span> <span class="o">||</span> element.prop(<span class="s1">'offsetWidth'</span>),</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code js-file-line">          height<span class="o">:</span> boundingClientRect.<span class="no">height</span> <span class="o">||</span> element.prop(<span class="s1">'offsetHeight'</span>),</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code js-file-line">          top<span class="o">:</span> elBCR.<span class="no">top</span> <span class="o">-</span> offsetParentBCR.<span class="no">top</span>,</td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code js-file-line">          left<span class="o">:</span> elBCR.<span class="no">left</span> <span class="o">-</span> offsetParentBCR.<span class="no">left</span></td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code js-file-line"><span class="cm">       * Provides read-only equivalent of jQuery's offset function:</span></td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code js-file-line"><span class="cm">       * http://api.jquery.com/offset/</span></td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code js-file-line">      <span class="nf">offset</span>: <span class="kt">function</span> (<span class="nv">element</span>) {</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code js-file-line">        <span class="k">var</span> boundingClientRect <span class="o">=</span> element[<span class="m">0</span>].getBoundingClientRect();</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code js-file-line">        <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code js-file-line">          width<span class="o">:</span> boundingClientRect.<span class="no">width</span> <span class="o">||</span> element.prop(<span class="s1">'offsetWidth'</span>),</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code js-file-line">          height<span class="o">:</span> boundingClientRect.<span class="no">height</span> <span class="o">||</span> element.prop(<span class="s1">'offsetHeight'</span>),</td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code js-file-line">          top<span class="o">:</span> boundingClientRect.<span class="no">top</span> <span class="o">+</span> ($<span class="no">window</span>.<span class="no">pageYOffset</span> <span class="o">||</span> $<span class="no">document</span>[<span class="m">0</span>].<span class="no">documentElement</span>.scrollTop),</td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code js-file-line">          left<span class="o">:</span> boundingClientRect.<span class="no">left</span> <span class="o">+</span> ($<span class="no">window</span>.<span class="no">pageXOffset</span> <span class="o">||</span> $<span class="no">document</span>[<span class="m">0</span>].<span class="no">documentElement</span>.scrollLeft)</td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code js-file-line"><span class="cm">       * Provides coordinates for the targetEl in relation to hostEl</span></td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code js-file-line">      <span class="nf">positionElements</span>: <span class="kt">function</span> (<span class="nv">hostEl</span>, <span class="nv">targetEl</span>, <span class="nv">positionStr</span>, <span class="nv">appendToBody</span>) {</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code js-file-line">        <span class="k">var</span> positionStrParts <span class="o">=</span> positionStr.<span class="nf">split</span>(<span class="s1">'-'</span>);</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code js-file-line">        <span class="k">var</span> pos0 <span class="o">=</span> positionStrParts[<span class="m">0</span>], pos1 <span class="o">=</span> positionStrParts[<span class="m">1</span>] <span class="o">||</span> <span class="s1">'center'</span>;</td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code js-file-line">        <span class="k">var</span> hostElPos,</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code js-file-line">          targetElWidth,</td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code js-file-line">          targetElHeight,</td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code js-file-line">          targetElPos;</td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code js-file-line">        hostElPos <span class="o">=</span> appendToBody <span class="o">?</span> <span class="nb">this</span>.offset(hostEl) <span class="o">:</span> <span class="nb">this</span>.position(hostEl);</td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code js-file-line">        targetElWidth <span class="o">=</span> targetEl.prop(<span class="s1">'offsetWidth'</span>);</td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code js-file-line">        targetElHeight <span class="o">=</span> targetEl.prop(<span class="s1">'offsetHeight'</span>);</td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code js-file-line">        <span class="k">var</span> shiftWidth <span class="o">=</span> {</td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code js-file-line">          <span class="nf">center</span>: <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code js-file-line">            <span class="k">return</span> hostElPos.<span class="no">left</span> <span class="o">+</span> hostElPos.<span class="no">width</span> / <span class="m">2</span> <span class="o">-</span> targetElWidth / <span class="m">2</span>;</td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code js-file-line">          },</td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code js-file-line">          <span class="nf">left</span>: <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code js-file-line">            <span class="k">return</span> hostElPos.<span class="no">left</span>;</td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code js-file-line">          },</td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code js-file-line">          <span class="nf">right</span>: <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code js-file-line">            <span class="k">return</span> hostElPos.<span class="no">left</span> <span class="o">+</span> hostElPos.<span class="no">width</span>;</td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code js-file-line">        <span class="k">var</span> shiftHeight <span class="o">=</span> {</td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code js-file-line">          <span class="nf">center</span>: <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code js-file-line">            <span class="k">return</span> hostElPos.<span class="no">top</span> <span class="o">+</span> hostElPos.<span class="no">height</span> / <span class="m">2</span> <span class="o">-</span> targetElHeight / <span class="m">2</span>;</td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code js-file-line">          },</td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code js-file-line">          <span class="nf">top</span>: <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code js-file-line">            <span class="k">return</span> hostElPos.<span class="no">top</span>;</td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code js-file-line">          },</td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code js-file-line">          <span class="nf">bottom</span>: <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code js-file-line">            <span class="k">return</span> hostElPos.<span class="no">top</span> <span class="o">+</span> hostElPos.<span class="no">height</span>;</td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code js-file-line">        <span class="k">switch</span> (pos0) {</td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code js-file-line">          <span class="k">case</span> <span class="s1">'right'</span><span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code js-file-line">            targetElPos <span class="o">=</span> {</td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code js-file-line">              top<span class="o">:</span> shiftHeight[pos1](),</td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code js-file-line">              left<span class="o">:</span> shiftWidth[pos0]()</td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code js-file-line">            <span class="k">break</span>;</td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code js-file-line">          <span class="k">case</span> <span class="s1">'left'</span><span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code js-file-line">            targetElPos <span class="o">=</span> {</td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code js-file-line">              top<span class="o">:</span> shiftHeight[pos1](),</td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code js-file-line">              left<span class="o">:</span> hostElPos.<span class="no">left</span> <span class="o">-</span> targetElWidth</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code js-file-line">            <span class="k">break</span>;</td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code js-file-line">          <span class="k">case</span> <span class="s1">'bottom'</span><span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code js-file-line">            targetElPos <span class="o">=</span> {</td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code js-file-line">              top<span class="o">:</span> shiftHeight[pos0](),</td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code js-file-line">              left<span class="o">:</span> shiftWidth[pos1]()</td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code js-file-line">            <span class="k">break</span>;</td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code js-file-line">          default<span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code js-file-line">            targetElPos <span class="o">=</span> {</td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code js-file-line">              top<span class="o">:</span> hostElPos.<span class="no">top</span> <span class="o">-</span> targetElHeight,</td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code js-file-line">              left<span class="o">:</span> shiftWidth[pos1]()</td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code js-file-line">            <span class="k">break</span>;</td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code js-file-line">        <span class="k">return</span> targetElPos;</td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code js-file-line">  }]);</td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code js-file-line">angular.module(<span class="s1">'ui.bootstrap.datepicker'</span>, [<span class="s1">'ui.bootstrap.dateparser'</span>, <span class="s1">'ui.bootstrap.position'</span>])</td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code js-file-line">.constant(<span class="s1">'datepickerConfig'</span>, {</td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code js-file-line">  formatDay<span class="o">:</span> <span class="s1">'dd'</span>,</td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code js-file-line">  formatMonth<span class="o">:</span> <span class="s1">'MMMM'</span>,</td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code js-file-line">  formatYear<span class="o">:</span> <span class="s1">'yyyy'</span>,</td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code js-file-line">  formatDayHeader<span class="o">:</span> <span class="s1">'EEE'</span>,</td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code js-file-line">  formatDayTitle<span class="o">:</span> <span class="s1">'MMMM yyyy'</span>,</td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code js-file-line">  formatMonthTitle<span class="o">:</span> <span class="s1">'yyyy'</span>,</td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code js-file-line">  datepickerMode<span class="o">:</span> <span class="s1">'day'</span>,</td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code js-file-line">  minMode<span class="o">:</span> <span class="s1">'day'</span>,</td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code js-file-line">  maxMode<span class="o">:</span> <span class="s1">'year'</span>,</td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code js-file-line">  showWeeks<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code js-file-line">  startingDay<span class="o">:</span> <span class="m">0</span>,</td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code js-file-line">  yearRange<span class="o">:</span> <span class="m">20</span>,</td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code js-file-line">  minDate<span class="o">:</span> <span class="kc">null</span>,</td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code js-file-line">  maxDate<span class="o">:</span> <span class="kc">null</span></td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code js-file-line">.controller(<span class="s1">'DatepickerController'</span>, [<span class="s1">'$scope'</span>, <span class="s1">'$attrs'</span>, <span class="s1">'$parse'</span>, <span class="s1">'$interpolate'</span>, <span class="s1">'$timeout'</span>, <span class="s1">'$log'</span>, <span class="s1">'dateFilter'</span>, <span class="s1">'datepickerConfig'</span>, <span class="kt">function</span>(<span class="nv">$scope</span>, <span class="nv">$attrs</span>, <span class="nv">$parse</span>, <span class="nv">$interpolate</span>, <span class="nv">$timeout</span>, <span class="nv">$log</span>, <span class="nv">dateFilter</span>, <span class="nv">datepickerConfig</span>) {</td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code js-file-line">  <span class="k">var</span> self <span class="o">=</span> <span class="nb">this</span>,</td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code js-file-line">      ngModelCtrl <span class="o">=</span> { $setViewValue<span class="o">:</span> angular.noop }; <span class="c1">// nullModelCtrl;</span></td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code js-file-line">  <span class="c1">// Modes chain</span></td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code js-file-line">  <span class="nb">this</span>.modes <span class="o">=</span> [<span class="s1">'day'</span>, <span class="s1">'month'</span>, <span class="s1">'year'</span>];</td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code js-file-line">  <span class="c1">// Configuration attributes</span></td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code js-file-line">  angular.forEach([<span class="s1">'formatDay'</span>, <span class="s1">'formatMonth'</span>, <span class="s1">'formatYear'</span>, <span class="s1">'formatDayHeader'</span>, <span class="s1">'formatDayTitle'</span>, <span class="s1">'formatMonthTitle'</span>,</td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code js-file-line">                   <span class="s1">'minMode'</span>, <span class="s1">'maxMode'</span>, <span class="s1">'showWeeks'</span>, <span class="s1">'startingDay'</span>, <span class="s1">'yearRange'</span>], <span class="kt">function</span>( <span class="nv">key</span>, <span class="nv">index</span> ) {</td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code js-file-line">    self[key] <span class="o">=</span> angular.isDefined($attrs[key]) <span class="o">?</span> (index <span class="o">&lt;</span> <span class="m">8</span> <span class="o">?</span> $interpolate($attrs[key])($scope.$parent) <span class="o">:</span> $scope.$parent.$<span class="nf">eval</span>($attrs[key])) <span class="o">:</span> datepickerConfig[key];</td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code js-file-line">  <span class="c1">// Watchable attributes</span></td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code js-file-line">  angular.forEach([<span class="s1">'minDate'</span>, <span class="s1">'maxDate'</span>], <span class="kt">function</span>( <span class="nv">key</span> ) {</td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code js-file-line">    <span class="k">if</span> ( $attrs[key] ) {</td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code js-file-line">      $scope.$parent.$<span class="nf">watch</span>($<span class="nf">parse</span>($attrs[key]), <span class="kt">function</span>(<span class="nv">value</span>) {</td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code js-file-line">        self[key] <span class="o">=</span> value <span class="o">?</span> <span class="o">new</span> <span class="nc">Date</span>(value) <span class="o">:</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code js-file-line">        self.refreshView();</td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code js-file-line">    } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code js-file-line">      self[key] <span class="o">=</span> datepickerConfig[key] <span class="o">?</span> <span class="o">new</span> <span class="nc">Date</span>(datepickerConfig[key]) <span class="o">:</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code js-file-line">  $scope.datepickerMode <span class="o">=</span> $scope.datepickerMode <span class="o">||</span> datepickerConfig.datepickerMode;</td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code js-file-line">  $scope.uniqueId <span class="o">=</span> <span class="s1">'datepicker-'</span> <span class="o">+</span> $scope.$id <span class="o">+</span> <span class="s1">'-'</span> <span class="o">+</span> <span class="no">Math</span>.<span class="nf">floor</span>(<span class="no">Math</span>.<span class="nf">random</span>() <span class="o">*</span> <span class="m">10000</span>);</td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code js-file-line">  <span class="nb">this</span>.activeDate <span class="o">=</span> angular.isDefined($attrs.initDate) <span class="o">?</span> $scope.$parent.$<span class="nf">eval</span>($attrs.initDate) <span class="o">:</span> <span class="o">new</span> <span class="nc">Date</span>();</td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">isActive</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">dateObject</span>) {</td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code js-file-line">    <span class="k">if</span> (self.compare(dateObject.date, self.activeDate) <span class="o">===</span> <span class="m">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code js-file-line">      $scope.activeDateId <span class="o">=</span> dateObject.uid;</td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code js-file-line">      <span class="k">return</span> <span class="kc">true</span>;</td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code js-file-line">    <span class="k">return</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">init</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">ngModelCtrl_</span> ) {</td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code js-file-line">    ngModelCtrl <span class="o">=</span> ngModelCtrl_;</td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code js-file-line">    <span class="no">ngModelCtrl</span>.<span class="nf">$render</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-code js-file-line">      self.render();</td>
      </tr>
      <tr>
        <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">render</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-code js-file-line">    <span class="k">if</span> ( ngModelCtrl.$modelValue ) {</td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code js-file-line">      <span class="k">var</span> date <span class="o">=</span> <span class="o">new</span> <span class="nc">Date</span>( ngModelCtrl.$modelValue ),</td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code js-file-line">          isValid <span class="o">=</span> <span class="o">!</span><span class="nf">isNaN</span>(date);</td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code js-file-line">      <span class="k">if</span> ( isValid ) {</td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code js-file-line">        <span class="nb">this</span>.activeDate <span class="o">=</span> date;</td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code js-file-line">      } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code js-file-line">        $log<span class="nf">.error</span>(<span class="s1">'Datepicker directive: &quot;ng-model&quot; value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'</span>);</td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code js-file-line">      ngModelCtrl.$setValidity(<span class="s1">'date'</span>, isValid);</td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code js-file-line">    <span class="nb">this</span>.refreshView();</td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">refreshView</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code js-file-line">    <span class="k">if</span> ( <span class="nb">this</span>.element ) {</td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code js-file-line">      <span class="nb">this</span>._refreshView();</td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code js-file-line">      <span class="k">var</span> date <span class="o">=</span> ngModelCtrl.$modelValue <span class="o">?</span> <span class="o">new</span> <span class="nc">Date</span>(ngModelCtrl.$modelValue) <span class="o">:</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code js-file-line">      ngModelCtrl.$setValidity(<span class="s1">'date-disabled'</span>, <span class="o">!</span>date <span class="o">||</span> (<span class="nb">this</span>.element <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nb">this</span>.isDisabled(date)));</td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">createDateObject</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">date</span>, <span class="nv">format</span>) {</td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code js-file-line">    <span class="k">var</span> model <span class="o">=</span> ngModelCtrl.$modelValue <span class="o">?</span> <span class="o">new</span> <span class="nc">Date</span>(ngModelCtrl.$modelValue) <span class="o">:</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code js-file-line">    <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L1069" class="blob-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-code js-file-line">      date<span class="o">:</span> date,</td>
      </tr>
      <tr>
        <td id="L1070" class="blob-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-code js-file-line">      label<span class="o">:</span> dateFilter(date, format),</td>
      </tr>
      <tr>
        <td id="L1071" class="blob-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-code js-file-line">      selected<span class="o">:</span> model <span class="o">&amp;&amp;</span> <span class="nb">this</span>.compare(date, model) <span class="o">===</span> <span class="m">0</span>,</td>
      </tr>
      <tr>
        <td id="L1072" class="blob-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-code js-file-line">      disabled<span class="o">:</span> <span class="nb">this</span>.isDisabled(date),</td>
      </tr>
      <tr>
        <td id="L1073" class="blob-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-code js-file-line">      current<span class="o">:</span> <span class="nb">this</span>.compare(date, <span class="o">new</span> <span class="nc">Date</span>()) <span class="o">===</span> <span class="m">0</span></td>
      </tr>
      <tr>
        <td id="L1074" class="blob-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1075" class="blob-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1076" class="blob-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1077" class="blob-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">isDisabled</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">date</span> ) {</td>
      </tr>
      <tr>
        <td id="L1078" class="blob-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-code js-file-line">    <span class="k">return</span> ((<span class="nb">this</span>.minDate <span class="o">&amp;&amp;</span> <span class="nb">this</span>.compare(date, <span class="nb">this</span>.minDate) <span class="o">&lt;</span> <span class="m">0</span>) <span class="o">||</span> (<span class="nb">this</span>.maxDate <span class="o">&amp;&amp;</span> <span class="nb">this</span>.compare(date, <span class="nb">this</span>.maxDate) <span class="o">&gt;</span> <span class="m">0</span>) <span class="o">||</span> ($attrs.dateDisabled <span class="o">&amp;&amp;</span> $scope.dateDisabled({date<span class="o">:</span> date, mode<span class="o">:</span> $scope.datepickerMode})));</td>
      </tr>
      <tr>
        <td id="L1079" class="blob-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1080" class="blob-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1081" class="blob-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-code js-file-line">  <span class="c1">// Split array into smaller arrays</span></td>
      </tr>
      <tr>
        <td id="L1082" class="blob-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">split</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">arr</span>, <span class="nv">size</span>) {</td>
      </tr>
      <tr>
        <td id="L1083" class="blob-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-code js-file-line">    <span class="k">var</span> arrays <span class="o">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1084" class="blob-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-code js-file-line">    <span class="k">while</span> (arr.<span class="no">length</span> <span class="o">&gt;</span> <span class="m">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1085" class="blob-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-code js-file-line">      arrays.<span class="nf">push</span>(arr.<span class="nf">splice</span>(<span class="m">0</span>, size));</td>
      </tr>
      <tr>
        <td id="L1086" class="blob-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1087" class="blob-num js-line-number" data-line-number="1087"></td>
        <td id="LC1087" class="blob-code js-file-line">    <span class="k">return</span> arrays;</td>
      </tr>
      <tr>
        <td id="L1088" class="blob-num js-line-number" data-line-number="1088"></td>
        <td id="LC1088" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1089" class="blob-num js-line-number" data-line-number="1089"></td>
        <td id="LC1089" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1090" class="blob-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">select</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">date</span> ) {</td>
      </tr>
      <tr>
        <td id="L1091" class="blob-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-code js-file-line">    <span class="k">if</span> ( $scope.datepickerMode <span class="o">===</span> self.minMode ) {</td>
      </tr>
      <tr>
        <td id="L1092" class="blob-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-code js-file-line">      <span class="k">var</span> dt <span class="o">=</span> ngModelCtrl.$modelValue <span class="o">?</span> <span class="o">new</span> <span class="nc">Date</span>( ngModelCtrl.$modelValue ) <span class="o">:</span> <span class="o">new</span> <span class="nc">Date</span>(<span class="m">0</span>, <span class="m">0</span>, <span class="m">0</span>, <span class="m">0</span>, <span class="m">0</span>, <span class="m">0</span>, <span class="m">0</span>);</td>
      </tr>
      <tr>
        <td id="L1093" class="blob-num js-line-number" data-line-number="1093"></td>
        <td id="LC1093" class="blob-code js-file-line">      dt.<span class="nf">setFullYear</span>( date.<span class="nf">getFullYear</span>(), date.<span class="nf">getMonth</span>(), date.<span class="nf">getDate</span>() );</td>
      </tr>
      <tr>
        <td id="L1094" class="blob-num js-line-number" data-line-number="1094"></td>
        <td id="LC1094" class="blob-code js-file-line">      ngModelCtrl.$setViewValue( dt );</td>
      </tr>
      <tr>
        <td id="L1095" class="blob-num js-line-number" data-line-number="1095"></td>
        <td id="LC1095" class="blob-code js-file-line">      ngModelCtrl.$render();</td>
      </tr>
      <tr>
        <td id="L1096" class="blob-num js-line-number" data-line-number="1096"></td>
        <td id="LC1096" class="blob-code js-file-line">    } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1097" class="blob-num js-line-number" data-line-number="1097"></td>
        <td id="LC1097" class="blob-code js-file-line">      self.activeDate <span class="o">=</span> date;</td>
      </tr>
      <tr>
        <td id="L1098" class="blob-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-code js-file-line">      $scope.datepickerMode <span class="o">=</span> self.modes[ self.modes.<span class="nf">indexOf</span>( $scope.datepickerMode ) <span class="o">-</span> <span class="m">1</span> ];</td>
      </tr>
      <tr>
        <td id="L1099" class="blob-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1100" class="blob-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1101" class="blob-num js-line-number" data-line-number="1101"></td>
        <td id="LC1101" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1102" class="blob-num js-line-number" data-line-number="1102"></td>
        <td id="LC1102" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">move</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">direction</span> ) {</td>
      </tr>
      <tr>
        <td id="L1103" class="blob-num js-line-number" data-line-number="1103"></td>
        <td id="LC1103" class="blob-code js-file-line">    <span class="k">var</span> year <span class="o">=</span> self.activeDate.<span class="nf">getFullYear</span>() <span class="o">+</span> direction <span class="o">*</span> (self.step.years <span class="o">||</span> <span class="m">0</span>),</td>
      </tr>
      <tr>
        <td id="L1104" class="blob-num js-line-number" data-line-number="1104"></td>
        <td id="LC1104" class="blob-code js-file-line">        month <span class="o">=</span> self.activeDate.<span class="nf">getMonth</span>() <span class="o">+</span> direction <span class="o">*</span> (self.step.months <span class="o">||</span> <span class="m">0</span>);</td>
      </tr>
      <tr>
        <td id="L1105" class="blob-num js-line-number" data-line-number="1105"></td>
        <td id="LC1105" class="blob-code js-file-line">    self.activeDate.<span class="nf">setFullYear</span>(year, month, <span class="m">1</span>);</td>
      </tr>
      <tr>
        <td id="L1106" class="blob-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-code js-file-line">    self.refreshView();</td>
      </tr>
      <tr>
        <td id="L1107" class="blob-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1108" class="blob-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1109" class="blob-num js-line-number" data-line-number="1109"></td>
        <td id="LC1109" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">toggleMode</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">direction</span> ) {</td>
      </tr>
      <tr>
        <td id="L1110" class="blob-num js-line-number" data-line-number="1110"></td>
        <td id="LC1110" class="blob-code js-file-line">    direction <span class="o">=</span> direction <span class="o">||</span> <span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L1111" class="blob-num js-line-number" data-line-number="1111"></td>
        <td id="LC1111" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1112" class="blob-num js-line-number" data-line-number="1112"></td>
        <td id="LC1112" class="blob-code js-file-line">    <span class="k">if</span> (($scope.datepickerMode <span class="o">===</span> self.maxMode <span class="o">&amp;&amp;</span> direction <span class="o">===</span> <span class="m">1</span>) <span class="o">||</span> ($scope.datepickerMode <span class="o">===</span> self.minMode <span class="o">&amp;&amp;</span> direction <span class="o">===</span> <span class="o">-</span><span class="m">1</span>)) {</td>
      </tr>
      <tr>
        <td id="L1113" class="blob-num js-line-number" data-line-number="1113"></td>
        <td id="LC1113" class="blob-code js-file-line">      <span class="k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1114" class="blob-num js-line-number" data-line-number="1114"></td>
        <td id="LC1114" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1115" class="blob-num js-line-number" data-line-number="1115"></td>
        <td id="LC1115" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1116" class="blob-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-code js-file-line">    $scope.datepickerMode <span class="o">=</span> self.modes[ self.modes.<span class="nf">indexOf</span>( $scope.datepickerMode ) <span class="o">+</span> direction ];</td>
      </tr>
      <tr>
        <td id="L1117" class="blob-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1118" class="blob-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1119" class="blob-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-code js-file-line">  <span class="c1">// Key event mapper</span></td>
      </tr>
      <tr>
        <td id="L1120" class="blob-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-code js-file-line">  $scope.keys <span class="o">=</span> { <span class="m">13</span><span class="o">:</span><span class="s1">'enter'</span>, <span class="m">32</span><span class="o">:</span><span class="s1">'space'</span>, <span class="m">33</span><span class="o">:</span><span class="s1">'pageup'</span>, <span class="m">34</span><span class="o">:</span><span class="s1">'pagedown'</span>, <span class="m">35</span><span class="o">:</span><span class="s1">'end'</span>, <span class="m">36</span><span class="o">:</span><span class="s1">'home'</span>, <span class="m">37</span><span class="o">:</span><span class="s1">'left'</span>, <span class="m">38</span><span class="o">:</span><span class="s1">'up'</span>, <span class="m">39</span><span class="o">:</span><span class="s1">'right'</span>, <span class="m">40</span><span class="o">:</span><span class="s1">'down'</span> };</td>
      </tr>
      <tr>
        <td id="L1121" class="blob-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1122" class="blob-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-code js-file-line">  <span class="k">var</span> <span class="nf">focusElement</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1123" class="blob-num js-line-number" data-line-number="1123"></td>
        <td id="LC1123" class="blob-code js-file-line">    $timeout(<span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1124" class="blob-num js-line-number" data-line-number="1124"></td>
        <td id="LC1124" class="blob-code js-file-line">      self.element[<span class="m">0</span>].<span class="nf">focus</span>();</td>
      </tr>
      <tr>
        <td id="L1125" class="blob-num js-line-number" data-line-number="1125"></td>
        <td id="LC1125" class="blob-code js-file-line">    }, <span class="m">0</span> , <span class="kc">false</span>);</td>
      </tr>
      <tr>
        <td id="L1126" class="blob-num js-line-number" data-line-number="1126"></td>
        <td id="LC1126" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1127" class="blob-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1128" class="blob-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-code js-file-line">  <span class="c1">// Listen for focus requests from popup directive</span></td>
      </tr>
      <tr>
        <td id="L1129" class="blob-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-code js-file-line">  $scope.$on(<span class="s1">'datepicker.focus'</span>, focusElement);</td>
      </tr>
      <tr>
        <td id="L1130" class="blob-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1131" class="blob-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">keydown</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">evt</span> ) {</td>
      </tr>
      <tr>
        <td id="L1132" class="blob-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-code js-file-line">    <span class="k">var</span> key <span class="o">=</span> $scope.keys[evt.which];</td>
      </tr>
      <tr>
        <td id="L1133" class="blob-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1134" class="blob-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-code js-file-line">    <span class="k">if</span> ( <span class="o">!</span>key <span class="o">||</span> evt.shiftKey <span class="o">||</span> evt.altKey ) {</td>
      </tr>
      <tr>
        <td id="L1135" class="blob-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-code js-file-line">      <span class="k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1136" class="blob-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1137" class="blob-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1138" class="blob-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-code js-file-line">    evt.preventDefault();</td>
      </tr>
      <tr>
        <td id="L1139" class="blob-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-code js-file-line">    evt.stopPropagation();</td>
      </tr>
      <tr>
        <td id="L1140" class="blob-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1141" class="blob-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-code js-file-line">    <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'enter'</span> <span class="o">||</span> key <span class="o">===</span> <span class="s1">'space'</span>) {</td>
      </tr>
      <tr>
        <td id="L1142" class="blob-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-code js-file-line">      <span class="k">if</span> ( self.isDisabled(self.activeDate)) {</td>
      </tr>
      <tr>
        <td id="L1143" class="blob-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-code js-file-line">        <span class="k">return</span>; <span class="c1">// do nothing</span></td>
      </tr>
      <tr>
        <td id="L1144" class="blob-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1145" class="blob-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-code js-file-line">      $scope.<span class="nf">select</span>(self.activeDate);</td>
      </tr>
      <tr>
        <td id="L1146" class="blob-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-code js-file-line">      focusElement();</td>
      </tr>
      <tr>
        <td id="L1147" class="blob-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-code js-file-line">    } <span class="k">else</span> <span class="k">if</span> (evt.ctrlKey <span class="o">&amp;&amp;</span> (key <span class="o">===</span> <span class="s1">'up'</span> <span class="o">||</span> key <span class="o">===</span> <span class="s1">'down'</span>)) {</td>
      </tr>
      <tr>
        <td id="L1148" class="blob-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-code js-file-line">      $scope.toggleMode(key <span class="o">===</span> <span class="s1">'up'</span> <span class="o">?</span> <span class="m">1</span> <span class="o">:</span> <span class="o">-</span><span class="m">1</span>);</td>
      </tr>
      <tr>
        <td id="L1149" class="blob-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-code js-file-line">      focusElement();</td>
      </tr>
      <tr>
        <td id="L1150" class="blob-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-code js-file-line">    } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1151" class="blob-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-code js-file-line">      self.handleKeyDown(key, evt);</td>
      </tr>
      <tr>
        <td id="L1152" class="blob-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-code js-file-line">      self.refreshView();</td>
      </tr>
      <tr>
        <td id="L1153" class="blob-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1154" class="blob-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1155" class="blob-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L1156" class="blob-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1157" class="blob-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-code js-file-line">.directive( <span class="s1">'datepicker'</span>, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1158" class="blob-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L1159" class="blob-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L1160" class="blob-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L1161" class="blob-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-code js-file-line">    templateUrl<span class="o">:</span> <span class="s1">'template/datepicker/datepicker.html'</span>,</td>
      </tr>
      <tr>
        <td id="L1162" class="blob-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-code js-file-line">    scope<span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L1163" class="blob-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-code js-file-line">      datepickerMode<span class="o">:</span> <span class="s1">'=?'</span>,</td>
      </tr>
      <tr>
        <td id="L1164" class="blob-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-code js-file-line">      dateDisabled<span class="o">:</span> <span class="s1">'&amp;'</span></td>
      </tr>
      <tr>
        <td id="L1165" class="blob-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1166" class="blob-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-code js-file-line">    require<span class="o">:</span> [<span class="s1">'datepicker'</span>, <span class="s1">'?^ngModel'</span>],</td>
      </tr>
      <tr>
        <td id="L1167" class="blob-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-code js-file-line">    controller<span class="o">:</span> <span class="s1">'DatepickerController'</span>,</td>
      </tr>
      <tr>
        <td id="L1168" class="blob-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>, <span class="nv">ctrls</span>) {</td>
      </tr>
      <tr>
        <td id="L1169" class="blob-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-code js-file-line">      <span class="k">var</span> datepickerCtrl <span class="o">=</span> ctrls[<span class="m">0</span>], ngModelCtrl <span class="o">=</span> ctrls[<span class="m">1</span>];</td>
      </tr>
      <tr>
        <td id="L1170" class="blob-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1171" class="blob-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-code js-file-line">      <span class="k">if</span> ( ngModelCtrl ) {</td>
      </tr>
      <tr>
        <td id="L1172" class="blob-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-code js-file-line">        datepickerCtrl.init( ngModelCtrl );</td>
      </tr>
      <tr>
        <td id="L1173" class="blob-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1174" class="blob-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1175" class="blob-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1176" class="blob-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L1177" class="blob-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1178" class="blob-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-code js-file-line">.directive(<span class="s1">'daypicker'</span>, [<span class="s1">'dateFilter'</span>, <span class="kt">function</span> (<span class="nv">dateFilter</span>) {</td>
      </tr>
      <tr>
        <td id="L1179" class="blob-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L1180" class="blob-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L1181" class="blob-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L1182" class="blob-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-code js-file-line">    templateUrl<span class="o">:</span> <span class="s1">'template/datepicker/day.html'</span>,</td>
      </tr>
      <tr>
        <td id="L1183" class="blob-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-code js-file-line">    require<span class="o">:</span> <span class="s1">'^datepicker'</span>,</td>
      </tr>
      <tr>
        <td id="L1184" class="blob-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>, <span class="nv">ctrl</span>) {</td>
      </tr>
      <tr>
        <td id="L1185" class="blob-num js-line-number" data-line-number="1185"></td>
        <td id="LC1185" class="blob-code js-file-line">      scope.showWeeks <span class="o">=</span> ctrl.showWeeks;</td>
      </tr>
      <tr>
        <td id="L1186" class="blob-num js-line-number" data-line-number="1186"></td>
        <td id="LC1186" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1187" class="blob-num js-line-number" data-line-number="1187"></td>
        <td id="LC1187" class="blob-code js-file-line">      ctrl.step <span class="o">=</span> { months<span class="o">:</span> <span class="m">1</span> };</td>
      </tr>
      <tr>
        <td id="L1188" class="blob-num js-line-number" data-line-number="1188"></td>
        <td id="LC1188" class="blob-code js-file-line">      ctrl.element <span class="o">=</span> element;</td>
      </tr>
      <tr>
        <td id="L1189" class="blob-num js-line-number" data-line-number="1189"></td>
        <td id="LC1189" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1190" class="blob-num js-line-number" data-line-number="1190"></td>
        <td id="LC1190" class="blob-code js-file-line">      <span class="k">var</span> DAYS_IN_MONTH <span class="o">=</span> [<span class="m">31</span>, <span class="m">28</span>, <span class="m">31</span>, <span class="m">30</span>, <span class="m">31</span>, <span class="m">30</span>, <span class="m">31</span>, <span class="m">31</span>, <span class="m">30</span>, <span class="m">31</span>, <span class="m">30</span>, <span class="m">31</span>];</td>
      </tr>
      <tr>
        <td id="L1191" class="blob-num js-line-number" data-line-number="1191"></td>
        <td id="LC1191" class="blob-code js-file-line">      <span class="kt">function</span> <span class="nf">getDaysInMonth</span>( <span class="nv">year</span>, <span class="nv">month</span> ) {</td>
      </tr>
      <tr>
        <td id="L1192" class="blob-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-code js-file-line">        <span class="k">return</span> ((month <span class="o">===</span> <span class="m">1</span>) <span class="o">&amp;&amp;</span> (year <span class="o">%</span> <span class="m">4</span> <span class="o">===</span> <span class="m">0</span>) <span class="o">&amp;&amp;</span> ((year <span class="o">%</span> <span class="m">100</span> <span class="o">!==</span> <span class="m">0</span>) <span class="o">||</span> (year <span class="o">%</span> <span class="m">400</span> <span class="o">===</span> <span class="m">0</span>))) <span class="o">?</span> <span class="m">29</span> <span class="o">:</span> DAYS_IN_MONTH[month];</td>
      </tr>
      <tr>
        <td id="L1193" class="blob-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1194" class="blob-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1195" class="blob-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-code js-file-line">      <span class="kt">function</span> <span class="nf">getDates</span>(<span class="nv">startDate</span>, <span class="nv">n</span>) {</td>
      </tr>
      <tr>
        <td id="L1196" class="blob-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-code js-file-line">        <span class="k">var</span> dates <span class="o">=</span> <span class="o">new</span> <span class="nc">Array</span>(n), current <span class="o">=</span> <span class="o">new</span> <span class="nc">Date</span>(startDate), i <span class="o">=</span> <span class="m">0</span>;</td>
      </tr>
      <tr>
        <td id="L1197" class="blob-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-code js-file-line">        current.<span class="nf">setHours</span>(<span class="m">12</span>); <span class="c1">// Prevent repeated dates because of timezone bug</span></td>
      </tr>
      <tr>
        <td id="L1198" class="blob-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-code js-file-line">        <span class="k">while</span> ( i <span class="o">&lt;</span> n ) {</td>
      </tr>
      <tr>
        <td id="L1199" class="blob-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-code js-file-line">          dates[i<span class="o">++</span>] <span class="o">=</span> <span class="o">new</span> <span class="nc">Date</span>(current);</td>
      </tr>
      <tr>
        <td id="L1200" class="blob-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-code js-file-line">          current.<span class="nf">setDate</span>( current.<span class="nf">getDate</span>() <span class="o">+</span> <span class="m">1</span> );</td>
      </tr>
      <tr>
        <td id="L1201" class="blob-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1202" class="blob-num js-line-number" data-line-number="1202"></td>
        <td id="LC1202" class="blob-code js-file-line">        <span class="k">return</span> dates;</td>
      </tr>
      <tr>
        <td id="L1203" class="blob-num js-line-number" data-line-number="1203"></td>
        <td id="LC1203" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1204" class="blob-num js-line-number" data-line-number="1204"></td>
        <td id="LC1204" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1205" class="blob-num js-line-number" data-line-number="1205"></td>
        <td id="LC1205" class="blob-code js-file-line">      <span class="no">ctrl</span>.<span class="nf">_refreshView</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1206" class="blob-num js-line-number" data-line-number="1206"></td>
        <td id="LC1206" class="blob-code js-file-line">        <span class="k">var</span> year <span class="o">=</span> ctrl.activeDate.<span class="nf">getFullYear</span>(),</td>
      </tr>
      <tr>
        <td id="L1207" class="blob-num js-line-number" data-line-number="1207"></td>
        <td id="LC1207" class="blob-code js-file-line">          month <span class="o">=</span> ctrl.activeDate.<span class="nf">getMonth</span>(),</td>
      </tr>
      <tr>
        <td id="L1208" class="blob-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-code js-file-line">          firstDayOfMonth <span class="o">=</span> <span class="o">new</span> <span class="nc">Date</span>(year, month, <span class="m">1</span>),</td>
      </tr>
      <tr>
        <td id="L1209" class="blob-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-code js-file-line">          difference <span class="o">=</span> ctrl.startingDay <span class="o">-</span> firstDayOfMonth.<span class="nf">getDay</span>(),</td>
      </tr>
      <tr>
        <td id="L1210" class="blob-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-code js-file-line">          numDisplayedFromPreviousMonth <span class="o">=</span> (difference <span class="o">&gt;</span> <span class="m">0</span>) <span class="o">?</span> <span class="m">7</span> <span class="o">-</span> difference <span class="o">:</span> <span class="o">-</span> difference,</td>
      </tr>
      <tr>
        <td id="L1211" class="blob-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-code js-file-line">          firstDate <span class="o">=</span> <span class="o">new</span> <span class="nc">Date</span>(firstDayOfMonth);</td>
      </tr>
      <tr>
        <td id="L1212" class="blob-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1213" class="blob-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-code js-file-line">        <span class="k">if</span> ( numDisplayedFromPreviousMonth <span class="o">&gt;</span> <span class="m">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L1214" class="blob-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-code js-file-line">          firstDate.<span class="nf">setDate</span>( <span class="o">-</span> numDisplayedFromPreviousMonth <span class="o">+</span> <span class="m">1</span> );</td>
      </tr>
      <tr>
        <td id="L1215" class="blob-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1216" class="blob-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1217" class="blob-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-code js-file-line">        <span class="c1">// 42 is the number of days on a six-month calendar</span></td>
      </tr>
      <tr>
        <td id="L1218" class="blob-num js-line-number" data-line-number="1218"></td>
        <td id="LC1218" class="blob-code js-file-line">        <span class="k">var</span> days <span class="o">=</span> getDates(firstDate, <span class="m">42</span>);</td>
      </tr>
      <tr>
        <td id="L1219" class="blob-num js-line-number" data-line-number="1219"></td>
        <td id="LC1219" class="blob-code js-file-line">        <span class="k">for</span> (<span class="k">var</span> i <span class="o">=</span> <span class="m">0</span>; i <span class="o">&lt;</span> <span class="m">42</span>; i <span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1220" class="blob-num js-line-number" data-line-number="1220"></td>
        <td id="LC1220" class="blob-code js-file-line">          days[i] <span class="o">=</span> angular.extend(ctrl.createDateObject(days[i], ctrl.formatDay), {</td>
      </tr>
      <tr>
        <td id="L1221" class="blob-num js-line-number" data-line-number="1221"></td>
        <td id="LC1221" class="blob-code js-file-line">            secondary<span class="o">:</span> days[i].<span class="nf">getMonth</span>() <span class="o">!==</span> month,</td>
      </tr>
      <tr>
        <td id="L1222" class="blob-num js-line-number" data-line-number="1222"></td>
        <td id="LC1222" class="blob-code js-file-line">            uid<span class="o">:</span> scope.uniqueId <span class="o">+</span> <span class="s1">'-'</span> <span class="o">+</span> i</td>
      </tr>
      <tr>
        <td id="L1223" class="blob-num js-line-number" data-line-number="1223"></td>
        <td id="LC1223" class="blob-code js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L1224" class="blob-num js-line-number" data-line-number="1224"></td>
        <td id="LC1224" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1225" class="blob-num js-line-number" data-line-number="1225"></td>
        <td id="LC1225" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1226" class="blob-num js-line-number" data-line-number="1226"></td>
        <td id="LC1226" class="blob-code js-file-line">        scope.labels <span class="o">=</span> <span class="o">new</span> <span class="nc">Array</span>(<span class="m">7</span>);</td>
      </tr>
      <tr>
        <td id="L1227" class="blob-num js-line-number" data-line-number="1227"></td>
        <td id="LC1227" class="blob-code js-file-line">        <span class="k">for</span> (<span class="k">var</span> j <span class="o">=</span> <span class="m">0</span>; j <span class="o">&lt;</span> <span class="m">7</span>; j<span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1228" class="blob-num js-line-number" data-line-number="1228"></td>
        <td id="LC1228" class="blob-code js-file-line">          scope.labels[j] <span class="o">=</span> {</td>
      </tr>
      <tr>
        <td id="L1229" class="blob-num js-line-number" data-line-number="1229"></td>
        <td id="LC1229" class="blob-code js-file-line">            abbr<span class="o">:</span> dateFilter(days[j].date, ctrl.formatDayHeader),</td>
      </tr>
      <tr>
        <td id="L1230" class="blob-num js-line-number" data-line-number="1230"></td>
        <td id="LC1230" class="blob-code js-file-line">            full<span class="o">:</span> dateFilter(days[j].date, <span class="s1">'EEEE'</span>)</td>
      </tr>
      <tr>
        <td id="L1231" class="blob-num js-line-number" data-line-number="1231"></td>
        <td id="LC1231" class="blob-code js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L1232" class="blob-num js-line-number" data-line-number="1232"></td>
        <td id="LC1232" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1233" class="blob-num js-line-number" data-line-number="1233"></td>
        <td id="LC1233" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1234" class="blob-num js-line-number" data-line-number="1234"></td>
        <td id="LC1234" class="blob-code js-file-line">        scope.<span class="no">title</span> <span class="o">=</span> dateFilter(ctrl.activeDate, ctrl.formatDayTitle);</td>
      </tr>
      <tr>
        <td id="L1235" class="blob-num js-line-number" data-line-number="1235"></td>
        <td id="LC1235" class="blob-code js-file-line">        scope.<span class="no">rows</span> <span class="o">=</span> ctrl.<span class="nf">split</span>(days, <span class="m">7</span>);</td>
      </tr>
      <tr>
        <td id="L1236" class="blob-num js-line-number" data-line-number="1236"></td>
        <td id="LC1236" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1237" class="blob-num js-line-number" data-line-number="1237"></td>
        <td id="LC1237" class="blob-code js-file-line">        <span class="k">if</span> ( scope.showWeeks ) {</td>
      </tr>
      <tr>
        <td id="L1238" class="blob-num js-line-number" data-line-number="1238"></td>
        <td id="LC1238" class="blob-code js-file-line">          scope.weekNumbers <span class="o">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1239" class="blob-num js-line-number" data-line-number="1239"></td>
        <td id="LC1239" class="blob-code js-file-line">          <span class="k">var</span> weekNumber <span class="o">=</span> getISO8601WeekNumber( scope.<span class="no">rows</span>[<span class="m">0</span>][<span class="m">0</span>].date ),</td>
      </tr>
      <tr>
        <td id="L1240" class="blob-num js-line-number" data-line-number="1240"></td>
        <td id="LC1240" class="blob-code js-file-line">              numWeeks <span class="o">=</span> scope.<span class="no">rows</span>.<span class="no">length</span>;</td>
      </tr>
      <tr>
        <td id="L1241" class="blob-num js-line-number" data-line-number="1241"></td>
        <td id="LC1241" class="blob-code js-file-line">          <span class="k">while</span>( scope.weekNumbers.<span class="nf">push</span>(weekNumber<span class="o">++</span>) <span class="o">&lt;</span> numWeeks ) {}</td>
      </tr>
      <tr>
        <td id="L1242" class="blob-num js-line-number" data-line-number="1242"></td>
        <td id="LC1242" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1243" class="blob-num js-line-number" data-line-number="1243"></td>
        <td id="LC1243" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1244" class="blob-num js-line-number" data-line-number="1244"></td>
        <td id="LC1244" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1245" class="blob-num js-line-number" data-line-number="1245"></td>
        <td id="LC1245" class="blob-code js-file-line">      <span class="no">ctrl</span>.<span class="nf">compare</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">date1</span>, <span class="nv">date2</span>) {</td>
      </tr>
      <tr>
        <td id="L1246" class="blob-num js-line-number" data-line-number="1246"></td>
        <td id="LC1246" class="blob-code js-file-line">        <span class="k">return</span> (<span class="o">new</span> <span class="nc">Date</span>( date1.<span class="nf">getFullYear</span>(), date1.<span class="nf">getMonth</span>(), date1.<span class="nf">getDate</span>() ) <span class="o">-</span> <span class="o">new</span> <span class="nc">Date</span>( date2.<span class="nf">getFullYear</span>(), date2.<span class="nf">getMonth</span>(), date2.<span class="nf">getDate</span>() ) );</td>
      </tr>
      <tr>
        <td id="L1247" class="blob-num js-line-number" data-line-number="1247"></td>
        <td id="LC1247" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1248" class="blob-num js-line-number" data-line-number="1248"></td>
        <td id="LC1248" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1249" class="blob-num js-line-number" data-line-number="1249"></td>
        <td id="LC1249" class="blob-code js-file-line">      <span class="kt">function</span> <span class="nf">getISO8601WeekNumber</span>(<span class="nv">date</span>) {</td>
      </tr>
      <tr>
        <td id="L1250" class="blob-num js-line-number" data-line-number="1250"></td>
        <td id="LC1250" class="blob-code js-file-line">        <span class="k">var</span> checkDate <span class="o">=</span> <span class="o">new</span> <span class="nc">Date</span>(date);</td>
      </tr>
      <tr>
        <td id="L1251" class="blob-num js-line-number" data-line-number="1251"></td>
        <td id="LC1251" class="blob-code js-file-line">        checkDate.<span class="nf">setDate</span>(checkDate.<span class="nf">getDate</span>() <span class="o">+</span> <span class="m">4</span> <span class="o">-</span> (checkDate.<span class="nf">getDay</span>() <span class="o">||</span> <span class="m">7</span>)); <span class="c1">// Thursday</span></td>
      </tr>
      <tr>
        <td id="L1252" class="blob-num js-line-number" data-line-number="1252"></td>
        <td id="LC1252" class="blob-code js-file-line">        <span class="k">var</span> time <span class="o">=</span> checkDate.<span class="nf">getTime</span>();</td>
      </tr>
      <tr>
        <td id="L1253" class="blob-num js-line-number" data-line-number="1253"></td>
        <td id="LC1253" class="blob-code js-file-line">        checkDate.<span class="nf">setMonth</span>(<span class="m">0</span>); <span class="c1">// Compare with Jan 1</span></td>
      </tr>
      <tr>
        <td id="L1254" class="blob-num js-line-number" data-line-number="1254"></td>
        <td id="LC1254" class="blob-code js-file-line">        checkDate.<span class="nf">setDate</span>(<span class="m">1</span>);</td>
      </tr>
      <tr>
        <td id="L1255" class="blob-num js-line-number" data-line-number="1255"></td>
        <td id="LC1255" class="blob-code js-file-line">        <span class="k">return</span> <span class="no">Math</span>.<span class="nf">floor</span>(<span class="no">Math</span>.<span class="nf">round</span>((time <span class="o">-</span> checkDate) / <span class="m">86400000</span>) / <span class="m">7</span>) <span class="o">+</span> <span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L1256" class="blob-num js-line-number" data-line-number="1256"></td>
        <td id="LC1256" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1257" class="blob-num js-line-number" data-line-number="1257"></td>
        <td id="LC1257" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1258" class="blob-num js-line-number" data-line-number="1258"></td>
        <td id="LC1258" class="blob-code js-file-line">      <span class="no">ctrl</span>.<span class="nf">handleKeyDown</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">key</span>, <span class="nv">evt</span> ) {</td>
      </tr>
      <tr>
        <td id="L1259" class="blob-num js-line-number" data-line-number="1259"></td>
        <td id="LC1259" class="blob-code js-file-line">        <span class="k">var</span> date <span class="o">=</span> ctrl.activeDate.<span class="nf">getDate</span>();</td>
      </tr>
      <tr>
        <td id="L1260" class="blob-num js-line-number" data-line-number="1260"></td>
        <td id="LC1260" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1261" class="blob-num js-line-number" data-line-number="1261"></td>
        <td id="LC1261" class="blob-code js-file-line">        <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'left'</span>) {</td>
      </tr>
      <tr>
        <td id="L1262" class="blob-num js-line-number" data-line-number="1262"></td>
        <td id="LC1262" class="blob-code js-file-line">          date <span class="o">=</span> date <span class="o">-</span> <span class="m">1</span>;   <span class="c1">// up</span></td>
      </tr>
      <tr>
        <td id="L1263" class="blob-num js-line-number" data-line-number="1263"></td>
        <td id="LC1263" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'up'</span>) {</td>
      </tr>
      <tr>
        <td id="L1264" class="blob-num js-line-number" data-line-number="1264"></td>
        <td id="LC1264" class="blob-code js-file-line">          date <span class="o">=</span> date <span class="o">-</span> <span class="m">7</span>;   <span class="c1">// down</span></td>
      </tr>
      <tr>
        <td id="L1265" class="blob-num js-line-number" data-line-number="1265"></td>
        <td id="LC1265" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'right'</span>) {</td>
      </tr>
      <tr>
        <td id="L1266" class="blob-num js-line-number" data-line-number="1266"></td>
        <td id="LC1266" class="blob-code js-file-line">          date <span class="o">=</span> date <span class="o">+</span> <span class="m">1</span>;   <span class="c1">// down</span></td>
      </tr>
      <tr>
        <td id="L1267" class="blob-num js-line-number" data-line-number="1267"></td>
        <td id="LC1267" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'down'</span>) {</td>
      </tr>
      <tr>
        <td id="L1268" class="blob-num js-line-number" data-line-number="1268"></td>
        <td id="LC1268" class="blob-code js-file-line">          date <span class="o">=</span> date <span class="o">+</span> <span class="m">7</span>;</td>
      </tr>
      <tr>
        <td id="L1269" class="blob-num js-line-number" data-line-number="1269"></td>
        <td id="LC1269" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'pageup'</span> <span class="o">||</span> key <span class="o">===</span> <span class="s1">'pagedown'</span>) {</td>
      </tr>
      <tr>
        <td id="L1270" class="blob-num js-line-number" data-line-number="1270"></td>
        <td id="LC1270" class="blob-code js-file-line">          <span class="k">var</span> month <span class="o">=</span> ctrl.activeDate.<span class="nf">getMonth</span>() <span class="o">+</span> (key <span class="o">===</span> <span class="s1">'pageup'</span> <span class="o">?</span> <span class="o">-</span> <span class="m">1</span> <span class="o">:</span> <span class="m">1</span>);</td>
      </tr>
      <tr>
        <td id="L1271" class="blob-num js-line-number" data-line-number="1271"></td>
        <td id="LC1271" class="blob-code js-file-line">          ctrl.activeDate.<span class="nf">setMonth</span>(month, <span class="m">1</span>);</td>
      </tr>
      <tr>
        <td id="L1272" class="blob-num js-line-number" data-line-number="1272"></td>
        <td id="LC1272" class="blob-code js-file-line">          date <span class="o">=</span> <span class="no">Math</span>.<span class="nf">min</span>(getDaysInMonth(ctrl.activeDate.<span class="nf">getFullYear</span>(), ctrl.activeDate.<span class="nf">getMonth</span>()), date);</td>
      </tr>
      <tr>
        <td id="L1273" class="blob-num js-line-number" data-line-number="1273"></td>
        <td id="LC1273" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'home'</span>) {</td>
      </tr>
      <tr>
        <td id="L1274" class="blob-num js-line-number" data-line-number="1274"></td>
        <td id="LC1274" class="blob-code js-file-line">          date <span class="o">=</span> <span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L1275" class="blob-num js-line-number" data-line-number="1275"></td>
        <td id="LC1275" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'end'</span>) {</td>
      </tr>
      <tr>
        <td id="L1276" class="blob-num js-line-number" data-line-number="1276"></td>
        <td id="LC1276" class="blob-code js-file-line">          date <span class="o">=</span> getDaysInMonth(ctrl.activeDate.<span class="nf">getFullYear</span>(), ctrl.activeDate.<span class="nf">getMonth</span>());</td>
      </tr>
      <tr>
        <td id="L1277" class="blob-num js-line-number" data-line-number="1277"></td>
        <td id="LC1277" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1278" class="blob-num js-line-number" data-line-number="1278"></td>
        <td id="LC1278" class="blob-code js-file-line">        ctrl.activeDate.<span class="nf">setDate</span>(date);</td>
      </tr>
      <tr>
        <td id="L1279" class="blob-num js-line-number" data-line-number="1279"></td>
        <td id="LC1279" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1280" class="blob-num js-line-number" data-line-number="1280"></td>
        <td id="LC1280" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1281" class="blob-num js-line-number" data-line-number="1281"></td>
        <td id="LC1281" class="blob-code js-file-line">      ctrl.refreshView();</td>
      </tr>
      <tr>
        <td id="L1282" class="blob-num js-line-number" data-line-number="1282"></td>
        <td id="LC1282" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1283" class="blob-num js-line-number" data-line-number="1283"></td>
        <td id="LC1283" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1284" class="blob-num js-line-number" data-line-number="1284"></td>
        <td id="LC1284" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L1285" class="blob-num js-line-number" data-line-number="1285"></td>
        <td id="LC1285" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1286" class="blob-num js-line-number" data-line-number="1286"></td>
        <td id="LC1286" class="blob-code js-file-line">.directive(<span class="s1">'monthpicker'</span>, [<span class="s1">'dateFilter'</span>, <span class="kt">function</span> (<span class="nv">dateFilter</span>) {</td>
      </tr>
      <tr>
        <td id="L1287" class="blob-num js-line-number" data-line-number="1287"></td>
        <td id="LC1287" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L1288" class="blob-num js-line-number" data-line-number="1288"></td>
        <td id="LC1288" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L1289" class="blob-num js-line-number" data-line-number="1289"></td>
        <td id="LC1289" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L1290" class="blob-num js-line-number" data-line-number="1290"></td>
        <td id="LC1290" class="blob-code js-file-line">    templateUrl<span class="o">:</span> <span class="s1">'template/datepicker/month.html'</span>,</td>
      </tr>
      <tr>
        <td id="L1291" class="blob-num js-line-number" data-line-number="1291"></td>
        <td id="LC1291" class="blob-code js-file-line">    require<span class="o">:</span> <span class="s1">'^datepicker'</span>,</td>
      </tr>
      <tr>
        <td id="L1292" class="blob-num js-line-number" data-line-number="1292"></td>
        <td id="LC1292" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>, <span class="nv">ctrl</span>) {</td>
      </tr>
      <tr>
        <td id="L1293" class="blob-num js-line-number" data-line-number="1293"></td>
        <td id="LC1293" class="blob-code js-file-line">      ctrl.step <span class="o">=</span> { years<span class="o">:</span> <span class="m">1</span> };</td>
      </tr>
      <tr>
        <td id="L1294" class="blob-num js-line-number" data-line-number="1294"></td>
        <td id="LC1294" class="blob-code js-file-line">      ctrl.element <span class="o">=</span> element;</td>
      </tr>
      <tr>
        <td id="L1295" class="blob-num js-line-number" data-line-number="1295"></td>
        <td id="LC1295" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1296" class="blob-num js-line-number" data-line-number="1296"></td>
        <td id="LC1296" class="blob-code js-file-line">      <span class="no">ctrl</span>.<span class="nf">_refreshView</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1297" class="blob-num js-line-number" data-line-number="1297"></td>
        <td id="LC1297" class="blob-code js-file-line">        <span class="k">var</span> months <span class="o">=</span> <span class="o">new</span> <span class="nc">Array</span>(<span class="m">12</span>),</td>
      </tr>
      <tr>
        <td id="L1298" class="blob-num js-line-number" data-line-number="1298"></td>
        <td id="LC1298" class="blob-code js-file-line">            year <span class="o">=</span> ctrl.activeDate.<span class="nf">getFullYear</span>();</td>
      </tr>
      <tr>
        <td id="L1299" class="blob-num js-line-number" data-line-number="1299"></td>
        <td id="LC1299" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1300" class="blob-num js-line-number" data-line-number="1300"></td>
        <td id="LC1300" class="blob-code js-file-line">        <span class="k">for</span> ( <span class="k">var</span> i <span class="o">=</span> <span class="m">0</span>; i <span class="o">&lt;</span> <span class="m">12</span>; i<span class="o">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1301" class="blob-num js-line-number" data-line-number="1301"></td>
        <td id="LC1301" class="blob-code js-file-line">          months[i] <span class="o">=</span> angular.extend(ctrl.createDateObject(<span class="o">new</span> <span class="nc">Date</span>(year, i, <span class="m">1</span>), ctrl.formatMonth), {</td>
      </tr>
      <tr>
        <td id="L1302" class="blob-num js-line-number" data-line-number="1302"></td>
        <td id="LC1302" class="blob-code js-file-line">            uid<span class="o">:</span> scope.uniqueId <span class="o">+</span> <span class="s1">'-'</span> <span class="o">+</span> i</td>
      </tr>
      <tr>
        <td id="L1303" class="blob-num js-line-number" data-line-number="1303"></td>
        <td id="LC1303" class="blob-code js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L1304" class="blob-num js-line-number" data-line-number="1304"></td>
        <td id="LC1304" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1305" class="blob-num js-line-number" data-line-number="1305"></td>
        <td id="LC1305" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1306" class="blob-num js-line-number" data-line-number="1306"></td>
        <td id="LC1306" class="blob-code js-file-line">        scope.<span class="no">title</span> <span class="o">=</span> dateFilter(ctrl.activeDate, ctrl.formatMonthTitle);</td>
      </tr>
      <tr>
        <td id="L1307" class="blob-num js-line-number" data-line-number="1307"></td>
        <td id="LC1307" class="blob-code js-file-line">        scope.<span class="no">rows</span> <span class="o">=</span> ctrl.<span class="nf">split</span>(months, <span class="m">3</span>);</td>
      </tr>
      <tr>
        <td id="L1308" class="blob-num js-line-number" data-line-number="1308"></td>
        <td id="LC1308" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1309" class="blob-num js-line-number" data-line-number="1309"></td>
        <td id="LC1309" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1310" class="blob-num js-line-number" data-line-number="1310"></td>
        <td id="LC1310" class="blob-code js-file-line">      <span class="no">ctrl</span>.<span class="nf">compare</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">date1</span>, <span class="nv">date2</span>) {</td>
      </tr>
      <tr>
        <td id="L1311" class="blob-num js-line-number" data-line-number="1311"></td>
        <td id="LC1311" class="blob-code js-file-line">        <span class="k">return</span> <span class="o">new</span> <span class="nc">Date</span>( date1.<span class="nf">getFullYear</span>(), date1.<span class="nf">getMonth</span>() ) <span class="o">-</span> <span class="o">new</span> <span class="nc">Date</span>( date2.<span class="nf">getFullYear</span>(), date2.<span class="nf">getMonth</span>() );</td>
      </tr>
      <tr>
        <td id="L1312" class="blob-num js-line-number" data-line-number="1312"></td>
        <td id="LC1312" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1313" class="blob-num js-line-number" data-line-number="1313"></td>
        <td id="LC1313" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1314" class="blob-num js-line-number" data-line-number="1314"></td>
        <td id="LC1314" class="blob-code js-file-line">      <span class="no">ctrl</span>.<span class="nf">handleKeyDown</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">key</span>, <span class="nv">evt</span> ) {</td>
      </tr>
      <tr>
        <td id="L1315" class="blob-num js-line-number" data-line-number="1315"></td>
        <td id="LC1315" class="blob-code js-file-line">        <span class="k">var</span> date <span class="o">=</span> ctrl.activeDate.<span class="nf">getMonth</span>();</td>
      </tr>
      <tr>
        <td id="L1316" class="blob-num js-line-number" data-line-number="1316"></td>
        <td id="LC1316" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1317" class="blob-num js-line-number" data-line-number="1317"></td>
        <td id="LC1317" class="blob-code js-file-line">        <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'left'</span>) {</td>
      </tr>
      <tr>
        <td id="L1318" class="blob-num js-line-number" data-line-number="1318"></td>
        <td id="LC1318" class="blob-code js-file-line">          date <span class="o">=</span> date <span class="o">-</span> <span class="m">1</span>;   <span class="c1">// up</span></td>
      </tr>
      <tr>
        <td id="L1319" class="blob-num js-line-number" data-line-number="1319"></td>
        <td id="LC1319" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'up'</span>) {</td>
      </tr>
      <tr>
        <td id="L1320" class="blob-num js-line-number" data-line-number="1320"></td>
        <td id="LC1320" class="blob-code js-file-line">          date <span class="o">=</span> date <span class="o">-</span> <span class="m">3</span>;   <span class="c1">// down</span></td>
      </tr>
      <tr>
        <td id="L1321" class="blob-num js-line-number" data-line-number="1321"></td>
        <td id="LC1321" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'right'</span>) {</td>
      </tr>
      <tr>
        <td id="L1322" class="blob-num js-line-number" data-line-number="1322"></td>
        <td id="LC1322" class="blob-code js-file-line">          date <span class="o">=</span> date <span class="o">+</span> <span class="m">1</span>;   <span class="c1">// down</span></td>
      </tr>
      <tr>
        <td id="L1323" class="blob-num js-line-number" data-line-number="1323"></td>
        <td id="LC1323" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'down'</span>) {</td>
      </tr>
      <tr>
        <td id="L1324" class="blob-num js-line-number" data-line-number="1324"></td>
        <td id="LC1324" class="blob-code js-file-line">          date <span class="o">=</span> date <span class="o">+</span> <span class="m">3</span>;</td>
      </tr>
      <tr>
        <td id="L1325" class="blob-num js-line-number" data-line-number="1325"></td>
        <td id="LC1325" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'pageup'</span> <span class="o">||</span> key <span class="o">===</span> <span class="s1">'pagedown'</span>) {</td>
      </tr>
      <tr>
        <td id="L1326" class="blob-num js-line-number" data-line-number="1326"></td>
        <td id="LC1326" class="blob-code js-file-line">          <span class="k">var</span> year <span class="o">=</span> ctrl.activeDate.<span class="nf">getFullYear</span>() <span class="o">+</span> (key <span class="o">===</span> <span class="s1">'pageup'</span> <span class="o">?</span> <span class="o">-</span> <span class="m">1</span> <span class="o">:</span> <span class="m">1</span>);</td>
      </tr>
      <tr>
        <td id="L1327" class="blob-num js-line-number" data-line-number="1327"></td>
        <td id="LC1327" class="blob-code js-file-line">          ctrl.activeDate.<span class="nf">setFullYear</span>(year);</td>
      </tr>
      <tr>
        <td id="L1328" class="blob-num js-line-number" data-line-number="1328"></td>
        <td id="LC1328" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'home'</span>) {</td>
      </tr>
      <tr>
        <td id="L1329" class="blob-num js-line-number" data-line-number="1329"></td>
        <td id="LC1329" class="blob-code js-file-line">          date <span class="o">=</span> <span class="m">0</span>;</td>
      </tr>
      <tr>
        <td id="L1330" class="blob-num js-line-number" data-line-number="1330"></td>
        <td id="LC1330" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'end'</span>) {</td>
      </tr>
      <tr>
        <td id="L1331" class="blob-num js-line-number" data-line-number="1331"></td>
        <td id="LC1331" class="blob-code js-file-line">          date <span class="o">=</span> <span class="m">11</span>;</td>
      </tr>
      <tr>
        <td id="L1332" class="blob-num js-line-number" data-line-number="1332"></td>
        <td id="LC1332" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1333" class="blob-num js-line-number" data-line-number="1333"></td>
        <td id="LC1333" class="blob-code js-file-line">        ctrl.activeDate.<span class="nf">setMonth</span>(date);</td>
      </tr>
      <tr>
        <td id="L1334" class="blob-num js-line-number" data-line-number="1334"></td>
        <td id="LC1334" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1335" class="blob-num js-line-number" data-line-number="1335"></td>
        <td id="LC1335" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1336" class="blob-num js-line-number" data-line-number="1336"></td>
        <td id="LC1336" class="blob-code js-file-line">      ctrl.refreshView();</td>
      </tr>
      <tr>
        <td id="L1337" class="blob-num js-line-number" data-line-number="1337"></td>
        <td id="LC1337" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1338" class="blob-num js-line-number" data-line-number="1338"></td>
        <td id="LC1338" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1339" class="blob-num js-line-number" data-line-number="1339"></td>
        <td id="LC1339" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L1340" class="blob-num js-line-number" data-line-number="1340"></td>
        <td id="LC1340" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1341" class="blob-num js-line-number" data-line-number="1341"></td>
        <td id="LC1341" class="blob-code js-file-line">.directive(<span class="s1">'yearpicker'</span>, [<span class="s1">'dateFilter'</span>, <span class="kt">function</span> (<span class="nv">dateFilter</span>) {</td>
      </tr>
      <tr>
        <td id="L1342" class="blob-num js-line-number" data-line-number="1342"></td>
        <td id="LC1342" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L1343" class="blob-num js-line-number" data-line-number="1343"></td>
        <td id="LC1343" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L1344" class="blob-num js-line-number" data-line-number="1344"></td>
        <td id="LC1344" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L1345" class="blob-num js-line-number" data-line-number="1345"></td>
        <td id="LC1345" class="blob-code js-file-line">    templateUrl<span class="o">:</span> <span class="s1">'template/datepicker/year.html'</span>,</td>
      </tr>
      <tr>
        <td id="L1346" class="blob-num js-line-number" data-line-number="1346"></td>
        <td id="LC1346" class="blob-code js-file-line">    require<span class="o">:</span> <span class="s1">'^datepicker'</span>,</td>
      </tr>
      <tr>
        <td id="L1347" class="blob-num js-line-number" data-line-number="1347"></td>
        <td id="LC1347" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>, <span class="nv">ctrl</span>) {</td>
      </tr>
      <tr>
        <td id="L1348" class="blob-num js-line-number" data-line-number="1348"></td>
        <td id="LC1348" class="blob-code js-file-line">      <span class="k">var</span> range <span class="o">=</span> ctrl.yearRange;</td>
      </tr>
      <tr>
        <td id="L1349" class="blob-num js-line-number" data-line-number="1349"></td>
        <td id="LC1349" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1350" class="blob-num js-line-number" data-line-number="1350"></td>
        <td id="LC1350" class="blob-code js-file-line">      ctrl.step <span class="o">=</span> { years<span class="o">:</span> range };</td>
      </tr>
      <tr>
        <td id="L1351" class="blob-num js-line-number" data-line-number="1351"></td>
        <td id="LC1351" class="blob-code js-file-line">      ctrl.element <span class="o">=</span> element;</td>
      </tr>
      <tr>
        <td id="L1352" class="blob-num js-line-number" data-line-number="1352"></td>
        <td id="LC1352" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1353" class="blob-num js-line-number" data-line-number="1353"></td>
        <td id="LC1353" class="blob-code js-file-line">      <span class="kt">function</span> <span class="nf">getStartingYear</span>( <span class="nv">year</span> ) {</td>
      </tr>
      <tr>
        <td id="L1354" class="blob-num js-line-number" data-line-number="1354"></td>
        <td id="LC1354" class="blob-code js-file-line">        <span class="k">return</span> <span class="nf">parseInt</span>((year <span class="o">-</span> <span class="m">1</span>) / range, <span class="m">10</span>) <span class="o">*</span> range <span class="o">+</span> <span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L1355" class="blob-num js-line-number" data-line-number="1355"></td>
        <td id="LC1355" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1356" class="blob-num js-line-number" data-line-number="1356"></td>
        <td id="LC1356" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1357" class="blob-num js-line-number" data-line-number="1357"></td>
        <td id="LC1357" class="blob-code js-file-line">      <span class="no">ctrl</span>.<span class="nf">_refreshView</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1358" class="blob-num js-line-number" data-line-number="1358"></td>
        <td id="LC1358" class="blob-code js-file-line">        <span class="k">var</span> years <span class="o">=</span> <span class="o">new</span> <span class="nc">Array</span>(range);</td>
      </tr>
      <tr>
        <td id="L1359" class="blob-num js-line-number" data-line-number="1359"></td>
        <td id="LC1359" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1360" class="blob-num js-line-number" data-line-number="1360"></td>
        <td id="LC1360" class="blob-code js-file-line">        <span class="k">for</span> ( <span class="k">var</span> i <span class="o">=</span> <span class="m">0</span>, start <span class="o">=</span> getStartingYear(ctrl.activeDate.<span class="nf">getFullYear</span>()); i <span class="o">&lt;</span> range; i<span class="o">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1361" class="blob-num js-line-number" data-line-number="1361"></td>
        <td id="LC1361" class="blob-code js-file-line">          years[i] <span class="o">=</span> angular.extend(ctrl.createDateObject(<span class="o">new</span> <span class="nc">Date</span>(start <span class="o">+</span> i, <span class="m">0</span>, <span class="m">1</span>), ctrl.formatYear), {</td>
      </tr>
      <tr>
        <td id="L1362" class="blob-num js-line-number" data-line-number="1362"></td>
        <td id="LC1362" class="blob-code js-file-line">            uid<span class="o">:</span> scope.uniqueId <span class="o">+</span> <span class="s1">'-'</span> <span class="o">+</span> i</td>
      </tr>
      <tr>
        <td id="L1363" class="blob-num js-line-number" data-line-number="1363"></td>
        <td id="LC1363" class="blob-code js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L1364" class="blob-num js-line-number" data-line-number="1364"></td>
        <td id="LC1364" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1365" class="blob-num js-line-number" data-line-number="1365"></td>
        <td id="LC1365" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1366" class="blob-num js-line-number" data-line-number="1366"></td>
        <td id="LC1366" class="blob-code js-file-line">        scope.<span class="no">title</span> <span class="o">=</span> [years[<span class="m">0</span>].<span class="no">label</span>, years[range <span class="o">-</span> <span class="m">1</span>].<span class="no">label</span>].<span class="nf">join</span>(<span class="s1">' - '</span>);</td>
      </tr>
      <tr>
        <td id="L1367" class="blob-num js-line-number" data-line-number="1367"></td>
        <td id="LC1367" class="blob-code js-file-line">        scope.<span class="no">rows</span> <span class="o">=</span> ctrl.<span class="nf">split</span>(years, <span class="m">5</span>);</td>
      </tr>
      <tr>
        <td id="L1368" class="blob-num js-line-number" data-line-number="1368"></td>
        <td id="LC1368" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1369" class="blob-num js-line-number" data-line-number="1369"></td>
        <td id="LC1369" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1370" class="blob-num js-line-number" data-line-number="1370"></td>
        <td id="LC1370" class="blob-code js-file-line">      <span class="no">ctrl</span>.<span class="nf">compare</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">date1</span>, <span class="nv">date2</span>) {</td>
      </tr>
      <tr>
        <td id="L1371" class="blob-num js-line-number" data-line-number="1371"></td>
        <td id="LC1371" class="blob-code js-file-line">        <span class="k">return</span> date1.<span class="nf">getFullYear</span>() <span class="o">-</span> date2.<span class="nf">getFullYear</span>();</td>
      </tr>
      <tr>
        <td id="L1372" class="blob-num js-line-number" data-line-number="1372"></td>
        <td id="LC1372" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1373" class="blob-num js-line-number" data-line-number="1373"></td>
        <td id="LC1373" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1374" class="blob-num js-line-number" data-line-number="1374"></td>
        <td id="LC1374" class="blob-code js-file-line">      <span class="no">ctrl</span>.<span class="nf">handleKeyDown</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">key</span>, <span class="nv">evt</span> ) {</td>
      </tr>
      <tr>
        <td id="L1375" class="blob-num js-line-number" data-line-number="1375"></td>
        <td id="LC1375" class="blob-code js-file-line">        <span class="k">var</span> date <span class="o">=</span> ctrl.activeDate.<span class="nf">getFullYear</span>();</td>
      </tr>
      <tr>
        <td id="L1376" class="blob-num js-line-number" data-line-number="1376"></td>
        <td id="LC1376" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1377" class="blob-num js-line-number" data-line-number="1377"></td>
        <td id="LC1377" class="blob-code js-file-line">        <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'left'</span>) {</td>
      </tr>
      <tr>
        <td id="L1378" class="blob-num js-line-number" data-line-number="1378"></td>
        <td id="LC1378" class="blob-code js-file-line">          date <span class="o">=</span> date <span class="o">-</span> <span class="m">1</span>;   <span class="c1">// up</span></td>
      </tr>
      <tr>
        <td id="L1379" class="blob-num js-line-number" data-line-number="1379"></td>
        <td id="LC1379" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'up'</span>) {</td>
      </tr>
      <tr>
        <td id="L1380" class="blob-num js-line-number" data-line-number="1380"></td>
        <td id="LC1380" class="blob-code js-file-line">          date <span class="o">=</span> date <span class="o">-</span> <span class="m">5</span>;   <span class="c1">// down</span></td>
      </tr>
      <tr>
        <td id="L1381" class="blob-num js-line-number" data-line-number="1381"></td>
        <td id="LC1381" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'right'</span>) {</td>
      </tr>
      <tr>
        <td id="L1382" class="blob-num js-line-number" data-line-number="1382"></td>
        <td id="LC1382" class="blob-code js-file-line">          date <span class="o">=</span> date <span class="o">+</span> <span class="m">1</span>;   <span class="c1">// down</span></td>
      </tr>
      <tr>
        <td id="L1383" class="blob-num js-line-number" data-line-number="1383"></td>
        <td id="LC1383" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'down'</span>) {</td>
      </tr>
      <tr>
        <td id="L1384" class="blob-num js-line-number" data-line-number="1384"></td>
        <td id="LC1384" class="blob-code js-file-line">          date <span class="o">=</span> date <span class="o">+</span> <span class="m">5</span>;</td>
      </tr>
      <tr>
        <td id="L1385" class="blob-num js-line-number" data-line-number="1385"></td>
        <td id="LC1385" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'pageup'</span> <span class="o">||</span> key <span class="o">===</span> <span class="s1">'pagedown'</span>) {</td>
      </tr>
      <tr>
        <td id="L1386" class="blob-num js-line-number" data-line-number="1386"></td>
        <td id="LC1386" class="blob-code js-file-line">          date <span class="o">+=</span> (key <span class="o">===</span> <span class="s1">'pageup'</span> <span class="o">?</span> <span class="o">-</span> <span class="m">1</span> <span class="o">:</span> <span class="m">1</span>) <span class="o">*</span> ctrl.step.years;</td>
      </tr>
      <tr>
        <td id="L1387" class="blob-num js-line-number" data-line-number="1387"></td>
        <td id="LC1387" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'home'</span>) {</td>
      </tr>
      <tr>
        <td id="L1388" class="blob-num js-line-number" data-line-number="1388"></td>
        <td id="LC1388" class="blob-code js-file-line">          date <span class="o">=</span> getStartingYear( ctrl.activeDate.<span class="nf">getFullYear</span>() );</td>
      </tr>
      <tr>
        <td id="L1389" class="blob-num js-line-number" data-line-number="1389"></td>
        <td id="LC1389" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (key <span class="o">===</span> <span class="s1">'end'</span>) {</td>
      </tr>
      <tr>
        <td id="L1390" class="blob-num js-line-number" data-line-number="1390"></td>
        <td id="LC1390" class="blob-code js-file-line">          date <span class="o">=</span> getStartingYear( ctrl.activeDate.<span class="nf">getFullYear</span>() ) <span class="o">+</span> range <span class="o">-</span> <span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L1391" class="blob-num js-line-number" data-line-number="1391"></td>
        <td id="LC1391" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1392" class="blob-num js-line-number" data-line-number="1392"></td>
        <td id="LC1392" class="blob-code js-file-line">        ctrl.activeDate.<span class="nf">setFullYear</span>(date);</td>
      </tr>
      <tr>
        <td id="L1393" class="blob-num js-line-number" data-line-number="1393"></td>
        <td id="LC1393" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1394" class="blob-num js-line-number" data-line-number="1394"></td>
        <td id="LC1394" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1395" class="blob-num js-line-number" data-line-number="1395"></td>
        <td id="LC1395" class="blob-code js-file-line">      ctrl.refreshView();</td>
      </tr>
      <tr>
        <td id="L1396" class="blob-num js-line-number" data-line-number="1396"></td>
        <td id="LC1396" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1397" class="blob-num js-line-number" data-line-number="1397"></td>
        <td id="LC1397" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1398" class="blob-num js-line-number" data-line-number="1398"></td>
        <td id="LC1398" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L1399" class="blob-num js-line-number" data-line-number="1399"></td>
        <td id="LC1399" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1400" class="blob-num js-line-number" data-line-number="1400"></td>
        <td id="LC1400" class="blob-code js-file-line">.constant(<span class="s1">'datepickerPopupConfig'</span>, {</td>
      </tr>
      <tr>
        <td id="L1401" class="blob-num js-line-number" data-line-number="1401"></td>
        <td id="LC1401" class="blob-code js-file-line">  datepickerPopup<span class="o">:</span> <span class="s1">'yyyy-MM-dd'</span>,</td>
      </tr>
      <tr>
        <td id="L1402" class="blob-num js-line-number" data-line-number="1402"></td>
        <td id="LC1402" class="blob-code js-file-line">  currentText<span class="o">:</span> <span class="s1">'Today'</span>,</td>
      </tr>
      <tr>
        <td id="L1403" class="blob-num js-line-number" data-line-number="1403"></td>
        <td id="LC1403" class="blob-code js-file-line">  clearText<span class="o">:</span> <span class="s1">'Clear'</span>,</td>
      </tr>
      <tr>
        <td id="L1404" class="blob-num js-line-number" data-line-number="1404"></td>
        <td id="LC1404" class="blob-code js-file-line">  closeText<span class="o">:</span> <span class="s1">'Done'</span>,</td>
      </tr>
      <tr>
        <td id="L1405" class="blob-num js-line-number" data-line-number="1405"></td>
        <td id="LC1405" class="blob-code js-file-line">  closeOnDateSelection<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L1406" class="blob-num js-line-number" data-line-number="1406"></td>
        <td id="LC1406" class="blob-code js-file-line">  appendToBody<span class="o">:</span> <span class="kc">false</span>,</td>
      </tr>
      <tr>
        <td id="L1407" class="blob-num js-line-number" data-line-number="1407"></td>
        <td id="LC1407" class="blob-code js-file-line">  showButtonBar<span class="o">:</span> <span class="kc">true</span></td>
      </tr>
      <tr>
        <td id="L1408" class="blob-num js-line-number" data-line-number="1408"></td>
        <td id="LC1408" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L1409" class="blob-num js-line-number" data-line-number="1409"></td>
        <td id="LC1409" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1410" class="blob-num js-line-number" data-line-number="1410"></td>
        <td id="LC1410" class="blob-code js-file-line">.directive(<span class="s1">'datepickerPopup'</span>, [<span class="s1">'$compile'</span>, <span class="s1">'$parse'</span>, <span class="s1">'$document'</span>, <span class="s1">'$position'</span>, <span class="s1">'dateFilter'</span>, <span class="s1">'dateParser'</span>, <span class="s1">'datepickerPopupConfig'</span>,</td>
      </tr>
      <tr>
        <td id="L1411" class="blob-num js-line-number" data-line-number="1411"></td>
        <td id="LC1411" class="blob-code js-file-line"><span class="kt">function</span> (<span class="nv">$compile</span>, <span class="nv">$parse</span>, <span class="nv">$document</span>, <span class="nv">$position</span>, <span class="nv">dateFilter</span>, <span class="nv">dateParser</span>, <span class="nv">datepickerPopupConfig</span>) {</td>
      </tr>
      <tr>
        <td id="L1412" class="blob-num js-line-number" data-line-number="1412"></td>
        <td id="LC1412" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L1413" class="blob-num js-line-number" data-line-number="1413"></td>
        <td id="LC1413" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L1414" class="blob-num js-line-number" data-line-number="1414"></td>
        <td id="LC1414" class="blob-code js-file-line">    require<span class="o">:</span> <span class="s1">'ngModel'</span>,</td>
      </tr>
      <tr>
        <td id="L1415" class="blob-num js-line-number" data-line-number="1415"></td>
        <td id="LC1415" class="blob-code js-file-line">    scope<span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L1416" class="blob-num js-line-number" data-line-number="1416"></td>
        <td id="LC1416" class="blob-code js-file-line">      isOpen<span class="o">:</span> <span class="s1">'=?'</span>,</td>
      </tr>
      <tr>
        <td id="L1417" class="blob-num js-line-number" data-line-number="1417"></td>
        <td id="LC1417" class="blob-code js-file-line">      currentText<span class="o">:</span> <span class="s1">'@'</span>,</td>
      </tr>
      <tr>
        <td id="L1418" class="blob-num js-line-number" data-line-number="1418"></td>
        <td id="LC1418" class="blob-code js-file-line">      clearText<span class="o">:</span> <span class="s1">'@'</span>,</td>
      </tr>
      <tr>
        <td id="L1419" class="blob-num js-line-number" data-line-number="1419"></td>
        <td id="LC1419" class="blob-code js-file-line">      closeText<span class="o">:</span> <span class="s1">'@'</span>,</td>
      </tr>
      <tr>
        <td id="L1420" class="blob-num js-line-number" data-line-number="1420"></td>
        <td id="LC1420" class="blob-code js-file-line">      dateDisabled<span class="o">:</span> <span class="s1">'&amp;'</span></td>
      </tr>
      <tr>
        <td id="L1421" class="blob-num js-line-number" data-line-number="1421"></td>
        <td id="LC1421" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1422" class="blob-num js-line-number" data-line-number="1422"></td>
        <td id="LC1422" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>, <span class="nv">ngModel</span>) {</td>
      </tr>
      <tr>
        <td id="L1423" class="blob-num js-line-number" data-line-number="1423"></td>
        <td id="LC1423" class="blob-code js-file-line">      <span class="k">var</span> dateFormat,</td>
      </tr>
      <tr>
        <td id="L1424" class="blob-num js-line-number" data-line-number="1424"></td>
        <td id="LC1424" class="blob-code js-file-line">          closeOnDateSelection <span class="o">=</span> angular.isDefined(attrs.closeOnDateSelection) <span class="o">?</span> scope.$parent.$<span class="nf">eval</span>(attrs.closeOnDateSelection) <span class="o">:</span> datepickerPopupConfig.closeOnDateSelection,</td>
      </tr>
      <tr>
        <td id="L1425" class="blob-num js-line-number" data-line-number="1425"></td>
        <td id="LC1425" class="blob-code js-file-line">          appendToBody <span class="o">=</span> angular.isDefined(attrs.datepickerAppendToBody) <span class="o">?</span> scope.$parent.$<span class="nf">eval</span>(attrs.datepickerAppendToBody) <span class="o">:</span> datepickerPopupConfig.appendToBody;</td>
      </tr>
      <tr>
        <td id="L1426" class="blob-num js-line-number" data-line-number="1426"></td>
        <td id="LC1426" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1427" class="blob-num js-line-number" data-line-number="1427"></td>
        <td id="LC1427" class="blob-code js-file-line">      scope.showButtonBar <span class="o">=</span> angular.isDefined(attrs.showButtonBar) <span class="o">?</span> scope.$parent.$<span class="nf">eval</span>(attrs.showButtonBar) <span class="o">:</span> datepickerPopupConfig.showButtonBar;</td>
      </tr>
      <tr>
        <td id="L1428" class="blob-num js-line-number" data-line-number="1428"></td>
        <td id="LC1428" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1429" class="blob-num js-line-number" data-line-number="1429"></td>
        <td id="LC1429" class="blob-code js-file-line">      <span class="no">scope</span>.<span class="nf">getText</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">key</span> ) {</td>
      </tr>
      <tr>
        <td id="L1430" class="blob-num js-line-number" data-line-number="1430"></td>
        <td id="LC1430" class="blob-code js-file-line">        <span class="k">return</span> scope[key <span class="o">+</span> <span class="s1">'Text'</span>] <span class="o">||</span> datepickerPopupConfig[key <span class="o">+</span> <span class="s1">'Text'</span>];</td>
      </tr>
      <tr>
        <td id="L1431" class="blob-num js-line-number" data-line-number="1431"></td>
        <td id="LC1431" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1432" class="blob-num js-line-number" data-line-number="1432"></td>
        <td id="LC1432" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1433" class="blob-num js-line-number" data-line-number="1433"></td>
        <td id="LC1433" class="blob-code js-file-line">      attrs.$observe(<span class="s1">'datepickerPopup'</span>, <span class="kt">function</span>(<span class="nv">value</span>) {</td>
      </tr>
      <tr>
        <td id="L1434" class="blob-num js-line-number" data-line-number="1434"></td>
        <td id="LC1434" class="blob-code js-file-line">          dateFormat <span class="o">=</span> value <span class="o">||</span> datepickerPopupConfig.datepickerPopup;</td>
      </tr>
      <tr>
        <td id="L1435" class="blob-num js-line-number" data-line-number="1435"></td>
        <td id="LC1435" class="blob-code js-file-line">          ngModel.$render();</td>
      </tr>
      <tr>
        <td id="L1436" class="blob-num js-line-number" data-line-number="1436"></td>
        <td id="LC1436" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1437" class="blob-num js-line-number" data-line-number="1437"></td>
        <td id="LC1437" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1438" class="blob-num js-line-number" data-line-number="1438"></td>
        <td id="LC1438" class="blob-code js-file-line">      <span class="c1">// popup element used to display calendar</span></td>
      </tr>
      <tr>
        <td id="L1439" class="blob-num js-line-number" data-line-number="1439"></td>
        <td id="LC1439" class="blob-code js-file-line">      <span class="k">var</span> popupEl <span class="o">=</span> angular.element(<span class="s1">'&lt;div datepicker-popup-wrap&gt;&lt;div datepicker&gt;&lt;/div&gt;&lt;/div&gt;'</span>);</td>
      </tr>
      <tr>
        <td id="L1440" class="blob-num js-line-number" data-line-number="1440"></td>
        <td id="LC1440" class="blob-code js-file-line">      popupEl.attr({</td>
      </tr>
      <tr>
        <td id="L1441" class="blob-num js-line-number" data-line-number="1441"></td>
        <td id="LC1441" class="blob-code js-file-line">        <span class="s1">'ng-model'</span><span class="o">:</span> <span class="s1">'date'</span>,</td>
      </tr>
      <tr>
        <td id="L1442" class="blob-num js-line-number" data-line-number="1442"></td>
        <td id="LC1442" class="blob-code js-file-line">        <span class="s1">'ng-change'</span><span class="o">:</span> <span class="s1">'dateSelection()'</span></td>
      </tr>
      <tr>
        <td id="L1443" class="blob-num js-line-number" data-line-number="1443"></td>
        <td id="LC1443" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1444" class="blob-num js-line-number" data-line-number="1444"></td>
        <td id="LC1444" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1445" class="blob-num js-line-number" data-line-number="1445"></td>
        <td id="LC1445" class="blob-code js-file-line">      <span class="kt">function</span> <span class="nf">cameltoDash</span>( <span class="nv">string</span> ){</td>
      </tr>
      <tr>
        <td id="L1446" class="blob-num js-line-number" data-line-number="1446"></td>
        <td id="LC1446" class="blob-code js-file-line">        <span class="k">return</span> string.<span class="nf">replace</span>(<span class="sr">/(<span class="no">[<span class="no">A-Z</span>]</span>)/g</span>, <span class="kt">function</span>(<span class="nv">$1</span>) { <span class="k">return</span> <span class="s1">'-'</span> <span class="o">+</span> $<span class="m">1</span>.<span class="nf">toLowerCase</span>(); });</td>
      </tr>
      <tr>
        <td id="L1447" class="blob-num js-line-number" data-line-number="1447"></td>
        <td id="LC1447" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1448" class="blob-num js-line-number" data-line-number="1448"></td>
        <td id="LC1448" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1449" class="blob-num js-line-number" data-line-number="1449"></td>
        <td id="LC1449" class="blob-code js-file-line">      <span class="c1">// datepicker element</span></td>
      </tr>
      <tr>
        <td id="L1450" class="blob-num js-line-number" data-line-number="1450"></td>
        <td id="LC1450" class="blob-code js-file-line">      <span class="k">var</span> datepickerEl <span class="o">=</span> angular.element(popupEl.children()[<span class="m">0</span>]);</td>
      </tr>
      <tr>
        <td id="L1451" class="blob-num js-line-number" data-line-number="1451"></td>
        <td id="LC1451" class="blob-code js-file-line">      <span class="k">if</span> ( attrs.datepickerOptions ) {</td>
      </tr>
      <tr>
        <td id="L1452" class="blob-num js-line-number" data-line-number="1452"></td>
        <td id="LC1452" class="blob-code js-file-line">        angular.forEach(scope.$parent.$<span class="nf">eval</span>(attrs.datepickerOptions), <span class="kt">function</span>( <span class="nv">value</span>, <span class="nv">option</span> ) {</td>
      </tr>
      <tr>
        <td id="L1453" class="blob-num js-line-number" data-line-number="1453"></td>
        <td id="LC1453" class="blob-code js-file-line">          datepickerEl.attr( cameltoDash(option), value );</td>
      </tr>
      <tr>
        <td id="L1454" class="blob-num js-line-number" data-line-number="1454"></td>
        <td id="LC1454" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L1455" class="blob-num js-line-number" data-line-number="1455"></td>
        <td id="LC1455" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1456" class="blob-num js-line-number" data-line-number="1456"></td>
        <td id="LC1456" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1457" class="blob-num js-line-number" data-line-number="1457"></td>
        <td id="LC1457" class="blob-code js-file-line">      angular.forEach([<span class="s1">'minDate'</span>, <span class="s1">'maxDate'</span>], <span class="kt">function</span>( <span class="nv">key</span> ) {</td>
      </tr>
      <tr>
        <td id="L1458" class="blob-num js-line-number" data-line-number="1458"></td>
        <td id="LC1458" class="blob-code js-file-line">        <span class="k">if</span> ( attrs[key] ) {</td>
      </tr>
      <tr>
        <td id="L1459" class="blob-num js-line-number" data-line-number="1459"></td>
        <td id="LC1459" class="blob-code js-file-line">          scope.$parent.$<span class="nf">watch</span>($<span class="nf">parse</span>(attrs[key]), <span class="kt">function</span>(<span class="nv">value</span>){</td>
      </tr>
      <tr>
        <td id="L1460" class="blob-num js-line-number" data-line-number="1460"></td>
        <td id="LC1460" class="blob-code js-file-line">            scope[key] <span class="o">=</span> value;</td>
      </tr>
      <tr>
        <td id="L1461" class="blob-num js-line-number" data-line-number="1461"></td>
        <td id="LC1461" class="blob-code js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L1462" class="blob-num js-line-number" data-line-number="1462"></td>
        <td id="LC1462" class="blob-code js-file-line">          datepickerEl.attr(cameltoDash(key), key);</td>
      </tr>
      <tr>
        <td id="L1463" class="blob-num js-line-number" data-line-number="1463"></td>
        <td id="LC1463" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1464" class="blob-num js-line-number" data-line-number="1464"></td>
        <td id="LC1464" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1465" class="blob-num js-line-number" data-line-number="1465"></td>
        <td id="LC1465" class="blob-code js-file-line">      <span class="k">if</span> (attrs.dateDisabled) {</td>
      </tr>
      <tr>
        <td id="L1466" class="blob-num js-line-number" data-line-number="1466"></td>
        <td id="LC1466" class="blob-code js-file-line">        datepickerEl.attr(<span class="s1">'date-disabled'</span>, <span class="s1">'dateDisabled({ date: date, mode: mode })'</span>);</td>
      </tr>
      <tr>
        <td id="L1467" class="blob-num js-line-number" data-line-number="1467"></td>
        <td id="LC1467" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1468" class="blob-num js-line-number" data-line-number="1468"></td>
        <td id="LC1468" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1469" class="blob-num js-line-number" data-line-number="1469"></td>
        <td id="LC1469" class="blob-code js-file-line">      <span class="kt">function</span> <span class="nf">parseDate</span>(<span class="nv">viewValue</span>) {</td>
      </tr>
      <tr>
        <td id="L1470" class="blob-num js-line-number" data-line-number="1470"></td>
        <td id="LC1470" class="blob-code js-file-line">        <span class="k">if</span> (<span class="o">!</span>viewValue) {</td>
      </tr>
      <tr>
        <td id="L1471" class="blob-num js-line-number" data-line-number="1471"></td>
        <td id="LC1471" class="blob-code js-file-line">          ngModel.$setValidity(<span class="s1">'date'</span>, <span class="kc">true</span>);</td>
      </tr>
      <tr>
        <td id="L1472" class="blob-num js-line-number" data-line-number="1472"></td>
        <td id="LC1472" class="blob-code js-file-line">          <span class="k">return</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L1473" class="blob-num js-line-number" data-line-number="1473"></td>
        <td id="LC1473" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (angular.isDate(viewValue) <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nf">isNaN</span>(viewValue)) {</td>
      </tr>
      <tr>
        <td id="L1474" class="blob-num js-line-number" data-line-number="1474"></td>
        <td id="LC1474" class="blob-code js-file-line">          ngModel.$setValidity(<span class="s1">'date'</span>, <span class="kc">true</span>);</td>
      </tr>
      <tr>
        <td id="L1475" class="blob-num js-line-number" data-line-number="1475"></td>
        <td id="LC1475" class="blob-code js-file-line">          <span class="k">return</span> viewValue;</td>
      </tr>
      <tr>
        <td id="L1476" class="blob-num js-line-number" data-line-number="1476"></td>
        <td id="LC1476" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (angular.isString(viewValue)) {</td>
      </tr>
      <tr>
        <td id="L1477" class="blob-num js-line-number" data-line-number="1477"></td>
        <td id="LC1477" class="blob-code js-file-line">          <span class="k">var</span> date <span class="o">=</span> dateParser.<span class="nf">parse</span>(viewValue, dateFormat) <span class="o">||</span> <span class="o">new</span> <span class="nc">Date</span>(viewValue);</td>
      </tr>
      <tr>
        <td id="L1478" class="blob-num js-line-number" data-line-number="1478"></td>
        <td id="LC1478" class="blob-code js-file-line">          <span class="k">if</span> (<span class="nf">isNaN</span>(date)) {</td>
      </tr>
      <tr>
        <td id="L1479" class="blob-num js-line-number" data-line-number="1479"></td>
        <td id="LC1479" class="blob-code js-file-line">            ngModel.$setValidity(<span class="s1">'date'</span>, <span class="kc">false</span>);</td>
      </tr>
      <tr>
        <td id="L1480" class="blob-num js-line-number" data-line-number="1480"></td>
        <td id="LC1480" class="blob-code js-file-line">            <span class="k">return</span> <span class="kc">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L1481" class="blob-num js-line-number" data-line-number="1481"></td>
        <td id="LC1481" class="blob-code js-file-line">          } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1482" class="blob-num js-line-number" data-line-number="1482"></td>
        <td id="LC1482" class="blob-code js-file-line">            ngModel.$setValidity(<span class="s1">'date'</span>, <span class="kc">true</span>);</td>
      </tr>
      <tr>
        <td id="L1483" class="blob-num js-line-number" data-line-number="1483"></td>
        <td id="LC1483" class="blob-code js-file-line">            <span class="k">return</span> date;</td>
      </tr>
      <tr>
        <td id="L1484" class="blob-num js-line-number" data-line-number="1484"></td>
        <td id="LC1484" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1485" class="blob-num js-line-number" data-line-number="1485"></td>
        <td id="LC1485" class="blob-code js-file-line">        } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1486" class="blob-num js-line-number" data-line-number="1486"></td>
        <td id="LC1486" class="blob-code js-file-line">          ngModel.$setValidity(<span class="s1">'date'</span>, <span class="kc">false</span>);</td>
      </tr>
      <tr>
        <td id="L1487" class="blob-num js-line-number" data-line-number="1487"></td>
        <td id="LC1487" class="blob-code js-file-line">          <span class="k">return</span> <span class="kc">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L1488" class="blob-num js-line-number" data-line-number="1488"></td>
        <td id="LC1488" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1489" class="blob-num js-line-number" data-line-number="1489"></td>
        <td id="LC1489" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1490" class="blob-num js-line-number" data-line-number="1490"></td>
        <td id="LC1490" class="blob-code js-file-line">      ngModel.$parsers.<span class="nf">unshift</span>(parseDate);</td>
      </tr>
      <tr>
        <td id="L1491" class="blob-num js-line-number" data-line-number="1491"></td>
        <td id="LC1491" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1492" class="blob-num js-line-number" data-line-number="1492"></td>
        <td id="LC1492" class="blob-code js-file-line">      <span class="c1">// Inner change</span></td>
      </tr>
      <tr>
        <td id="L1493" class="blob-num js-line-number" data-line-number="1493"></td>
        <td id="LC1493" class="blob-code js-file-line">      <span class="no">scope</span>.<span class="nf">dateSelection</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">dt</span>) {</td>
      </tr>
      <tr>
        <td id="L1494" class="blob-num js-line-number" data-line-number="1494"></td>
        <td id="LC1494" class="blob-code js-file-line">        <span class="k">if</span> (angular.isDefined(dt)) {</td>
      </tr>
      <tr>
        <td id="L1495" class="blob-num js-line-number" data-line-number="1495"></td>
        <td id="LC1495" class="blob-code js-file-line">          scope.date <span class="o">=</span> dt;</td>
      </tr>
      <tr>
        <td id="L1496" class="blob-num js-line-number" data-line-number="1496"></td>
        <td id="LC1496" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1497" class="blob-num js-line-number" data-line-number="1497"></td>
        <td id="LC1497" class="blob-code js-file-line">        ngModel.$setViewValue(scope.date);</td>
      </tr>
      <tr>
        <td id="L1498" class="blob-num js-line-number" data-line-number="1498"></td>
        <td id="LC1498" class="blob-code js-file-line">        ngModel.$render();</td>
      </tr>
      <tr>
        <td id="L1499" class="blob-num js-line-number" data-line-number="1499"></td>
        <td id="LC1499" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1500" class="blob-num js-line-number" data-line-number="1500"></td>
        <td id="LC1500" class="blob-code js-file-line">        <span class="k">if</span> ( closeOnDateSelection ) {</td>
      </tr>
      <tr>
        <td id="L1501" class="blob-num js-line-number" data-line-number="1501"></td>
        <td id="LC1501" class="blob-code js-file-line">          scope.isOpen <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L1502" class="blob-num js-line-number" data-line-number="1502"></td>
        <td id="LC1502" class="blob-code js-file-line">          element[<span class="m">0</span>].<span class="nf">focus</span>();</td>
      </tr>
      <tr>
        <td id="L1503" class="blob-num js-line-number" data-line-number="1503"></td>
        <td id="LC1503" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1504" class="blob-num js-line-number" data-line-number="1504"></td>
        <td id="LC1504" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1505" class="blob-num js-line-number" data-line-number="1505"></td>
        <td id="LC1505" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1506" class="blob-num js-line-number" data-line-number="1506"></td>
        <td id="LC1506" class="blob-code js-file-line">      element.bind(<span class="s1">'input change keyup'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1507" class="blob-num js-line-number" data-line-number="1507"></td>
        <td id="LC1507" class="blob-code js-file-line">        scope.$<span class="nf">apply</span>(<span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1508" class="blob-num js-line-number" data-line-number="1508"></td>
        <td id="LC1508" class="blob-code js-file-line">          scope.date <span class="o">=</span> ngModel.$modelValue;</td>
      </tr>
      <tr>
        <td id="L1509" class="blob-num js-line-number" data-line-number="1509"></td>
        <td id="LC1509" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L1510" class="blob-num js-line-number" data-line-number="1510"></td>
        <td id="LC1510" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1511" class="blob-num js-line-number" data-line-number="1511"></td>
        <td id="LC1511" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1512" class="blob-num js-line-number" data-line-number="1512"></td>
        <td id="LC1512" class="blob-code js-file-line">      <span class="c1">// Outter change</span></td>
      </tr>
      <tr>
        <td id="L1513" class="blob-num js-line-number" data-line-number="1513"></td>
        <td id="LC1513" class="blob-code js-file-line">      <span class="no">ngModel</span>.<span class="nf">$render</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1514" class="blob-num js-line-number" data-line-number="1514"></td>
        <td id="LC1514" class="blob-code js-file-line">        <span class="k">var</span> date <span class="o">=</span> ngModel.$viewValue <span class="o">?</span> dateFilter(ngModel.$viewValue, dateFormat) <span class="o">:</span> <span class="s1">''</span>;</td>
      </tr>
      <tr>
        <td id="L1515" class="blob-num js-line-number" data-line-number="1515"></td>
        <td id="LC1515" class="blob-code js-file-line">        element.val(date);</td>
      </tr>
      <tr>
        <td id="L1516" class="blob-num js-line-number" data-line-number="1516"></td>
        <td id="LC1516" class="blob-code js-file-line">        scope.date <span class="o">=</span> parseDate( ngModel.$modelValue );</td>
      </tr>
      <tr>
        <td id="L1517" class="blob-num js-line-number" data-line-number="1517"></td>
        <td id="LC1517" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1518" class="blob-num js-line-number" data-line-number="1518"></td>
        <td id="LC1518" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1519" class="blob-num js-line-number" data-line-number="1519"></td>
        <td id="LC1519" class="blob-code js-file-line">      <span class="k">var</span> <span class="nf">documentClickBind</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">event</span>) {</td>
      </tr>
      <tr>
        <td id="L1520" class="blob-num js-line-number" data-line-number="1520"></td>
        <td id="LC1520" class="blob-code js-file-line">        <span class="k">if</span> (scope.isOpen <span class="o">&amp;&amp;</span> <span class="no">event</span>.<span class="no">target</span> <span class="o">!==</span> element[<span class="m">0</span>]) {</td>
      </tr>
      <tr>
        <td id="L1521" class="blob-num js-line-number" data-line-number="1521"></td>
        <td id="LC1521" class="blob-code js-file-line">          scope.$<span class="nf">apply</span>(<span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1522" class="blob-num js-line-number" data-line-number="1522"></td>
        <td id="LC1522" class="blob-code js-file-line">            scope.isOpen <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L1523" class="blob-num js-line-number" data-line-number="1523"></td>
        <td id="LC1523" class="blob-code js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L1524" class="blob-num js-line-number" data-line-number="1524"></td>
        <td id="LC1524" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1525" class="blob-num js-line-number" data-line-number="1525"></td>
        <td id="LC1525" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1526" class="blob-num js-line-number" data-line-number="1526"></td>
        <td id="LC1526" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1527" class="blob-num js-line-number" data-line-number="1527"></td>
        <td id="LC1527" class="blob-code js-file-line">      <span class="k">var</span> <span class="nf">keydown</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">evt</span>, <span class="nv">noApply</span>) {</td>
      </tr>
      <tr>
        <td id="L1528" class="blob-num js-line-number" data-line-number="1528"></td>
        <td id="LC1528" class="blob-code js-file-line">        scope.keydown(evt);</td>
      </tr>
      <tr>
        <td id="L1529" class="blob-num js-line-number" data-line-number="1529"></td>
        <td id="LC1529" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1530" class="blob-num js-line-number" data-line-number="1530"></td>
        <td id="LC1530" class="blob-code js-file-line">      element.bind(<span class="s1">'keydown'</span>, keydown);</td>
      </tr>
      <tr>
        <td id="L1531" class="blob-num js-line-number" data-line-number="1531"></td>
        <td id="LC1531" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1532" class="blob-num js-line-number" data-line-number="1532"></td>
        <td id="LC1532" class="blob-code js-file-line">      <span class="no">scope</span>.<span class="nf">keydown</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">evt</span>) {</td>
      </tr>
      <tr>
        <td id="L1533" class="blob-num js-line-number" data-line-number="1533"></td>
        <td id="LC1533" class="blob-code js-file-line">        <span class="k">if</span> (evt.which <span class="o">===</span> <span class="m">27</span>) {</td>
      </tr>
      <tr>
        <td id="L1534" class="blob-num js-line-number" data-line-number="1534"></td>
        <td id="LC1534" class="blob-code js-file-line">          evt.preventDefault();</td>
      </tr>
      <tr>
        <td id="L1535" class="blob-num js-line-number" data-line-number="1535"></td>
        <td id="LC1535" class="blob-code js-file-line">          evt.stopPropagation();</td>
      </tr>
      <tr>
        <td id="L1536" class="blob-num js-line-number" data-line-number="1536"></td>
        <td id="LC1536" class="blob-code js-file-line">          scope.<span class="nf">close</span>();</td>
      </tr>
      <tr>
        <td id="L1537" class="blob-num js-line-number" data-line-number="1537"></td>
        <td id="LC1537" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (evt.which <span class="o">===</span> <span class="m">40</span> <span class="o">&amp;&amp;</span> <span class="o">!</span>scope.isOpen) {</td>
      </tr>
      <tr>
        <td id="L1538" class="blob-num js-line-number" data-line-number="1538"></td>
        <td id="LC1538" class="blob-code js-file-line">          scope.isOpen <span class="o">=</span> <span class="kc">true</span>;</td>
      </tr>
      <tr>
        <td id="L1539" class="blob-num js-line-number" data-line-number="1539"></td>
        <td id="LC1539" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1540" class="blob-num js-line-number" data-line-number="1540"></td>
        <td id="LC1540" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1541" class="blob-num js-line-number" data-line-number="1541"></td>
        <td id="LC1541" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1542" class="blob-num js-line-number" data-line-number="1542"></td>
        <td id="LC1542" class="blob-code js-file-line">      scope.$<span class="nf">watch</span>(<span class="s1">'isOpen'</span>, <span class="kt">function</span>(<span class="nv">value</span>) {</td>
      </tr>
      <tr>
        <td id="L1543" class="blob-num js-line-number" data-line-number="1543"></td>
        <td id="LC1543" class="blob-code js-file-line">        <span class="k">if</span> (value) {</td>
      </tr>
      <tr>
        <td id="L1544" class="blob-num js-line-number" data-line-number="1544"></td>
        <td id="LC1544" class="blob-code js-file-line">          scope.$broadcast(<span class="s1">'datepicker.focus'</span>);</td>
      </tr>
      <tr>
        <td id="L1545" class="blob-num js-line-number" data-line-number="1545"></td>
        <td id="LC1545" class="blob-code js-file-line">          scope.position <span class="o">=</span> appendToBody <span class="o">?</span> $position.offset(element) <span class="o">:</span> $position.position(element);</td>
      </tr>
      <tr>
        <td id="L1546" class="blob-num js-line-number" data-line-number="1546"></td>
        <td id="LC1546" class="blob-code js-file-line">          scope.position.<span class="no">top</span> <span class="o">=</span> scope.position.<span class="no">top</span> <span class="o">+</span> element.prop(<span class="s1">'offsetHeight'</span>);</td>
      </tr>
      <tr>
        <td id="L1547" class="blob-num js-line-number" data-line-number="1547"></td>
        <td id="LC1547" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1548" class="blob-num js-line-number" data-line-number="1548"></td>
        <td id="LC1548" class="blob-code js-file-line">          $<span class="no">document</span>.bind(<span class="s1">'click'</span>, documentClickBind);</td>
      </tr>
      <tr>
        <td id="L1549" class="blob-num js-line-number" data-line-number="1549"></td>
        <td id="LC1549" class="blob-code js-file-line">        } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1550" class="blob-num js-line-number" data-line-number="1550"></td>
        <td id="LC1550" class="blob-code js-file-line">          $<span class="no">document</span>.unbind(<span class="s1">'click'</span>, documentClickBind);</td>
      </tr>
      <tr>
        <td id="L1551" class="blob-num js-line-number" data-line-number="1551"></td>
        <td id="LC1551" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1552" class="blob-num js-line-number" data-line-number="1552"></td>
        <td id="LC1552" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1553" class="blob-num js-line-number" data-line-number="1553"></td>
        <td id="LC1553" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1554" class="blob-num js-line-number" data-line-number="1554"></td>
        <td id="LC1554" class="blob-code js-file-line">      <span class="no">scope</span>.<span class="nf">select</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">date</span> ) {</td>
      </tr>
      <tr>
        <td id="L1555" class="blob-num js-line-number" data-line-number="1555"></td>
        <td id="LC1555" class="blob-code js-file-line">        <span class="k">if</span> (date <span class="o">===</span> <span class="s1">'today'</span>) {</td>
      </tr>
      <tr>
        <td id="L1556" class="blob-num js-line-number" data-line-number="1556"></td>
        <td id="LC1556" class="blob-code js-file-line">          <span class="k">var</span> today <span class="o">=</span> <span class="o">new</span> <span class="nc">Date</span>();</td>
      </tr>
      <tr>
        <td id="L1557" class="blob-num js-line-number" data-line-number="1557"></td>
        <td id="LC1557" class="blob-code js-file-line">          <span class="k">if</span> (angular.isDate(ngModel.$modelValue)) {</td>
      </tr>
      <tr>
        <td id="L1558" class="blob-num js-line-number" data-line-number="1558"></td>
        <td id="LC1558" class="blob-code js-file-line">            date <span class="o">=</span> <span class="o">new</span> <span class="nc">Date</span>(ngModel.$modelValue);</td>
      </tr>
      <tr>
        <td id="L1559" class="blob-num js-line-number" data-line-number="1559"></td>
        <td id="LC1559" class="blob-code js-file-line">            date.<span class="nf">setFullYear</span>(today.<span class="nf">getFullYear</span>(), today.<span class="nf">getMonth</span>(), today.<span class="nf">getDate</span>());</td>
      </tr>
      <tr>
        <td id="L1560" class="blob-num js-line-number" data-line-number="1560"></td>
        <td id="LC1560" class="blob-code js-file-line">          } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1561" class="blob-num js-line-number" data-line-number="1561"></td>
        <td id="LC1561" class="blob-code js-file-line">            date <span class="o">=</span> <span class="o">new</span> <span class="nc">Date</span>(today.<span class="nf">setHours</span>(<span class="m">0</span>, <span class="m">0</span>, <span class="m">0</span>, <span class="m">0</span>));</td>
      </tr>
      <tr>
        <td id="L1562" class="blob-num js-line-number" data-line-number="1562"></td>
        <td id="LC1562" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1563" class="blob-num js-line-number" data-line-number="1563"></td>
        <td id="LC1563" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1564" class="blob-num js-line-number" data-line-number="1564"></td>
        <td id="LC1564" class="blob-code js-file-line">        scope.dateSelection( date );</td>
      </tr>
      <tr>
        <td id="L1565" class="blob-num js-line-number" data-line-number="1565"></td>
        <td id="LC1565" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1566" class="blob-num js-line-number" data-line-number="1566"></td>
        <td id="LC1566" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1567" class="blob-num js-line-number" data-line-number="1567"></td>
        <td id="LC1567" class="blob-code js-file-line">      <span class="no">scope</span>.<span class="nf">close</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1568" class="blob-num js-line-number" data-line-number="1568"></td>
        <td id="LC1568" class="blob-code js-file-line">        scope.isOpen <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L1569" class="blob-num js-line-number" data-line-number="1569"></td>
        <td id="LC1569" class="blob-code js-file-line">        element[<span class="m">0</span>].<span class="nf">focus</span>();</td>
      </tr>
      <tr>
        <td id="L1570" class="blob-num js-line-number" data-line-number="1570"></td>
        <td id="LC1570" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1571" class="blob-num js-line-number" data-line-number="1571"></td>
        <td id="LC1571" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1572" class="blob-num js-line-number" data-line-number="1572"></td>
        <td id="LC1572" class="blob-code js-file-line">      <span class="k">var</span> $popup <span class="o">=</span> $<span class="nf">compile</span>(popupEl)(scope);</td>
      </tr>
      <tr>
        <td id="L1573" class="blob-num js-line-number" data-line-number="1573"></td>
        <td id="LC1573" class="blob-code js-file-line">      <span class="k">if</span> ( appendToBody ) {</td>
      </tr>
      <tr>
        <td id="L1574" class="blob-num js-line-number" data-line-number="1574"></td>
        <td id="LC1574" class="blob-code js-file-line">        $<span class="no">document</span>.<span class="nf">find</span>(<span class="s1">'body'</span>).append($popup);</td>
      </tr>
      <tr>
        <td id="L1575" class="blob-num js-line-number" data-line-number="1575"></td>
        <td id="LC1575" class="blob-code js-file-line">      } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1576" class="blob-num js-line-number" data-line-number="1576"></td>
        <td id="LC1576" class="blob-code js-file-line">        element.after($popup);</td>
      </tr>
      <tr>
        <td id="L1577" class="blob-num js-line-number" data-line-number="1577"></td>
        <td id="LC1577" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1578" class="blob-num js-line-number" data-line-number="1578"></td>
        <td id="LC1578" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1579" class="blob-num js-line-number" data-line-number="1579"></td>
        <td id="LC1579" class="blob-code js-file-line">      scope.$on(<span class="s1">'$destroy'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1580" class="blob-num js-line-number" data-line-number="1580"></td>
        <td id="LC1580" class="blob-code js-file-line">        $popup.<span class="nf">remove</span>();</td>
      </tr>
      <tr>
        <td id="L1581" class="blob-num js-line-number" data-line-number="1581"></td>
        <td id="LC1581" class="blob-code js-file-line">        element.unbind(<span class="s1">'keydown'</span>, keydown);</td>
      </tr>
      <tr>
        <td id="L1582" class="blob-num js-line-number" data-line-number="1582"></td>
        <td id="LC1582" class="blob-code js-file-line">        $<span class="no">document</span>.unbind(<span class="s1">'click'</span>, documentClickBind);</td>
      </tr>
      <tr>
        <td id="L1583" class="blob-num js-line-number" data-line-number="1583"></td>
        <td id="LC1583" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1584" class="blob-num js-line-number" data-line-number="1584"></td>
        <td id="LC1584" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1585" class="blob-num js-line-number" data-line-number="1585"></td>
        <td id="LC1585" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1586" class="blob-num js-line-number" data-line-number="1586"></td>
        <td id="LC1586" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L1587" class="blob-num js-line-number" data-line-number="1587"></td>
        <td id="LC1587" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1588" class="blob-num js-line-number" data-line-number="1588"></td>
        <td id="LC1588" class="blob-code js-file-line">.directive(<span class="s1">'datepickerPopupWrap'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1589" class="blob-num js-line-number" data-line-number="1589"></td>
        <td id="LC1589" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L1590" class="blob-num js-line-number" data-line-number="1590"></td>
        <td id="LC1590" class="blob-code js-file-line">    restrict<span class="o">:</span><span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L1591" class="blob-num js-line-number" data-line-number="1591"></td>
        <td id="LC1591" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L1592" class="blob-num js-line-number" data-line-number="1592"></td>
        <td id="LC1592" class="blob-code js-file-line">    transclude<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L1593" class="blob-num js-line-number" data-line-number="1593"></td>
        <td id="LC1593" class="blob-code js-file-line">    templateUrl<span class="o">:</span> <span class="s1">'template/datepicker/popup.html'</span>,</td>
      </tr>
      <tr>
        <td id="L1594" class="blob-num js-line-number" data-line-number="1594"></td>
        <td id="LC1594" class="blob-code js-file-line">    <span class="nf">link</span>:<span class="kt">function</span> (<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>) {</td>
      </tr>
      <tr>
        <td id="L1595" class="blob-num js-line-number" data-line-number="1595"></td>
        <td id="LC1595" class="blob-code js-file-line">      element.bind(<span class="s1">'click'</span>, <span class="kt">function</span>(<span class="nv">event</span>) {</td>
      </tr>
      <tr>
        <td id="L1596" class="blob-num js-line-number" data-line-number="1596"></td>
        <td id="LC1596" class="blob-code js-file-line">        <span class="no">event</span>.preventDefault();</td>
      </tr>
      <tr>
        <td id="L1597" class="blob-num js-line-number" data-line-number="1597"></td>
        <td id="LC1597" class="blob-code js-file-line">        <span class="no">event</span>.stopPropagation();</td>
      </tr>
      <tr>
        <td id="L1598" class="blob-num js-line-number" data-line-number="1598"></td>
        <td id="LC1598" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1599" class="blob-num js-line-number" data-line-number="1599"></td>
        <td id="LC1599" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1600" class="blob-num js-line-number" data-line-number="1600"></td>
        <td id="LC1600" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1601" class="blob-num js-line-number" data-line-number="1601"></td>
        <td id="LC1601" class="blob-code js-file-line">});</td>
      </tr>
      <tr>
        <td id="L1602" class="blob-num js-line-number" data-line-number="1602"></td>
        <td id="LC1602" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1603" class="blob-num js-line-number" data-line-number="1603"></td>
        <td id="LC1603" class="blob-code js-file-line">angular.module(<span class="s1">'ui.bootstrap.dropdown'</span>, [])</td>
      </tr>
      <tr>
        <td id="L1604" class="blob-num js-line-number" data-line-number="1604"></td>
        <td id="LC1604" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1605" class="blob-num js-line-number" data-line-number="1605"></td>
        <td id="LC1605" class="blob-code js-file-line">.constant(<span class="s1">'dropdownConfig'</span>, {</td>
      </tr>
      <tr>
        <td id="L1606" class="blob-num js-line-number" data-line-number="1606"></td>
        <td id="LC1606" class="blob-code js-file-line">  openClass<span class="o">:</span> <span class="s1">'open'</span></td>
      </tr>
      <tr>
        <td id="L1607" class="blob-num js-line-number" data-line-number="1607"></td>
        <td id="LC1607" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L1608" class="blob-num js-line-number" data-line-number="1608"></td>
        <td id="LC1608" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1609" class="blob-num js-line-number" data-line-number="1609"></td>
        <td id="LC1609" class="blob-code js-file-line">.service(<span class="s1">'dropdownService'</span>, [<span class="s1">'$document'</span>, <span class="kt">function</span>(<span class="nv">$document</span>) {</td>
      </tr>
      <tr>
        <td id="L1610" class="blob-num js-line-number" data-line-number="1610"></td>
        <td id="LC1610" class="blob-code js-file-line">  <span class="k">var</span> openScope <span class="o">=</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L1611" class="blob-num js-line-number" data-line-number="1611"></td>
        <td id="LC1611" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1612" class="blob-num js-line-number" data-line-number="1612"></td>
        <td id="LC1612" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">open</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">dropdownScope</span> ) {</td>
      </tr>
      <tr>
        <td id="L1613" class="blob-num js-line-number" data-line-number="1613"></td>
        <td id="LC1613" class="blob-code js-file-line">    <span class="k">if</span> ( <span class="o">!</span>openScope ) {</td>
      </tr>
      <tr>
        <td id="L1614" class="blob-num js-line-number" data-line-number="1614"></td>
        <td id="LC1614" class="blob-code js-file-line">      $<span class="no">document</span>.bind(<span class="s1">'click'</span>, closeDropdown);</td>
      </tr>
      <tr>
        <td id="L1615" class="blob-num js-line-number" data-line-number="1615"></td>
        <td id="LC1615" class="blob-code js-file-line">      $<span class="no">document</span>.bind(<span class="s1">'keydown'</span>, escapeKeyBind);</td>
      </tr>
      <tr>
        <td id="L1616" class="blob-num js-line-number" data-line-number="1616"></td>
        <td id="LC1616" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1617" class="blob-num js-line-number" data-line-number="1617"></td>
        <td id="LC1617" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1618" class="blob-num js-line-number" data-line-number="1618"></td>
        <td id="LC1618" class="blob-code js-file-line">    <span class="k">if</span> ( openScope <span class="o">&amp;&amp;</span> openScope <span class="o">!==</span> dropdownScope ) {</td>
      </tr>
      <tr>
        <td id="L1619" class="blob-num js-line-number" data-line-number="1619"></td>
        <td id="LC1619" class="blob-code js-file-line">        openScope.isOpen <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L1620" class="blob-num js-line-number" data-line-number="1620"></td>
        <td id="LC1620" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1621" class="blob-num js-line-number" data-line-number="1621"></td>
        <td id="LC1621" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1622" class="blob-num js-line-number" data-line-number="1622"></td>
        <td id="LC1622" class="blob-code js-file-line">    openScope <span class="o">=</span> dropdownScope;</td>
      </tr>
      <tr>
        <td id="L1623" class="blob-num js-line-number" data-line-number="1623"></td>
        <td id="LC1623" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1624" class="blob-num js-line-number" data-line-number="1624"></td>
        <td id="LC1624" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1625" class="blob-num js-line-number" data-line-number="1625"></td>
        <td id="LC1625" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">close</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">dropdownScope</span> ) {</td>
      </tr>
      <tr>
        <td id="L1626" class="blob-num js-line-number" data-line-number="1626"></td>
        <td id="LC1626" class="blob-code js-file-line">    <span class="k">if</span> ( openScope <span class="o">===</span> dropdownScope ) {</td>
      </tr>
      <tr>
        <td id="L1627" class="blob-num js-line-number" data-line-number="1627"></td>
        <td id="LC1627" class="blob-code js-file-line">      openScope <span class="o">=</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L1628" class="blob-num js-line-number" data-line-number="1628"></td>
        <td id="LC1628" class="blob-code js-file-line">      $<span class="no">document</span>.unbind(<span class="s1">'click'</span>, closeDropdown);</td>
      </tr>
      <tr>
        <td id="L1629" class="blob-num js-line-number" data-line-number="1629"></td>
        <td id="LC1629" class="blob-code js-file-line">      $<span class="no">document</span>.unbind(<span class="s1">'keydown'</span>, escapeKeyBind);</td>
      </tr>
      <tr>
        <td id="L1630" class="blob-num js-line-number" data-line-number="1630"></td>
        <td id="LC1630" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1631" class="blob-num js-line-number" data-line-number="1631"></td>
        <td id="LC1631" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1632" class="blob-num js-line-number" data-line-number="1632"></td>
        <td id="LC1632" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1633" class="blob-num js-line-number" data-line-number="1633"></td>
        <td id="LC1633" class="blob-code js-file-line">  <span class="k">var</span> <span class="nf">closeDropdown</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">evt</span> ) {</td>
      </tr>
      <tr>
        <td id="L1634" class="blob-num js-line-number" data-line-number="1634"></td>
        <td id="LC1634" class="blob-code js-file-line">    <span class="k">if</span> (evt <span class="o">&amp;&amp;</span> evt.isDefaultPrevented()) {</td>
      </tr>
      <tr>
        <td id="L1635" class="blob-num js-line-number" data-line-number="1635"></td>
        <td id="LC1635" class="blob-code js-file-line">        <span class="k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1636" class="blob-num js-line-number" data-line-number="1636"></td>
        <td id="LC1636" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1637" class="blob-num js-line-number" data-line-number="1637"></td>
        <td id="LC1637" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1638" class="blob-num js-line-number" data-line-number="1638"></td>
        <td id="LC1638" class="blob-code js-file-line">    openScope.$<span class="nf">apply</span>(<span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1639" class="blob-num js-line-number" data-line-number="1639"></td>
        <td id="LC1639" class="blob-code js-file-line">      openScope.isOpen <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L1640" class="blob-num js-line-number" data-line-number="1640"></td>
        <td id="LC1640" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L1641" class="blob-num js-line-number" data-line-number="1641"></td>
        <td id="LC1641" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1642" class="blob-num js-line-number" data-line-number="1642"></td>
        <td id="LC1642" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1643" class="blob-num js-line-number" data-line-number="1643"></td>
        <td id="LC1643" class="blob-code js-file-line">  <span class="k">var</span> <span class="nf">escapeKeyBind</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">evt</span> ) {</td>
      </tr>
      <tr>
        <td id="L1644" class="blob-num js-line-number" data-line-number="1644"></td>
        <td id="LC1644" class="blob-code js-file-line">    <span class="k">if</span> ( evt.which <span class="o">===</span> <span class="m">27</span> ) {</td>
      </tr>
      <tr>
        <td id="L1645" class="blob-num js-line-number" data-line-number="1645"></td>
        <td id="LC1645" class="blob-code js-file-line">      openScope.focusToggleElement();</td>
      </tr>
      <tr>
        <td id="L1646" class="blob-num js-line-number" data-line-number="1646"></td>
        <td id="LC1646" class="blob-code js-file-line">      closeDropdown();</td>
      </tr>
      <tr>
        <td id="L1647" class="blob-num js-line-number" data-line-number="1647"></td>
        <td id="LC1647" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1648" class="blob-num js-line-number" data-line-number="1648"></td>
        <td id="LC1648" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1649" class="blob-num js-line-number" data-line-number="1649"></td>
        <td id="LC1649" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L1650" class="blob-num js-line-number" data-line-number="1650"></td>
        <td id="LC1650" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1651" class="blob-num js-line-number" data-line-number="1651"></td>
        <td id="LC1651" class="blob-code js-file-line">.controller(<span class="s1">'DropdownController'</span>, [<span class="s1">'$scope'</span>, <span class="s1">'$attrs'</span>, <span class="s1">'$parse'</span>, <span class="s1">'dropdownConfig'</span>, <span class="s1">'dropdownService'</span>, <span class="s1">'$animate'</span>, <span class="kt">function</span>(<span class="nv">$scope</span>, <span class="nv">$attrs</span>, <span class="nv">$parse</span>, <span class="nv">dropdownConfig</span>, <span class="nv">dropdownService</span>, <span class="nv">$animate</span>) {</td>
      </tr>
      <tr>
        <td id="L1652" class="blob-num js-line-number" data-line-number="1652"></td>
        <td id="LC1652" class="blob-code js-file-line">  <span class="k">var</span> self <span class="o">=</span> <span class="nb">this</span>,</td>
      </tr>
      <tr>
        <td id="L1653" class="blob-num js-line-number" data-line-number="1653"></td>
        <td id="LC1653" class="blob-code js-file-line">      scope <span class="o">=</span> $scope.$<span class="o">new</span>(), <span class="c1">// create a child scope so we are not polluting original one</span></td>
      </tr>
      <tr>
        <td id="L1654" class="blob-num js-line-number" data-line-number="1654"></td>
        <td id="LC1654" class="blob-code js-file-line">      openClass <span class="o">=</span> dropdownConfig.openClass,</td>
      </tr>
      <tr>
        <td id="L1655" class="blob-num js-line-number" data-line-number="1655"></td>
        <td id="LC1655" class="blob-code js-file-line">      getIsOpen,</td>
      </tr>
      <tr>
        <td id="L1656" class="blob-num js-line-number" data-line-number="1656"></td>
        <td id="LC1656" class="blob-code js-file-line">      setIsOpen <span class="o">=</span> angular.noop,</td>
      </tr>
      <tr>
        <td id="L1657" class="blob-num js-line-number" data-line-number="1657"></td>
        <td id="LC1657" class="blob-code js-file-line">      toggleInvoker <span class="o">=</span> $attrs.onToggle <span class="o">?</span> $<span class="nf">parse</span>($attrs.onToggle) <span class="o">:</span> angular.noop;</td>
      </tr>
      <tr>
        <td id="L1658" class="blob-num js-line-number" data-line-number="1658"></td>
        <td id="LC1658" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1659" class="blob-num js-line-number" data-line-number="1659"></td>
        <td id="LC1659" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">init</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">element</span> ) {</td>
      </tr>
      <tr>
        <td id="L1660" class="blob-num js-line-number" data-line-number="1660"></td>
        <td id="LC1660" class="blob-code js-file-line">    self.$element <span class="o">=</span> element;</td>
      </tr>
      <tr>
        <td id="L1661" class="blob-num js-line-number" data-line-number="1661"></td>
        <td id="LC1661" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1662" class="blob-num js-line-number" data-line-number="1662"></td>
        <td id="LC1662" class="blob-code js-file-line">    <span class="k">if</span> ( $attrs.isOpen ) {</td>
      </tr>
      <tr>
        <td id="L1663" class="blob-num js-line-number" data-line-number="1663"></td>
        <td id="LC1663" class="blob-code js-file-line">      getIsOpen <span class="o">=</span> $<span class="nf">parse</span>($attrs.isOpen);</td>
      </tr>
      <tr>
        <td id="L1664" class="blob-num js-line-number" data-line-number="1664"></td>
        <td id="LC1664" class="blob-code js-file-line">      setIsOpen <span class="o">=</span> getIsOpen.assign;</td>
      </tr>
      <tr>
        <td id="L1665" class="blob-num js-line-number" data-line-number="1665"></td>
        <td id="LC1665" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1666" class="blob-num js-line-number" data-line-number="1666"></td>
        <td id="LC1666" class="blob-code js-file-line">      $scope.$<span class="nf">watch</span>(getIsOpen, <span class="kt">function</span>(<span class="nv">value</span>) {</td>
      </tr>
      <tr>
        <td id="L1667" class="blob-num js-line-number" data-line-number="1667"></td>
        <td id="LC1667" class="blob-code js-file-line">        scope.isOpen <span class="o">=</span> <span class="o">!!</span>value;</td>
      </tr>
      <tr>
        <td id="L1668" class="blob-num js-line-number" data-line-number="1668"></td>
        <td id="LC1668" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1669" class="blob-num js-line-number" data-line-number="1669"></td>
        <td id="LC1669" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1670" class="blob-num js-line-number" data-line-number="1670"></td>
        <td id="LC1670" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1671" class="blob-num js-line-number" data-line-number="1671"></td>
        <td id="LC1671" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1672" class="blob-num js-line-number" data-line-number="1672"></td>
        <td id="LC1672" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">toggle</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">open</span> ) {</td>
      </tr>
      <tr>
        <td id="L1673" class="blob-num js-line-number" data-line-number="1673"></td>
        <td id="LC1673" class="blob-code js-file-line">    <span class="k">return</span> scope.isOpen <span class="o">=</span> arguments.<span class="no">length</span> <span class="o">?</span> <span class="o">!!</span>open <span class="o">:</span> <span class="o">!</span>scope.isOpen;</td>
      </tr>
      <tr>
        <td id="L1674" class="blob-num js-line-number" data-line-number="1674"></td>
        <td id="LC1674" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1675" class="blob-num js-line-number" data-line-number="1675"></td>
        <td id="LC1675" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1676" class="blob-num js-line-number" data-line-number="1676"></td>
        <td id="LC1676" class="blob-code js-file-line">  <span class="c1">// Allow other directives to watch status</span></td>
      </tr>
      <tr>
        <td id="L1677" class="blob-num js-line-number" data-line-number="1677"></td>
        <td id="LC1677" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">isOpen</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1678" class="blob-num js-line-number" data-line-number="1678"></td>
        <td id="LC1678" class="blob-code js-file-line">    <span class="k">return</span> scope.isOpen;</td>
      </tr>
      <tr>
        <td id="L1679" class="blob-num js-line-number" data-line-number="1679"></td>
        <td id="LC1679" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1680" class="blob-num js-line-number" data-line-number="1680"></td>
        <td id="LC1680" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1681" class="blob-num js-line-number" data-line-number="1681"></td>
        <td id="LC1681" class="blob-code js-file-line">  <span class="no">scope</span>.<span class="nf">focusToggleElement</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1682" class="blob-num js-line-number" data-line-number="1682"></td>
        <td id="LC1682" class="blob-code js-file-line">    <span class="k">if</span> ( self.toggleElement ) {</td>
      </tr>
      <tr>
        <td id="L1683" class="blob-num js-line-number" data-line-number="1683"></td>
        <td id="LC1683" class="blob-code js-file-line">      self.toggleElement[<span class="m">0</span>].<span class="nf">focus</span>();</td>
      </tr>
      <tr>
        <td id="L1684" class="blob-num js-line-number" data-line-number="1684"></td>
        <td id="LC1684" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1685" class="blob-num js-line-number" data-line-number="1685"></td>
        <td id="LC1685" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1686" class="blob-num js-line-number" data-line-number="1686"></td>
        <td id="LC1686" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1687" class="blob-num js-line-number" data-line-number="1687"></td>
        <td id="LC1687" class="blob-code js-file-line">  scope.$<span class="nf">watch</span>(<span class="s1">'isOpen'</span>, <span class="kt">function</span>( <span class="nv">isOpen</span>, <span class="nv">wasOpen</span> ) {</td>
      </tr>
      <tr>
        <td id="L1688" class="blob-num js-line-number" data-line-number="1688"></td>
        <td id="LC1688" class="blob-code js-file-line">    $animate[isOpen <span class="o">?</span> <span class="s1">'addClass'</span> <span class="o">:</span> <span class="s1">'removeClass'</span>](self.$element, openClass);</td>
      </tr>
      <tr>
        <td id="L1689" class="blob-num js-line-number" data-line-number="1689"></td>
        <td id="LC1689" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1690" class="blob-num js-line-number" data-line-number="1690"></td>
        <td id="LC1690" class="blob-code js-file-line">    <span class="k">if</span> ( isOpen ) {</td>
      </tr>
      <tr>
        <td id="L1691" class="blob-num js-line-number" data-line-number="1691"></td>
        <td id="LC1691" class="blob-code js-file-line">      scope.focusToggleElement();</td>
      </tr>
      <tr>
        <td id="L1692" class="blob-num js-line-number" data-line-number="1692"></td>
        <td id="LC1692" class="blob-code js-file-line">      dropdownService.<span class="nf">open</span>( scope );</td>
      </tr>
      <tr>
        <td id="L1693" class="blob-num js-line-number" data-line-number="1693"></td>
        <td id="LC1693" class="blob-code js-file-line">    } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1694" class="blob-num js-line-number" data-line-number="1694"></td>
        <td id="LC1694" class="blob-code js-file-line">      dropdownService.<span class="nf">close</span>( scope );</td>
      </tr>
      <tr>
        <td id="L1695" class="blob-num js-line-number" data-line-number="1695"></td>
        <td id="LC1695" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1696" class="blob-num js-line-number" data-line-number="1696"></td>
        <td id="LC1696" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1697" class="blob-num js-line-number" data-line-number="1697"></td>
        <td id="LC1697" class="blob-code js-file-line">    setIsOpen($scope, isOpen);</td>
      </tr>
      <tr>
        <td id="L1698" class="blob-num js-line-number" data-line-number="1698"></td>
        <td id="LC1698" class="blob-code js-file-line">    <span class="k">if</span> (angular.isDefined(isOpen) <span class="o">&amp;&amp;</span> isOpen <span class="o">!==</span> wasOpen) {</td>
      </tr>
      <tr>
        <td id="L1699" class="blob-num js-line-number" data-line-number="1699"></td>
        <td id="LC1699" class="blob-code js-file-line">      toggleInvoker($scope, { open<span class="o">:</span> <span class="o">!!</span>isOpen });</td>
      </tr>
      <tr>
        <td id="L1700" class="blob-num js-line-number" data-line-number="1700"></td>
        <td id="LC1700" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1701" class="blob-num js-line-number" data-line-number="1701"></td>
        <td id="LC1701" class="blob-code js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L1702" class="blob-num js-line-number" data-line-number="1702"></td>
        <td id="LC1702" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1703" class="blob-num js-line-number" data-line-number="1703"></td>
        <td id="LC1703" class="blob-code js-file-line">  $scope.$on(<span class="s1">'$locationChangeSuccess'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1704" class="blob-num js-line-number" data-line-number="1704"></td>
        <td id="LC1704" class="blob-code js-file-line">    scope.isOpen <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L1705" class="blob-num js-line-number" data-line-number="1705"></td>
        <td id="LC1705" class="blob-code js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L1706" class="blob-num js-line-number" data-line-number="1706"></td>
        <td id="LC1706" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1707" class="blob-num js-line-number" data-line-number="1707"></td>
        <td id="LC1707" class="blob-code js-file-line">  $scope.$on(<span class="s1">'$destroy'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1708" class="blob-num js-line-number" data-line-number="1708"></td>
        <td id="LC1708" class="blob-code js-file-line">    scope.$destroy();</td>
      </tr>
      <tr>
        <td id="L1709" class="blob-num js-line-number" data-line-number="1709"></td>
        <td id="LC1709" class="blob-code js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L1710" class="blob-num js-line-number" data-line-number="1710"></td>
        <td id="LC1710" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L1711" class="blob-num js-line-number" data-line-number="1711"></td>
        <td id="LC1711" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1712" class="blob-num js-line-number" data-line-number="1712"></td>
        <td id="LC1712" class="blob-code js-file-line">.directive(<span class="s1">'dropdown'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1713" class="blob-num js-line-number" data-line-number="1713"></td>
        <td id="LC1713" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L1714" class="blob-num js-line-number" data-line-number="1714"></td>
        <td id="LC1714" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'CA'</span>,</td>
      </tr>
      <tr>
        <td id="L1715" class="blob-num js-line-number" data-line-number="1715"></td>
        <td id="LC1715" class="blob-code js-file-line">    controller<span class="o">:</span> <span class="s1">'DropdownController'</span>,</td>
      </tr>
      <tr>
        <td id="L1716" class="blob-num js-line-number" data-line-number="1716"></td>
        <td id="LC1716" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>, <span class="nv">dropdownCtrl</span>) {</td>
      </tr>
      <tr>
        <td id="L1717" class="blob-num js-line-number" data-line-number="1717"></td>
        <td id="LC1717" class="blob-code js-file-line">      dropdownCtrl.init( element );</td>
      </tr>
      <tr>
        <td id="L1718" class="blob-num js-line-number" data-line-number="1718"></td>
        <td id="LC1718" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1719" class="blob-num js-line-number" data-line-number="1719"></td>
        <td id="LC1719" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1720" class="blob-num js-line-number" data-line-number="1720"></td>
        <td id="LC1720" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L1721" class="blob-num js-line-number" data-line-number="1721"></td>
        <td id="LC1721" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1722" class="blob-num js-line-number" data-line-number="1722"></td>
        <td id="LC1722" class="blob-code js-file-line">.directive(<span class="s1">'dropdownToggle'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1723" class="blob-num js-line-number" data-line-number="1723"></td>
        <td id="LC1723" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L1724" class="blob-num js-line-number" data-line-number="1724"></td>
        <td id="LC1724" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'CA'</span>,</td>
      </tr>
      <tr>
        <td id="L1725" class="blob-num js-line-number" data-line-number="1725"></td>
        <td id="LC1725" class="blob-code js-file-line">    require<span class="o">:</span> <span class="s1">'?^dropdown'</span>,</td>
      </tr>
      <tr>
        <td id="L1726" class="blob-num js-line-number" data-line-number="1726"></td>
        <td id="LC1726" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>, <span class="nv">dropdownCtrl</span>) {</td>
      </tr>
      <tr>
        <td id="L1727" class="blob-num js-line-number" data-line-number="1727"></td>
        <td id="LC1727" class="blob-code js-file-line">      <span class="k">if</span> ( <span class="o">!</span>dropdownCtrl ) {</td>
      </tr>
      <tr>
        <td id="L1728" class="blob-num js-line-number" data-line-number="1728"></td>
        <td id="LC1728" class="blob-code js-file-line">        <span class="k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1729" class="blob-num js-line-number" data-line-number="1729"></td>
        <td id="LC1729" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1730" class="blob-num js-line-number" data-line-number="1730"></td>
        <td id="LC1730" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1731" class="blob-num js-line-number" data-line-number="1731"></td>
        <td id="LC1731" class="blob-code js-file-line">      dropdownCtrl.toggleElement <span class="o">=</span> element;</td>
      </tr>
      <tr>
        <td id="L1732" class="blob-num js-line-number" data-line-number="1732"></td>
        <td id="LC1732" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1733" class="blob-num js-line-number" data-line-number="1733"></td>
        <td id="LC1733" class="blob-code js-file-line">      <span class="k">var</span> <span class="nf">toggleDropdown</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">event</span>) {</td>
      </tr>
      <tr>
        <td id="L1734" class="blob-num js-line-number" data-line-number="1734"></td>
        <td id="LC1734" class="blob-code js-file-line">        <span class="no">event</span>.preventDefault();</td>
      </tr>
      <tr>
        <td id="L1735" class="blob-num js-line-number" data-line-number="1735"></td>
        <td id="LC1735" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1736" class="blob-num js-line-number" data-line-number="1736"></td>
        <td id="LC1736" class="blob-code js-file-line">        <span class="k">if</span> ( <span class="o">!</span>element.hasClass(<span class="s1">'disabled'</span>) <span class="o">&amp;&amp;</span> <span class="o">!</span>attrs.<span class="no">disabled</span> ) {</td>
      </tr>
      <tr>
        <td id="L1737" class="blob-num js-line-number" data-line-number="1737"></td>
        <td id="LC1737" class="blob-code js-file-line">          scope.$<span class="nf">apply</span>(<span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1738" class="blob-num js-line-number" data-line-number="1738"></td>
        <td id="LC1738" class="blob-code js-file-line">            dropdownCtrl.toggle();</td>
      </tr>
      <tr>
        <td id="L1739" class="blob-num js-line-number" data-line-number="1739"></td>
        <td id="LC1739" class="blob-code js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L1740" class="blob-num js-line-number" data-line-number="1740"></td>
        <td id="LC1740" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1741" class="blob-num js-line-number" data-line-number="1741"></td>
        <td id="LC1741" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1742" class="blob-num js-line-number" data-line-number="1742"></td>
        <td id="LC1742" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1743" class="blob-num js-line-number" data-line-number="1743"></td>
        <td id="LC1743" class="blob-code js-file-line">      element.bind(<span class="s1">'click'</span>, toggleDropdown);</td>
      </tr>
      <tr>
        <td id="L1744" class="blob-num js-line-number" data-line-number="1744"></td>
        <td id="LC1744" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1745" class="blob-num js-line-number" data-line-number="1745"></td>
        <td id="LC1745" class="blob-code js-file-line">      <span class="c1">// WAI-ARIA</span></td>
      </tr>
      <tr>
        <td id="L1746" class="blob-num js-line-number" data-line-number="1746"></td>
        <td id="LC1746" class="blob-code js-file-line">      element.attr({ <span class="s1">'aria-haspopup'</span><span class="o">:</span> <span class="kc">true</span>, <span class="s1">'aria-expanded'</span><span class="o">:</span> <span class="kc">false</span> });</td>
      </tr>
      <tr>
        <td id="L1747" class="blob-num js-line-number" data-line-number="1747"></td>
        <td id="LC1747" class="blob-code js-file-line">      scope.$<span class="nf">watch</span>(dropdownCtrl.isOpen, <span class="kt">function</span>( <span class="nv">isOpen</span> ) {</td>
      </tr>
      <tr>
        <td id="L1748" class="blob-num js-line-number" data-line-number="1748"></td>
        <td id="LC1748" class="blob-code js-file-line">        element.attr(<span class="s1">'aria-expanded'</span>, <span class="o">!!</span>isOpen);</td>
      </tr>
      <tr>
        <td id="L1749" class="blob-num js-line-number" data-line-number="1749"></td>
        <td id="LC1749" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1750" class="blob-num js-line-number" data-line-number="1750"></td>
        <td id="LC1750" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1751" class="blob-num js-line-number" data-line-number="1751"></td>
        <td id="LC1751" class="blob-code js-file-line">      scope.$on(<span class="s1">'$destroy'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1752" class="blob-num js-line-number" data-line-number="1752"></td>
        <td id="LC1752" class="blob-code js-file-line">        element.unbind(<span class="s1">'click'</span>, toggleDropdown);</td>
      </tr>
      <tr>
        <td id="L1753" class="blob-num js-line-number" data-line-number="1753"></td>
        <td id="LC1753" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1754" class="blob-num js-line-number" data-line-number="1754"></td>
        <td id="LC1754" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1755" class="blob-num js-line-number" data-line-number="1755"></td>
        <td id="LC1755" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1756" class="blob-num js-line-number" data-line-number="1756"></td>
        <td id="LC1756" class="blob-code js-file-line">});</td>
      </tr>
      <tr>
        <td id="L1757" class="blob-num js-line-number" data-line-number="1757"></td>
        <td id="LC1757" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1758" class="blob-num js-line-number" data-line-number="1758"></td>
        <td id="LC1758" class="blob-code js-file-line">angular.module(<span class="s1">'ui.bootstrap.modal'</span>, [<span class="s1">'ui.bootstrap.transition'</span>])</td>
      </tr>
      <tr>
        <td id="L1759" class="blob-num js-line-number" data-line-number="1759"></td>
        <td id="LC1759" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1760" class="blob-num js-line-number" data-line-number="1760"></td>
        <td id="LC1760" class="blob-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L1761" class="blob-num js-line-number" data-line-number="1761"></td>
        <td id="LC1761" class="blob-code js-file-line"><span class="cm"> * A helper, internal data structure that acts as a map but also allows getting / removing</span></td>
      </tr>
      <tr>
        <td id="L1762" class="blob-num js-line-number" data-line-number="1762"></td>
        <td id="LC1762" class="blob-code js-file-line"><span class="cm"> * elements in the LIFO order</span></td>
      </tr>
      <tr>
        <td id="L1763" class="blob-num js-line-number" data-line-number="1763"></td>
        <td id="LC1763" class="blob-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L1764" class="blob-num js-line-number" data-line-number="1764"></td>
        <td id="LC1764" class="blob-code js-file-line">  .factory(<span class="s1">'$$stackedMap'</span>, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1765" class="blob-num js-line-number" data-line-number="1765"></td>
        <td id="LC1765" class="blob-code js-file-line">    <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L1766" class="blob-num js-line-number" data-line-number="1766"></td>
        <td id="LC1766" class="blob-code js-file-line">      <span class="nf">createNew</span>: <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1767" class="blob-num js-line-number" data-line-number="1767"></td>
        <td id="LC1767" class="blob-code js-file-line">        <span class="k">var</span> stack <span class="o">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1768" class="blob-num js-line-number" data-line-number="1768"></td>
        <td id="LC1768" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1769" class="blob-num js-line-number" data-line-number="1769"></td>
        <td id="LC1769" class="blob-code js-file-line">        <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L1770" class="blob-num js-line-number" data-line-number="1770"></td>
        <td id="LC1770" class="blob-code js-file-line">          <span class="nf">add</span>: <span class="kt">function</span> (<span class="nv">key</span>, <span class="nv">value</span>) {</td>
      </tr>
      <tr>
        <td id="L1771" class="blob-num js-line-number" data-line-number="1771"></td>
        <td id="LC1771" class="blob-code js-file-line">            stack.<span class="nf">push</span>({</td>
      </tr>
      <tr>
        <td id="L1772" class="blob-num js-line-number" data-line-number="1772"></td>
        <td id="LC1772" class="blob-code js-file-line">              key<span class="o">:</span> key,</td>
      </tr>
      <tr>
        <td id="L1773" class="blob-num js-line-number" data-line-number="1773"></td>
        <td id="LC1773" class="blob-code js-file-line">              value<span class="o">:</span> value</td>
      </tr>
      <tr>
        <td id="L1774" class="blob-num js-line-number" data-line-number="1774"></td>
        <td id="LC1774" class="blob-code js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L1775" class="blob-num js-line-number" data-line-number="1775"></td>
        <td id="LC1775" class="blob-code js-file-line">          },</td>
      </tr>
      <tr>
        <td id="L1776" class="blob-num js-line-number" data-line-number="1776"></td>
        <td id="LC1776" class="blob-code js-file-line">          <span class="nf">get</span>: <span class="kt">function</span> (<span class="nv">key</span>) {</td>
      </tr>
      <tr>
        <td id="L1777" class="blob-num js-line-number" data-line-number="1777"></td>
        <td id="LC1777" class="blob-code js-file-line">            <span class="k">for</span> (<span class="k">var</span> i <span class="o">=</span> <span class="m">0</span>; i <span class="o">&lt;</span> stack.<span class="no">length</span>; i<span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1778" class="blob-num js-line-number" data-line-number="1778"></td>
        <td id="LC1778" class="blob-code js-file-line">              <span class="k">if</span> (key <span class="o">==</span> stack[i].key) {</td>
      </tr>
      <tr>
        <td id="L1779" class="blob-num js-line-number" data-line-number="1779"></td>
        <td id="LC1779" class="blob-code js-file-line">                <span class="k">return</span> stack[i];</td>
      </tr>
      <tr>
        <td id="L1780" class="blob-num js-line-number" data-line-number="1780"></td>
        <td id="LC1780" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L1781" class="blob-num js-line-number" data-line-number="1781"></td>
        <td id="LC1781" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1782" class="blob-num js-line-number" data-line-number="1782"></td>
        <td id="LC1782" class="blob-code js-file-line">          },</td>
      </tr>
      <tr>
        <td id="L1783" class="blob-num js-line-number" data-line-number="1783"></td>
        <td id="LC1783" class="blob-code js-file-line">          <span class="nf">keys</span>: <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1784" class="blob-num js-line-number" data-line-number="1784"></td>
        <td id="LC1784" class="blob-code js-file-line">            <span class="k">var</span> keys <span class="o">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1785" class="blob-num js-line-number" data-line-number="1785"></td>
        <td id="LC1785" class="blob-code js-file-line">            <span class="k">for</span> (<span class="k">var</span> i <span class="o">=</span> <span class="m">0</span>; i <span class="o">&lt;</span> stack.<span class="no">length</span>; i<span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1786" class="blob-num js-line-number" data-line-number="1786"></td>
        <td id="LC1786" class="blob-code js-file-line">              keys.<span class="nf">push</span>(stack[i].key);</td>
      </tr>
      <tr>
        <td id="L1787" class="blob-num js-line-number" data-line-number="1787"></td>
        <td id="LC1787" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1788" class="blob-num js-line-number" data-line-number="1788"></td>
        <td id="LC1788" class="blob-code js-file-line">            <span class="k">return</span> keys;</td>
      </tr>
      <tr>
        <td id="L1789" class="blob-num js-line-number" data-line-number="1789"></td>
        <td id="LC1789" class="blob-code js-file-line">          },</td>
      </tr>
      <tr>
        <td id="L1790" class="blob-num js-line-number" data-line-number="1790"></td>
        <td id="LC1790" class="blob-code js-file-line">          <span class="nf">top</span>: <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1791" class="blob-num js-line-number" data-line-number="1791"></td>
        <td id="LC1791" class="blob-code js-file-line">            <span class="k">return</span> stack[stack.<span class="no">length</span> <span class="o">-</span> <span class="m">1</span>];</td>
      </tr>
      <tr>
        <td id="L1792" class="blob-num js-line-number" data-line-number="1792"></td>
        <td id="LC1792" class="blob-code js-file-line">          },</td>
      </tr>
      <tr>
        <td id="L1793" class="blob-num js-line-number" data-line-number="1793"></td>
        <td id="LC1793" class="blob-code js-file-line">          <span class="nf">remove</span>: <span class="kt">function</span> (<span class="nv">key</span>) {</td>
      </tr>
      <tr>
        <td id="L1794" class="blob-num js-line-number" data-line-number="1794"></td>
        <td id="LC1794" class="blob-code js-file-line">            <span class="k">var</span> idx <span class="o">=</span> <span class="o">-</span><span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L1795" class="blob-num js-line-number" data-line-number="1795"></td>
        <td id="LC1795" class="blob-code js-file-line">            <span class="k">for</span> (<span class="k">var</span> i <span class="o">=</span> <span class="m">0</span>; i <span class="o">&lt;</span> stack.<span class="no">length</span>; i<span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1796" class="blob-num js-line-number" data-line-number="1796"></td>
        <td id="LC1796" class="blob-code js-file-line">              <span class="k">if</span> (key <span class="o">==</span> stack[i].key) {</td>
      </tr>
      <tr>
        <td id="L1797" class="blob-num js-line-number" data-line-number="1797"></td>
        <td id="LC1797" class="blob-code js-file-line">                idx <span class="o">=</span> i;</td>
      </tr>
      <tr>
        <td id="L1798" class="blob-num js-line-number" data-line-number="1798"></td>
        <td id="LC1798" class="blob-code js-file-line">                <span class="k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1799" class="blob-num js-line-number" data-line-number="1799"></td>
        <td id="LC1799" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L1800" class="blob-num js-line-number" data-line-number="1800"></td>
        <td id="LC1800" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1801" class="blob-num js-line-number" data-line-number="1801"></td>
        <td id="LC1801" class="blob-code js-file-line">            <span class="k">return</span> stack.<span class="nf">splice</span>(idx, <span class="m">1</span>)[<span class="m">0</span>];</td>
      </tr>
      <tr>
        <td id="L1802" class="blob-num js-line-number" data-line-number="1802"></td>
        <td id="LC1802" class="blob-code js-file-line">          },</td>
      </tr>
      <tr>
        <td id="L1803" class="blob-num js-line-number" data-line-number="1803"></td>
        <td id="LC1803" class="blob-code js-file-line">          <span class="nf">removeTop</span>: <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1804" class="blob-num js-line-number" data-line-number="1804"></td>
        <td id="LC1804" class="blob-code js-file-line">            <span class="k">return</span> stack.<span class="nf">splice</span>(stack.<span class="no">length</span> <span class="o">-</span> <span class="m">1</span>, <span class="m">1</span>)[<span class="m">0</span>];</td>
      </tr>
      <tr>
        <td id="L1805" class="blob-num js-line-number" data-line-number="1805"></td>
        <td id="LC1805" class="blob-code js-file-line">          },</td>
      </tr>
      <tr>
        <td id="L1806" class="blob-num js-line-number" data-line-number="1806"></td>
        <td id="LC1806" class="blob-code js-file-line">          <span class="nf">length</span>: <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1807" class="blob-num js-line-number" data-line-number="1807"></td>
        <td id="LC1807" class="blob-code js-file-line">            <span class="k">return</span> stack.<span class="no">length</span>;</td>
      </tr>
      <tr>
        <td id="L1808" class="blob-num js-line-number" data-line-number="1808"></td>
        <td id="LC1808" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1809" class="blob-num js-line-number" data-line-number="1809"></td>
        <td id="LC1809" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L1810" class="blob-num js-line-number" data-line-number="1810"></td>
        <td id="LC1810" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1811" class="blob-num js-line-number" data-line-number="1811"></td>
        <td id="LC1811" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1812" class="blob-num js-line-number" data-line-number="1812"></td>
        <td id="LC1812" class="blob-code js-file-line">  })</td>
      </tr>
      <tr>
        <td id="L1813" class="blob-num js-line-number" data-line-number="1813"></td>
        <td id="LC1813" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1814" class="blob-num js-line-number" data-line-number="1814"></td>
        <td id="LC1814" class="blob-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L1815" class="blob-num js-line-number" data-line-number="1815"></td>
        <td id="LC1815" class="blob-code js-file-line"><span class="cm"> * A helper directive for the $modal service. It creates a backdrop element.</span></td>
      </tr>
      <tr>
        <td id="L1816" class="blob-num js-line-number" data-line-number="1816"></td>
        <td id="LC1816" class="blob-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L1817" class="blob-num js-line-number" data-line-number="1817"></td>
        <td id="LC1817" class="blob-code js-file-line">  .directive(<span class="s1">'modalBackdrop'</span>, [<span class="s1">'$timeout'</span>, <span class="kt">function</span> (<span class="nv">$timeout</span>) {</td>
      </tr>
      <tr>
        <td id="L1818" class="blob-num js-line-number" data-line-number="1818"></td>
        <td id="LC1818" class="blob-code js-file-line">    <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L1819" class="blob-num js-line-number" data-line-number="1819"></td>
        <td id="LC1819" class="blob-code js-file-line">      restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L1820" class="blob-num js-line-number" data-line-number="1820"></td>
        <td id="LC1820" class="blob-code js-file-line">      replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L1821" class="blob-num js-line-number" data-line-number="1821"></td>
        <td id="LC1821" class="blob-code js-file-line">      templateUrl<span class="o">:</span> <span class="s1">'template/modal/backdrop.html'</span>,</td>
      </tr>
      <tr>
        <td id="L1822" class="blob-num js-line-number" data-line-number="1822"></td>
        <td id="LC1822" class="blob-code js-file-line">      <span class="nf">link</span>: <span class="kt">function</span> (<span class="nv">scope</span>) {</td>
      </tr>
      <tr>
        <td id="L1823" class="blob-num js-line-number" data-line-number="1823"></td>
        <td id="LC1823" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1824" class="blob-num js-line-number" data-line-number="1824"></td>
        <td id="LC1824" class="blob-code js-file-line">        scope.animate <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L1825" class="blob-num js-line-number" data-line-number="1825"></td>
        <td id="LC1825" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1826" class="blob-num js-line-number" data-line-number="1826"></td>
        <td id="LC1826" class="blob-code js-file-line">        <span class="c1">//trigger CSS transitions</span></td>
      </tr>
      <tr>
        <td id="L1827" class="blob-num js-line-number" data-line-number="1827"></td>
        <td id="LC1827" class="blob-code js-file-line">        $timeout(<span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1828" class="blob-num js-line-number" data-line-number="1828"></td>
        <td id="LC1828" class="blob-code js-file-line">          scope.animate <span class="o">=</span> <span class="kc">true</span>;</td>
      </tr>
      <tr>
        <td id="L1829" class="blob-num js-line-number" data-line-number="1829"></td>
        <td id="LC1829" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L1830" class="blob-num js-line-number" data-line-number="1830"></td>
        <td id="LC1830" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1831" class="blob-num js-line-number" data-line-number="1831"></td>
        <td id="LC1831" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1832" class="blob-num js-line-number" data-line-number="1832"></td>
        <td id="LC1832" class="blob-code js-file-line">  }])</td>
      </tr>
      <tr>
        <td id="L1833" class="blob-num js-line-number" data-line-number="1833"></td>
        <td id="LC1833" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1834" class="blob-num js-line-number" data-line-number="1834"></td>
        <td id="LC1834" class="blob-code js-file-line">  .directive(<span class="s1">'modalWindow'</span>, [<span class="s1">'$modalStack'</span>, <span class="s1">'$timeout'</span>, <span class="kt">function</span> (<span class="nv">$modalStack</span>, <span class="nv">$timeout</span>) {</td>
      </tr>
      <tr>
        <td id="L1835" class="blob-num js-line-number" data-line-number="1835"></td>
        <td id="LC1835" class="blob-code js-file-line">    <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L1836" class="blob-num js-line-number" data-line-number="1836"></td>
        <td id="LC1836" class="blob-code js-file-line">      restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L1837" class="blob-num js-line-number" data-line-number="1837"></td>
        <td id="LC1837" class="blob-code js-file-line">      scope<span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L1838" class="blob-num js-line-number" data-line-number="1838"></td>
        <td id="LC1838" class="blob-code js-file-line">        index<span class="o">:</span> <span class="s1">'@'</span>,</td>
      </tr>
      <tr>
        <td id="L1839" class="blob-num js-line-number" data-line-number="1839"></td>
        <td id="LC1839" class="blob-code js-file-line">        animate<span class="o">:</span> <span class="s1">'='</span></td>
      </tr>
      <tr>
        <td id="L1840" class="blob-num js-line-number" data-line-number="1840"></td>
        <td id="LC1840" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L1841" class="blob-num js-line-number" data-line-number="1841"></td>
        <td id="LC1841" class="blob-code js-file-line">      replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L1842" class="blob-num js-line-number" data-line-number="1842"></td>
        <td id="LC1842" class="blob-code js-file-line">      transclude<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L1843" class="blob-num js-line-number" data-line-number="1843"></td>
        <td id="LC1843" class="blob-code js-file-line">      <span class="nf">templateUrl</span>: <span class="kt">function</span>(<span class="nv">tElement</span>, <span class="nv">tAttrs</span>) {</td>
      </tr>
      <tr>
        <td id="L1844" class="blob-num js-line-number" data-line-number="1844"></td>
        <td id="LC1844" class="blob-code js-file-line">        <span class="k">return</span> tAttrs.templateUrl <span class="o">||</span> <span class="s1">'template/modal/window.html'</span>;</td>
      </tr>
      <tr>
        <td id="L1845" class="blob-num js-line-number" data-line-number="1845"></td>
        <td id="LC1845" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L1846" class="blob-num js-line-number" data-line-number="1846"></td>
        <td id="LC1846" class="blob-code js-file-line">      <span class="nf">link</span>: <span class="kt">function</span> (<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>) {</td>
      </tr>
      <tr>
        <td id="L1847" class="blob-num js-line-number" data-line-number="1847"></td>
        <td id="LC1847" class="blob-code js-file-line">        element.addClass(attrs.windowClass <span class="o">||</span> <span class="s1">''</span>);</td>
      </tr>
      <tr>
        <td id="L1848" class="blob-num js-line-number" data-line-number="1848"></td>
        <td id="LC1848" class="blob-code js-file-line">        scope.<span class="no">size</span> <span class="o">=</span> attrs.<span class="no">size</span>;</td>
      </tr>
      <tr>
        <td id="L1849" class="blob-num js-line-number" data-line-number="1849"></td>
        <td id="LC1849" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1850" class="blob-num js-line-number" data-line-number="1850"></td>
        <td id="LC1850" class="blob-code js-file-line">        $timeout(<span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1851" class="blob-num js-line-number" data-line-number="1851"></td>
        <td id="LC1851" class="blob-code js-file-line">          <span class="c1">// trigger CSS transitions</span></td>
      </tr>
      <tr>
        <td id="L1852" class="blob-num js-line-number" data-line-number="1852"></td>
        <td id="LC1852" class="blob-code js-file-line">          scope.animate <span class="o">=</span> <span class="kc">true</span>;</td>
      </tr>
      <tr>
        <td id="L1853" class="blob-num js-line-number" data-line-number="1853"></td>
        <td id="LC1853" class="blob-code js-file-line">          <span class="c1">// focus a freshly-opened modal</span></td>
      </tr>
      <tr>
        <td id="L1854" class="blob-num js-line-number" data-line-number="1854"></td>
        <td id="LC1854" class="blob-code js-file-line">          element[<span class="m">0</span>].<span class="nf">focus</span>();</td>
      </tr>
      <tr>
        <td id="L1855" class="blob-num js-line-number" data-line-number="1855"></td>
        <td id="LC1855" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L1856" class="blob-num js-line-number" data-line-number="1856"></td>
        <td id="LC1856" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1857" class="blob-num js-line-number" data-line-number="1857"></td>
        <td id="LC1857" class="blob-code js-file-line">        <span class="no">scope</span>.<span class="nf">close</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">evt</span>) {</td>
      </tr>
      <tr>
        <td id="L1858" class="blob-num js-line-number" data-line-number="1858"></td>
        <td id="LC1858" class="blob-code js-file-line">          <span class="k">var</span> modal <span class="o">=</span> $modalStack.getTop();</td>
      </tr>
      <tr>
        <td id="L1859" class="blob-num js-line-number" data-line-number="1859"></td>
        <td id="LC1859" class="blob-code js-file-line">          <span class="k">if</span> (modal <span class="o">&amp;&amp;</span> modal.<span class="no">value</span>.backdrop <span class="o">&amp;&amp;</span> modal.<span class="no">value</span>.backdrop <span class="o">!=</span> <span class="s1">'static'</span> <span class="o">&amp;&amp;</span> (evt.<span class="no">target</span> <span class="o">===</span> evt.currentTarget)) {</td>
      </tr>
      <tr>
        <td id="L1860" class="blob-num js-line-number" data-line-number="1860"></td>
        <td id="LC1860" class="blob-code js-file-line">            evt.preventDefault();</td>
      </tr>
      <tr>
        <td id="L1861" class="blob-num js-line-number" data-line-number="1861"></td>
        <td id="LC1861" class="blob-code js-file-line">            evt.stopPropagation();</td>
      </tr>
      <tr>
        <td id="L1862" class="blob-num js-line-number" data-line-number="1862"></td>
        <td id="LC1862" class="blob-code js-file-line">            $modalStack.dismiss(modal.key, <span class="s1">'backdrop click'</span>);</td>
      </tr>
      <tr>
        <td id="L1863" class="blob-num js-line-number" data-line-number="1863"></td>
        <td id="LC1863" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1864" class="blob-num js-line-number" data-line-number="1864"></td>
        <td id="LC1864" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L1865" class="blob-num js-line-number" data-line-number="1865"></td>
        <td id="LC1865" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1866" class="blob-num js-line-number" data-line-number="1866"></td>
        <td id="LC1866" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1867" class="blob-num js-line-number" data-line-number="1867"></td>
        <td id="LC1867" class="blob-code js-file-line">  }])</td>
      </tr>
      <tr>
        <td id="L1868" class="blob-num js-line-number" data-line-number="1868"></td>
        <td id="LC1868" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1869" class="blob-num js-line-number" data-line-number="1869"></td>
        <td id="LC1869" class="blob-code js-file-line">  .factory(<span class="s1">'$modalStack'</span>, [<span class="s1">'$transition'</span>, <span class="s1">'$timeout'</span>, <span class="s1">'$document'</span>, <span class="s1">'$compile'</span>, <span class="s1">'$rootScope'</span>, <span class="s1">'$$stackedMap'</span>,</td>
      </tr>
      <tr>
        <td id="L1870" class="blob-num js-line-number" data-line-number="1870"></td>
        <td id="LC1870" class="blob-code js-file-line">    <span class="kt">function</span> (<span class="nv">$transition</span>, <span class="nv">$timeout</span>, <span class="nv">$document</span>, <span class="nv">$compile</span>, <span class="nv">$rootScope</span>, <span class="nv">$$stackedMap</span>) {</td>
      </tr>
      <tr>
        <td id="L1871" class="blob-num js-line-number" data-line-number="1871"></td>
        <td id="LC1871" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1872" class="blob-num js-line-number" data-line-number="1872"></td>
        <td id="LC1872" class="blob-code js-file-line">      <span class="k">var</span> OPENED_MODAL_CLASS <span class="o">=</span> <span class="s1">'modal-open'</span>;</td>
      </tr>
      <tr>
        <td id="L1873" class="blob-num js-line-number" data-line-number="1873"></td>
        <td id="LC1873" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1874" class="blob-num js-line-number" data-line-number="1874"></td>
        <td id="LC1874" class="blob-code js-file-line">      <span class="k">var</span> backdropDomEl, backdropScope;</td>
      </tr>
      <tr>
        <td id="L1875" class="blob-num js-line-number" data-line-number="1875"></td>
        <td id="LC1875" class="blob-code js-file-line">      <span class="k">var</span> openedWindows <span class="o">=</span> $$stackedMap.createNew();</td>
      </tr>
      <tr>
        <td id="L1876" class="blob-num js-line-number" data-line-number="1876"></td>
        <td id="LC1876" class="blob-code js-file-line">      <span class="k">var</span> $modalStack <span class="o">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1877" class="blob-num js-line-number" data-line-number="1877"></td>
        <td id="LC1877" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1878" class="blob-num js-line-number" data-line-number="1878"></td>
        <td id="LC1878" class="blob-code js-file-line">      <span class="kt">function</span> <span class="nf">backdropIndex</span>() {</td>
      </tr>
      <tr>
        <td id="L1879" class="blob-num js-line-number" data-line-number="1879"></td>
        <td id="LC1879" class="blob-code js-file-line">        <span class="k">var</span> topBackdropIndex <span class="o">=</span> <span class="o">-</span><span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L1880" class="blob-num js-line-number" data-line-number="1880"></td>
        <td id="LC1880" class="blob-code js-file-line">        <span class="k">var</span> opened <span class="o">=</span> openedWindows.keys();</td>
      </tr>
      <tr>
        <td id="L1881" class="blob-num js-line-number" data-line-number="1881"></td>
        <td id="LC1881" class="blob-code js-file-line">        <span class="k">for</span> (<span class="k">var</span> i <span class="o">=</span> <span class="m">0</span>; i <span class="o">&lt;</span> opened.<span class="no">length</span>; i<span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1882" class="blob-num js-line-number" data-line-number="1882"></td>
        <td id="LC1882" class="blob-code js-file-line">          <span class="k">if</span> (openedWindows.get(opened[i]).<span class="no">value</span>.backdrop) {</td>
      </tr>
      <tr>
        <td id="L1883" class="blob-num js-line-number" data-line-number="1883"></td>
        <td id="LC1883" class="blob-code js-file-line">            topBackdropIndex <span class="o">=</span> i;</td>
      </tr>
      <tr>
        <td id="L1884" class="blob-num js-line-number" data-line-number="1884"></td>
        <td id="LC1884" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1885" class="blob-num js-line-number" data-line-number="1885"></td>
        <td id="LC1885" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1886" class="blob-num js-line-number" data-line-number="1886"></td>
        <td id="LC1886" class="blob-code js-file-line">        <span class="k">return</span> topBackdropIndex;</td>
      </tr>
      <tr>
        <td id="L1887" class="blob-num js-line-number" data-line-number="1887"></td>
        <td id="LC1887" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1888" class="blob-num js-line-number" data-line-number="1888"></td>
        <td id="LC1888" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1889" class="blob-num js-line-number" data-line-number="1889"></td>
        <td id="LC1889" class="blob-code js-file-line">      $rootScope.$<span class="nf">watch</span>(backdropIndex, <span class="kt">function</span>(<span class="nv">newBackdropIndex</span>){</td>
      </tr>
      <tr>
        <td id="L1890" class="blob-num js-line-number" data-line-number="1890"></td>
        <td id="LC1890" class="blob-code js-file-line">        <span class="k">if</span> (backdropScope) {</td>
      </tr>
      <tr>
        <td id="L1891" class="blob-num js-line-number" data-line-number="1891"></td>
        <td id="LC1891" class="blob-code js-file-line">          backdropScope.<span class="no">index</span> <span class="o">=</span> newBackdropIndex;</td>
      </tr>
      <tr>
        <td id="L1892" class="blob-num js-line-number" data-line-number="1892"></td>
        <td id="LC1892" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1893" class="blob-num js-line-number" data-line-number="1893"></td>
        <td id="LC1893" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1894" class="blob-num js-line-number" data-line-number="1894"></td>
        <td id="LC1894" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1895" class="blob-num js-line-number" data-line-number="1895"></td>
        <td id="LC1895" class="blob-code js-file-line">      <span class="kt">function</span> <span class="nf">removeModalWindow</span>(<span class="nv">modalInstance</span>) {</td>
      </tr>
      <tr>
        <td id="L1896" class="blob-num js-line-number" data-line-number="1896"></td>
        <td id="LC1896" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1897" class="blob-num js-line-number" data-line-number="1897"></td>
        <td id="LC1897" class="blob-code js-file-line">        <span class="k">var</span> body <span class="o">=</span> $<span class="no">document</span>.<span class="nf">find</span>(<span class="s1">'body'</span>).eq(<span class="m">0</span>);</td>
      </tr>
      <tr>
        <td id="L1898" class="blob-num js-line-number" data-line-number="1898"></td>
        <td id="LC1898" class="blob-code js-file-line">        <span class="k">var</span> modalWindow <span class="o">=</span> openedWindows.get(modalInstance).<span class="no">value</span>;</td>
      </tr>
      <tr>
        <td id="L1899" class="blob-num js-line-number" data-line-number="1899"></td>
        <td id="LC1899" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1900" class="blob-num js-line-number" data-line-number="1900"></td>
        <td id="LC1900" class="blob-code js-file-line">        <span class="c1">//clean up the stack</span></td>
      </tr>
      <tr>
        <td id="L1901" class="blob-num js-line-number" data-line-number="1901"></td>
        <td id="LC1901" class="blob-code js-file-line">        openedWindows.<span class="nf">remove</span>(modalInstance);</td>
      </tr>
      <tr>
        <td id="L1902" class="blob-num js-line-number" data-line-number="1902"></td>
        <td id="LC1902" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1903" class="blob-num js-line-number" data-line-number="1903"></td>
        <td id="LC1903" class="blob-code js-file-line">        <span class="c1">//remove window DOM element</span></td>
      </tr>
      <tr>
        <td id="L1904" class="blob-num js-line-number" data-line-number="1904"></td>
        <td id="LC1904" class="blob-code js-file-line">        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, <span class="m">300</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1905" class="blob-num js-line-number" data-line-number="1905"></td>
        <td id="LC1905" class="blob-code js-file-line">          modalWindow.modalScope.$destroy();</td>
      </tr>
      <tr>
        <td id="L1906" class="blob-num js-line-number" data-line-number="1906"></td>
        <td id="LC1906" class="blob-code js-file-line">          body.toggleClass(OPENED_MODAL_CLASS, openedWindows.<span class="no">length</span>() <span class="o">&gt;</span> <span class="m">0</span>);</td>
      </tr>
      <tr>
        <td id="L1907" class="blob-num js-line-number" data-line-number="1907"></td>
        <td id="LC1907" class="blob-code js-file-line">          checkRemoveBackdrop();</td>
      </tr>
      <tr>
        <td id="L1908" class="blob-num js-line-number" data-line-number="1908"></td>
        <td id="LC1908" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L1909" class="blob-num js-line-number" data-line-number="1909"></td>
        <td id="LC1909" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1910" class="blob-num js-line-number" data-line-number="1910"></td>
        <td id="LC1910" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1911" class="blob-num js-line-number" data-line-number="1911"></td>
        <td id="LC1911" class="blob-code js-file-line">      <span class="kt">function</span> <span class="nf">checkRemoveBackdrop</span>() {</td>
      </tr>
      <tr>
        <td id="L1912" class="blob-num js-line-number" data-line-number="1912"></td>
        <td id="LC1912" class="blob-code js-file-line">          <span class="c1">//remove backdrop if no longer needed</span></td>
      </tr>
      <tr>
        <td id="L1913" class="blob-num js-line-number" data-line-number="1913"></td>
        <td id="LC1913" class="blob-code js-file-line">          <span class="k">if</span> (backdropDomEl <span class="o">&amp;&amp;</span> backdropIndex() <span class="o">==</span> <span class="o">-</span><span class="m">1</span>) {</td>
      </tr>
      <tr>
        <td id="L1914" class="blob-num js-line-number" data-line-number="1914"></td>
        <td id="LC1914" class="blob-code js-file-line">            <span class="k">var</span> backdropScopeRef <span class="o">=</span> backdropScope;</td>
      </tr>
      <tr>
        <td id="L1915" class="blob-num js-line-number" data-line-number="1915"></td>
        <td id="LC1915" class="blob-code js-file-line">            removeAfterAnimate(backdropDomEl, backdropScope, <span class="m">150</span>, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1916" class="blob-num js-line-number" data-line-number="1916"></td>
        <td id="LC1916" class="blob-code js-file-line">              backdropScopeRef.$destroy();</td>
      </tr>
      <tr>
        <td id="L1917" class="blob-num js-line-number" data-line-number="1917"></td>
        <td id="LC1917" class="blob-code js-file-line">              backdropScopeRef <span class="o">=</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L1918" class="blob-num js-line-number" data-line-number="1918"></td>
        <td id="LC1918" class="blob-code js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L1919" class="blob-num js-line-number" data-line-number="1919"></td>
        <td id="LC1919" class="blob-code js-file-line">            backdropDomEl <span class="o">=</span> <span class="kc">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L1920" class="blob-num js-line-number" data-line-number="1920"></td>
        <td id="LC1920" class="blob-code js-file-line">            backdropScope <span class="o">=</span> <span class="kc">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L1921" class="blob-num js-line-number" data-line-number="1921"></td>
        <td id="LC1921" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1922" class="blob-num js-line-number" data-line-number="1922"></td>
        <td id="LC1922" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1923" class="blob-num js-line-number" data-line-number="1923"></td>
        <td id="LC1923" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1924" class="blob-num js-line-number" data-line-number="1924"></td>
        <td id="LC1924" class="blob-code js-file-line">      <span class="kt">function</span> <span class="nf">removeAfterAnimate</span>(<span class="nv">domEl</span>, <span class="nv">scope</span>, <span class="nv">emulateTime</span>, <span class="nv">done</span>) {</td>
      </tr>
      <tr>
        <td id="L1925" class="blob-num js-line-number" data-line-number="1925"></td>
        <td id="LC1925" class="blob-code js-file-line">        <span class="c1">// Closing animation</span></td>
      </tr>
      <tr>
        <td id="L1926" class="blob-num js-line-number" data-line-number="1926"></td>
        <td id="LC1926" class="blob-code js-file-line">        scope.animate <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L1927" class="blob-num js-line-number" data-line-number="1927"></td>
        <td id="LC1927" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1928" class="blob-num js-line-number" data-line-number="1928"></td>
        <td id="LC1928" class="blob-code js-file-line">        <span class="k">var</span> transitionEndEventName <span class="o">=</span> $transition.transitionEndEventName;</td>
      </tr>
      <tr>
        <td id="L1929" class="blob-num js-line-number" data-line-number="1929"></td>
        <td id="LC1929" class="blob-code js-file-line">        <span class="k">if</span> (transitionEndEventName) {</td>
      </tr>
      <tr>
        <td id="L1930" class="blob-num js-line-number" data-line-number="1930"></td>
        <td id="LC1930" class="blob-code js-file-line">          <span class="c1">// transition out</span></td>
      </tr>
      <tr>
        <td id="L1931" class="blob-num js-line-number" data-line-number="1931"></td>
        <td id="LC1931" class="blob-code js-file-line">          <span class="k">var</span> timeout <span class="o">=</span> $timeout(afterAnimating, emulateTime);</td>
      </tr>
      <tr>
        <td id="L1932" class="blob-num js-line-number" data-line-number="1932"></td>
        <td id="LC1932" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1933" class="blob-num js-line-number" data-line-number="1933"></td>
        <td id="LC1933" class="blob-code js-file-line">          domEl.bind(transitionEndEventName, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1934" class="blob-num js-line-number" data-line-number="1934"></td>
        <td id="LC1934" class="blob-code js-file-line">            $timeout.cancel(timeout);</td>
      </tr>
      <tr>
        <td id="L1935" class="blob-num js-line-number" data-line-number="1935"></td>
        <td id="LC1935" class="blob-code js-file-line">            afterAnimating();</td>
      </tr>
      <tr>
        <td id="L1936" class="blob-num js-line-number" data-line-number="1936"></td>
        <td id="LC1936" class="blob-code js-file-line">            scope.$<span class="nf">apply</span>();</td>
      </tr>
      <tr>
        <td id="L1937" class="blob-num js-line-number" data-line-number="1937"></td>
        <td id="LC1937" class="blob-code js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L1938" class="blob-num js-line-number" data-line-number="1938"></td>
        <td id="LC1938" class="blob-code js-file-line">        } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1939" class="blob-num js-line-number" data-line-number="1939"></td>
        <td id="LC1939" class="blob-code js-file-line">          <span class="c1">// Ensure this call is async</span></td>
      </tr>
      <tr>
        <td id="L1940" class="blob-num js-line-number" data-line-number="1940"></td>
        <td id="LC1940" class="blob-code js-file-line">          $timeout(afterAnimating, <span class="m">0</span>);</td>
      </tr>
      <tr>
        <td id="L1941" class="blob-num js-line-number" data-line-number="1941"></td>
        <td id="LC1941" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1942" class="blob-num js-line-number" data-line-number="1942"></td>
        <td id="LC1942" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1943" class="blob-num js-line-number" data-line-number="1943"></td>
        <td id="LC1943" class="blob-code js-file-line">        <span class="kt">function</span> <span class="nf">afterAnimating</span>() {</td>
      </tr>
      <tr>
        <td id="L1944" class="blob-num js-line-number" data-line-number="1944"></td>
        <td id="LC1944" class="blob-code js-file-line">          <span class="k">if</span> (afterAnimating.done) {</td>
      </tr>
      <tr>
        <td id="L1945" class="blob-num js-line-number" data-line-number="1945"></td>
        <td id="LC1945" class="blob-code js-file-line">            <span class="k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1946" class="blob-num js-line-number" data-line-number="1946"></td>
        <td id="LC1946" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1947" class="blob-num js-line-number" data-line-number="1947"></td>
        <td id="LC1947" class="blob-code js-file-line">          afterAnimating.done <span class="o">=</span> <span class="kc">true</span>;</td>
      </tr>
      <tr>
        <td id="L1948" class="blob-num js-line-number" data-line-number="1948"></td>
        <td id="LC1948" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1949" class="blob-num js-line-number" data-line-number="1949"></td>
        <td id="LC1949" class="blob-code js-file-line">          domEl.<span class="nf">remove</span>();</td>
      </tr>
      <tr>
        <td id="L1950" class="blob-num js-line-number" data-line-number="1950"></td>
        <td id="LC1950" class="blob-code js-file-line">          <span class="k">if</span> (done) {</td>
      </tr>
      <tr>
        <td id="L1951" class="blob-num js-line-number" data-line-number="1951"></td>
        <td id="LC1951" class="blob-code js-file-line">            done();</td>
      </tr>
      <tr>
        <td id="L1952" class="blob-num js-line-number" data-line-number="1952"></td>
        <td id="LC1952" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1953" class="blob-num js-line-number" data-line-number="1953"></td>
        <td id="LC1953" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1954" class="blob-num js-line-number" data-line-number="1954"></td>
        <td id="LC1954" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1955" class="blob-num js-line-number" data-line-number="1955"></td>
        <td id="LC1955" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1956" class="blob-num js-line-number" data-line-number="1956"></td>
        <td id="LC1956" class="blob-code js-file-line">      $<span class="no">document</span>.bind(<span class="s1">'keydown'</span>, <span class="kt">function</span> (<span class="nv">evt</span>) {</td>
      </tr>
      <tr>
        <td id="L1957" class="blob-num js-line-number" data-line-number="1957"></td>
        <td id="LC1957" class="blob-code js-file-line">        <span class="k">var</span> modal;</td>
      </tr>
      <tr>
        <td id="L1958" class="blob-num js-line-number" data-line-number="1958"></td>
        <td id="LC1958" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1959" class="blob-num js-line-number" data-line-number="1959"></td>
        <td id="LC1959" class="blob-code js-file-line">        <span class="k">if</span> (evt.which <span class="o">===</span> <span class="m">27</span>) {</td>
      </tr>
      <tr>
        <td id="L1960" class="blob-num js-line-number" data-line-number="1960"></td>
        <td id="LC1960" class="blob-code js-file-line">          modal <span class="o">=</span> openedWindows.<span class="no">top</span>();</td>
      </tr>
      <tr>
        <td id="L1961" class="blob-num js-line-number" data-line-number="1961"></td>
        <td id="LC1961" class="blob-code js-file-line">          <span class="k">if</span> (modal <span class="o">&amp;&amp;</span> modal.<span class="no">value</span>.keyboard) {</td>
      </tr>
      <tr>
        <td id="L1962" class="blob-num js-line-number" data-line-number="1962"></td>
        <td id="LC1962" class="blob-code js-file-line">            evt.preventDefault();</td>
      </tr>
      <tr>
        <td id="L1963" class="blob-num js-line-number" data-line-number="1963"></td>
        <td id="LC1963" class="blob-code js-file-line">            $rootScope.$<span class="nf">apply</span>(<span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1964" class="blob-num js-line-number" data-line-number="1964"></td>
        <td id="LC1964" class="blob-code js-file-line">              $modalStack.dismiss(modal.key, <span class="s1">'escape key press'</span>);</td>
      </tr>
      <tr>
        <td id="L1965" class="blob-num js-line-number" data-line-number="1965"></td>
        <td id="LC1965" class="blob-code js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L1966" class="blob-num js-line-number" data-line-number="1966"></td>
        <td id="LC1966" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1967" class="blob-num js-line-number" data-line-number="1967"></td>
        <td id="LC1967" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1968" class="blob-num js-line-number" data-line-number="1968"></td>
        <td id="LC1968" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1969" class="blob-num js-line-number" data-line-number="1969"></td>
        <td id="LC1969" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1970" class="blob-num js-line-number" data-line-number="1970"></td>
        <td id="LC1970" class="blob-code js-file-line">      <span class="no">$modalStack</span>.<span class="nf">open</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">modalInstance</span>, <span class="nv">modal</span>) {</td>
      </tr>
      <tr>
        <td id="L1971" class="blob-num js-line-number" data-line-number="1971"></td>
        <td id="LC1971" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1972" class="blob-num js-line-number" data-line-number="1972"></td>
        <td id="LC1972" class="blob-code js-file-line">        openedWindows.<span class="nf">add</span>(modalInstance, {</td>
      </tr>
      <tr>
        <td id="L1973" class="blob-num js-line-number" data-line-number="1973"></td>
        <td id="LC1973" class="blob-code js-file-line">          deferred<span class="o">:</span> modal.deferred,</td>
      </tr>
      <tr>
        <td id="L1974" class="blob-num js-line-number" data-line-number="1974"></td>
        <td id="LC1974" class="blob-code js-file-line">          modalScope<span class="o">:</span> modal.<span class="no">scope</span>,</td>
      </tr>
      <tr>
        <td id="L1975" class="blob-num js-line-number" data-line-number="1975"></td>
        <td id="LC1975" class="blob-code js-file-line">          backdrop<span class="o">:</span> modal.backdrop,</td>
      </tr>
      <tr>
        <td id="L1976" class="blob-num js-line-number" data-line-number="1976"></td>
        <td id="LC1976" class="blob-code js-file-line">          keyboard<span class="o">:</span> modal.keyboard</td>
      </tr>
      <tr>
        <td id="L1977" class="blob-num js-line-number" data-line-number="1977"></td>
        <td id="LC1977" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L1978" class="blob-num js-line-number" data-line-number="1978"></td>
        <td id="LC1978" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1979" class="blob-num js-line-number" data-line-number="1979"></td>
        <td id="LC1979" class="blob-code js-file-line">        <span class="k">var</span> body <span class="o">=</span> $<span class="no">document</span>.<span class="nf">find</span>(<span class="s1">'body'</span>).eq(<span class="m">0</span>),</td>
      </tr>
      <tr>
        <td id="L1980" class="blob-num js-line-number" data-line-number="1980"></td>
        <td id="LC1980" class="blob-code js-file-line">            currBackdropIndex <span class="o">=</span> backdropIndex();</td>
      </tr>
      <tr>
        <td id="L1981" class="blob-num js-line-number" data-line-number="1981"></td>
        <td id="LC1981" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1982" class="blob-num js-line-number" data-line-number="1982"></td>
        <td id="LC1982" class="blob-code js-file-line">        <span class="k">if</span> (currBackdropIndex <span class="o">&gt;=</span> <span class="m">0</span> <span class="o">&amp;&amp;</span> <span class="o">!</span>backdropDomEl) {</td>
      </tr>
      <tr>
        <td id="L1983" class="blob-num js-line-number" data-line-number="1983"></td>
        <td id="LC1983" class="blob-code js-file-line">          backdropScope <span class="o">=</span> $rootScope.$<span class="o">new</span>(<span class="kc">true</span>);</td>
      </tr>
      <tr>
        <td id="L1984" class="blob-num js-line-number" data-line-number="1984"></td>
        <td id="LC1984" class="blob-code js-file-line">          backdropScope.<span class="no">index</span> <span class="o">=</span> currBackdropIndex;</td>
      </tr>
      <tr>
        <td id="L1985" class="blob-num js-line-number" data-line-number="1985"></td>
        <td id="LC1985" class="blob-code js-file-line">          backdropDomEl <span class="o">=</span> $<span class="nf">compile</span>(<span class="s1">'&lt;div modal-backdrop&gt;&lt;/div&gt;'</span>)(backdropScope);</td>
      </tr>
      <tr>
        <td id="L1986" class="blob-num js-line-number" data-line-number="1986"></td>
        <td id="LC1986" class="blob-code js-file-line">          body.append(backdropDomEl);</td>
      </tr>
      <tr>
        <td id="L1987" class="blob-num js-line-number" data-line-number="1987"></td>
        <td id="LC1987" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1988" class="blob-num js-line-number" data-line-number="1988"></td>
        <td id="LC1988" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1989" class="blob-num js-line-number" data-line-number="1989"></td>
        <td id="LC1989" class="blob-code js-file-line">        <span class="k">var</span> angularDomEl <span class="o">=</span> angular.element(<span class="s1">'&lt;div modal-window&gt;&lt;/div&gt;'</span>);</td>
      </tr>
      <tr>
        <td id="L1990" class="blob-num js-line-number" data-line-number="1990"></td>
        <td id="LC1990" class="blob-code js-file-line">        angularDomEl.attr({</td>
      </tr>
      <tr>
        <td id="L1991" class="blob-num js-line-number" data-line-number="1991"></td>
        <td id="LC1991" class="blob-code js-file-line">          <span class="s1">'template-url'</span><span class="o">:</span> modal.windowTemplateUrl,</td>
      </tr>
      <tr>
        <td id="L1992" class="blob-num js-line-number" data-line-number="1992"></td>
        <td id="LC1992" class="blob-code js-file-line">          <span class="s1">'window-class'</span><span class="o">:</span> modal.windowClass,</td>
      </tr>
      <tr>
        <td id="L1993" class="blob-num js-line-number" data-line-number="1993"></td>
        <td id="LC1993" class="blob-code js-file-line">          <span class="s1">'size'</span><span class="o">:</span> modal.<span class="no">size</span>,</td>
      </tr>
      <tr>
        <td id="L1994" class="blob-num js-line-number" data-line-number="1994"></td>
        <td id="LC1994" class="blob-code js-file-line">          <span class="s1">'index'</span><span class="o">:</span> openedWindows.<span class="no">length</span>() <span class="o">-</span> <span class="m">1</span>,</td>
      </tr>
      <tr>
        <td id="L1995" class="blob-num js-line-number" data-line-number="1995"></td>
        <td id="LC1995" class="blob-code js-file-line">          <span class="s1">'animate'</span><span class="o">:</span> <span class="s1">'animate'</span></td>
      </tr>
      <tr>
        <td id="L1996" class="blob-num js-line-number" data-line-number="1996"></td>
        <td id="LC1996" class="blob-code js-file-line">        }).html(modal.<span class="no">content</span>);</td>
      </tr>
      <tr>
        <td id="L1997" class="blob-num js-line-number" data-line-number="1997"></td>
        <td id="LC1997" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1998" class="blob-num js-line-number" data-line-number="1998"></td>
        <td id="LC1998" class="blob-code js-file-line">        <span class="k">var</span> modalDomEl <span class="o">=</span> $<span class="nf">compile</span>(angularDomEl)(modal.<span class="no">scope</span>);</td>
      </tr>
      <tr>
        <td id="L1999" class="blob-num js-line-number" data-line-number="1999"></td>
        <td id="LC1999" class="blob-code js-file-line">        openedWindows.<span class="no">top</span>().<span class="no">value</span>.modalDomEl <span class="o">=</span> modalDomEl;</td>
      </tr>
      <tr>
        <td id="L2000" class="blob-num js-line-number" data-line-number="2000"></td>
        <td id="LC2000" class="blob-code js-file-line">        body.append(modalDomEl);</td>
      </tr>
      <tr>
        <td id="L2001" class="blob-num js-line-number" data-line-number="2001"></td>
        <td id="LC2001" class="blob-code js-file-line">        body.addClass(OPENED_MODAL_CLASS);</td>
      </tr>
      <tr>
        <td id="L2002" class="blob-num js-line-number" data-line-number="2002"></td>
        <td id="LC2002" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L2003" class="blob-num js-line-number" data-line-number="2003"></td>
        <td id="LC2003" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2004" class="blob-num js-line-number" data-line-number="2004"></td>
        <td id="LC2004" class="blob-code js-file-line">      <span class="no">$modalStack</span>.<span class="nf">close</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">modalInstance</span>, <span class="nv">result</span>) {</td>
      </tr>
      <tr>
        <td id="L2005" class="blob-num js-line-number" data-line-number="2005"></td>
        <td id="LC2005" class="blob-code js-file-line">        <span class="k">var</span> modalWindow <span class="o">=</span> openedWindows.get(modalInstance).<span class="no">value</span>;</td>
      </tr>
      <tr>
        <td id="L2006" class="blob-num js-line-number" data-line-number="2006"></td>
        <td id="LC2006" class="blob-code js-file-line">        <span class="k">if</span> (modalWindow) {</td>
      </tr>
      <tr>
        <td id="L2007" class="blob-num js-line-number" data-line-number="2007"></td>
        <td id="LC2007" class="blob-code js-file-line">          modalWindow.deferred.resolve(result);</td>
      </tr>
      <tr>
        <td id="L2008" class="blob-num js-line-number" data-line-number="2008"></td>
        <td id="LC2008" class="blob-code js-file-line">          removeModalWindow(modalInstance);</td>
      </tr>
      <tr>
        <td id="L2009" class="blob-num js-line-number" data-line-number="2009"></td>
        <td id="LC2009" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L2010" class="blob-num js-line-number" data-line-number="2010"></td>
        <td id="LC2010" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L2011" class="blob-num js-line-number" data-line-number="2011"></td>
        <td id="LC2011" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2012" class="blob-num js-line-number" data-line-number="2012"></td>
        <td id="LC2012" class="blob-code js-file-line">      <span class="no">$modalStack</span>.<span class="nf">dismiss</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">modalInstance</span>, <span class="nv">reason</span>) {</td>
      </tr>
      <tr>
        <td id="L2013" class="blob-num js-line-number" data-line-number="2013"></td>
        <td id="LC2013" class="blob-code js-file-line">        <span class="k">var</span> modalWindow <span class="o">=</span> openedWindows.get(modalInstance).<span class="no">value</span>;</td>
      </tr>
      <tr>
        <td id="L2014" class="blob-num js-line-number" data-line-number="2014"></td>
        <td id="LC2014" class="blob-code js-file-line">        <span class="k">if</span> (modalWindow) {</td>
      </tr>
      <tr>
        <td id="L2015" class="blob-num js-line-number" data-line-number="2015"></td>
        <td id="LC2015" class="blob-code js-file-line">          modalWindow.deferred.reject(reason);</td>
      </tr>
      <tr>
        <td id="L2016" class="blob-num js-line-number" data-line-number="2016"></td>
        <td id="LC2016" class="blob-code js-file-line">          removeModalWindow(modalInstance);</td>
      </tr>
      <tr>
        <td id="L2017" class="blob-num js-line-number" data-line-number="2017"></td>
        <td id="LC2017" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L2018" class="blob-num js-line-number" data-line-number="2018"></td>
        <td id="LC2018" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L2019" class="blob-num js-line-number" data-line-number="2019"></td>
        <td id="LC2019" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2020" class="blob-num js-line-number" data-line-number="2020"></td>
        <td id="LC2020" class="blob-code js-file-line">      <span class="no">$modalStack</span>.<span class="nf">dismissAll</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">reason</span>) {</td>
      </tr>
      <tr>
        <td id="L2021" class="blob-num js-line-number" data-line-number="2021"></td>
        <td id="LC2021" class="blob-code js-file-line">        <span class="k">var</span> topModal <span class="o">=</span> <span class="nb">this</span>.getTop();</td>
      </tr>
      <tr>
        <td id="L2022" class="blob-num js-line-number" data-line-number="2022"></td>
        <td id="LC2022" class="blob-code js-file-line">        <span class="k">while</span> (topModal) {</td>
      </tr>
      <tr>
        <td id="L2023" class="blob-num js-line-number" data-line-number="2023"></td>
        <td id="LC2023" class="blob-code js-file-line">          <span class="nb">this</span>.dismiss(topModal.key, reason);</td>
      </tr>
      <tr>
        <td id="L2024" class="blob-num js-line-number" data-line-number="2024"></td>
        <td id="LC2024" class="blob-code js-file-line">          topModal <span class="o">=</span> <span class="nb">this</span>.getTop();</td>
      </tr>
      <tr>
        <td id="L2025" class="blob-num js-line-number" data-line-number="2025"></td>
        <td id="LC2025" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L2026" class="blob-num js-line-number" data-line-number="2026"></td>
        <td id="LC2026" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L2027" class="blob-num js-line-number" data-line-number="2027"></td>
        <td id="LC2027" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2028" class="blob-num js-line-number" data-line-number="2028"></td>
        <td id="LC2028" class="blob-code js-file-line">      <span class="no">$modalStack</span>.<span class="nf">getTop</span> <span class="o">=</span> <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2029" class="blob-num js-line-number" data-line-number="2029"></td>
        <td id="LC2029" class="blob-code js-file-line">        <span class="k">return</span> openedWindows.<span class="no">top</span>();</td>
      </tr>
      <tr>
        <td id="L2030" class="blob-num js-line-number" data-line-number="2030"></td>
        <td id="LC2030" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L2031" class="blob-num js-line-number" data-line-number="2031"></td>
        <td id="LC2031" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2032" class="blob-num js-line-number" data-line-number="2032"></td>
        <td id="LC2032" class="blob-code js-file-line">      <span class="k">return</span> $modalStack;</td>
      </tr>
      <tr>
        <td id="L2033" class="blob-num js-line-number" data-line-number="2033"></td>
        <td id="LC2033" class="blob-code js-file-line">    }])</td>
      </tr>
      <tr>
        <td id="L2034" class="blob-num js-line-number" data-line-number="2034"></td>
        <td id="LC2034" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2035" class="blob-num js-line-number" data-line-number="2035"></td>
        <td id="LC2035" class="blob-code js-file-line">  .provider(<span class="s1">'$modal'</span>, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2036" class="blob-num js-line-number" data-line-number="2036"></td>
        <td id="LC2036" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2037" class="blob-num js-line-number" data-line-number="2037"></td>
        <td id="LC2037" class="blob-code js-file-line">    <span class="k">var</span> $modalProvider <span class="o">=</span> {</td>
      </tr>
      <tr>
        <td id="L2038" class="blob-num js-line-number" data-line-number="2038"></td>
        <td id="LC2038" class="blob-code js-file-line">      options<span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L2039" class="blob-num js-line-number" data-line-number="2039"></td>
        <td id="LC2039" class="blob-code js-file-line">        backdrop<span class="o">:</span> <span class="kc">true</span>, <span class="c1">//can be also false or 'static'</span></td>
      </tr>
      <tr>
        <td id="L2040" class="blob-num js-line-number" data-line-number="2040"></td>
        <td id="LC2040" class="blob-code js-file-line">        keyboard<span class="o">:</span> <span class="kc">true</span></td>
      </tr>
      <tr>
        <td id="L2041" class="blob-num js-line-number" data-line-number="2041"></td>
        <td id="LC2041" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L2042" class="blob-num js-line-number" data-line-number="2042"></td>
        <td id="LC2042" class="blob-code js-file-line">      $get<span class="o">:</span> [<span class="s1">'$injector'</span>, <span class="s1">'$rootScope'</span>, <span class="s1">'$q'</span>, <span class="s1">'$http'</span>, <span class="s1">'$templateCache'</span>, <span class="s1">'$controller'</span>, <span class="s1">'$modalStack'</span>,</td>
      </tr>
      <tr>
        <td id="L2043" class="blob-num js-line-number" data-line-number="2043"></td>
        <td id="LC2043" class="blob-code js-file-line">        <span class="kt">function</span> (<span class="nv">$injector</span>, <span class="nv">$rootScope</span>, <span class="nv">$q</span>, <span class="nv">$http</span>, <span class="nv">$templateCache</span>, <span class="nv">$controller</span>, <span class="nv">$modalStack</span>) {</td>
      </tr>
      <tr>
        <td id="L2044" class="blob-num js-line-number" data-line-number="2044"></td>
        <td id="LC2044" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2045" class="blob-num js-line-number" data-line-number="2045"></td>
        <td id="LC2045" class="blob-code js-file-line">          <span class="k">var</span> $modal <span class="o">=</span> {};</td>
      </tr>
      <tr>
        <td id="L2046" class="blob-num js-line-number" data-line-number="2046"></td>
        <td id="LC2046" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2047" class="blob-num js-line-number" data-line-number="2047"></td>
        <td id="LC2047" class="blob-code js-file-line">          <span class="kt">function</span> <span class="nf">getTemplatePromise</span>(<span class="nv">options</span>) {</td>
      </tr>
      <tr>
        <td id="L2048" class="blob-num js-line-number" data-line-number="2048"></td>
        <td id="LC2048" class="blob-code js-file-line">            <span class="k">return</span> options.template <span class="o">?</span> $q.when(options.template) <span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L2049" class="blob-num js-line-number" data-line-number="2049"></td>
        <td id="LC2049" class="blob-code js-file-line">              $http.get(options.templateUrl, {cache<span class="o">:</span> $templateCache}).then(<span class="kt">function</span> (<span class="nv">result</span>) {</td>
      </tr>
      <tr>
        <td id="L2050" class="blob-num js-line-number" data-line-number="2050"></td>
        <td id="LC2050" class="blob-code js-file-line">                <span class="k">return</span> result.<span class="no">data</span>;</td>
      </tr>
      <tr>
        <td id="L2051" class="blob-num js-line-number" data-line-number="2051"></td>
        <td id="LC2051" class="blob-code js-file-line">              });</td>
      </tr>
      <tr>
        <td id="L2052" class="blob-num js-line-number" data-line-number="2052"></td>
        <td id="LC2052" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L2053" class="blob-num js-line-number" data-line-number="2053"></td>
        <td id="LC2053" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2054" class="blob-num js-line-number" data-line-number="2054"></td>
        <td id="LC2054" class="blob-code js-file-line">          <span class="kt">function</span> <span class="nf">getResolvePromises</span>(<span class="nv">resolves</span>) {</td>
      </tr>
      <tr>
        <td id="L2055" class="blob-num js-line-number" data-line-number="2055"></td>
        <td id="LC2055" class="blob-code js-file-line">            <span class="k">var</span> promisesArr <span class="o">=</span> [];</td>
      </tr>
      <tr>
        <td id="L2056" class="blob-num js-line-number" data-line-number="2056"></td>
        <td id="LC2056" class="blob-code js-file-line">            angular.forEach(resolves, <span class="kt">function</span> (<span class="nv">value</span>, <span class="nv">key</span>) {</td>
      </tr>
      <tr>
        <td id="L2057" class="blob-num js-line-number" data-line-number="2057"></td>
        <td id="LC2057" class="blob-code js-file-line">              <span class="k">if</span> (angular.isFunction(value) <span class="o">||</span> angular.isArray(value)) {</td>
      </tr>
      <tr>
        <td id="L2058" class="blob-num js-line-number" data-line-number="2058"></td>
        <td id="LC2058" class="blob-code js-file-line">                promisesArr.<span class="nf">push</span>($q.when($injector.invoke(value)));</td>
      </tr>
      <tr>
        <td id="L2059" class="blob-num js-line-number" data-line-number="2059"></td>
        <td id="LC2059" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L2060" class="blob-num js-line-number" data-line-number="2060"></td>
        <td id="LC2060" class="blob-code js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L2061" class="blob-num js-line-number" data-line-number="2061"></td>
        <td id="LC2061" class="blob-code js-file-line">            <span class="k">return</span> promisesArr;</td>
      </tr>
      <tr>
        <td id="L2062" class="blob-num js-line-number" data-line-number="2062"></td>
        <td id="LC2062" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L2063" class="blob-num js-line-number" data-line-number="2063"></td>
        <td id="LC2063" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2064" class="blob-num js-line-number" data-line-number="2064"></td>
        <td id="LC2064" class="blob-code js-file-line">          <span class="no">$modal</span>.<span class="nf">open</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">modalOptions</span>) {</td>
      </tr>
      <tr>
        <td id="L2065" class="blob-num js-line-number" data-line-number="2065"></td>
        <td id="LC2065" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2066" class="blob-num js-line-number" data-line-number="2066"></td>
        <td id="LC2066" class="blob-code js-file-line">            <span class="k">var</span> modalResultDeferred <span class="o">=</span> $q.<span class="no">defer</span>();</td>
      </tr>
      <tr>
        <td id="L2067" class="blob-num js-line-number" data-line-number="2067"></td>
        <td id="LC2067" class="blob-code js-file-line">            <span class="k">var</span> modalOpenedDeferred <span class="o">=</span> $q.<span class="no">defer</span>();</td>
      </tr>
      <tr>
        <td id="L2068" class="blob-num js-line-number" data-line-number="2068"></td>
        <td id="LC2068" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2069" class="blob-num js-line-number" data-line-number="2069"></td>
        <td id="LC2069" class="blob-code js-file-line">            <span class="c1">//prepare an instance of a modal to be injected into controllers and returned to a caller</span></td>
      </tr>
      <tr>
        <td id="L2070" class="blob-num js-line-number" data-line-number="2070"></td>
        <td id="LC2070" class="blob-code js-file-line">            <span class="k">var</span> modalInstance <span class="o">=</span> {</td>
      </tr>
      <tr>
        <td id="L2071" class="blob-num js-line-number" data-line-number="2071"></td>
        <td id="LC2071" class="blob-code js-file-line">              result<span class="o">:</span> modalResultDeferred.promise,</td>
      </tr>
      <tr>
        <td id="L2072" class="blob-num js-line-number" data-line-number="2072"></td>
        <td id="LC2072" class="blob-code js-file-line">              opened<span class="o">:</span> modalOpenedDeferred.promise,</td>
      </tr>
      <tr>
        <td id="L2073" class="blob-num js-line-number" data-line-number="2073"></td>
        <td id="LC2073" class="blob-code js-file-line">              <span class="nf">close</span>: <span class="kt">function</span> (<span class="nv">result</span>) {</td>
      </tr>
      <tr>
        <td id="L2074" class="blob-num js-line-number" data-line-number="2074"></td>
        <td id="LC2074" class="blob-code js-file-line">                $modalStack.<span class="nf">close</span>(modalInstance, result);</td>
      </tr>
      <tr>
        <td id="L2075" class="blob-num js-line-number" data-line-number="2075"></td>
        <td id="LC2075" class="blob-code js-file-line">              },</td>
      </tr>
      <tr>
        <td id="L2076" class="blob-num js-line-number" data-line-number="2076"></td>
        <td id="LC2076" class="blob-code js-file-line">              <span class="nf">dismiss</span>: <span class="kt">function</span> (<span class="nv">reason</span>) {</td>
      </tr>
      <tr>
        <td id="L2077" class="blob-num js-line-number" data-line-number="2077"></td>
        <td id="LC2077" class="blob-code js-file-line">                $modalStack.dismiss(modalInstance, reason);</td>
      </tr>
      <tr>
        <td id="L2078" class="blob-num js-line-number" data-line-number="2078"></td>
        <td id="LC2078" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L2079" class="blob-num js-line-number" data-line-number="2079"></td>
        <td id="LC2079" class="blob-code js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L2080" class="blob-num js-line-number" data-line-number="2080"></td>
        <td id="LC2080" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2081" class="blob-num js-line-number" data-line-number="2081"></td>
        <td id="LC2081" class="blob-code js-file-line">            <span class="c1">//merge and clean up options</span></td>
      </tr>
      <tr>
        <td id="L2082" class="blob-num js-line-number" data-line-number="2082"></td>
        <td id="LC2082" class="blob-code js-file-line">            modalOptions <span class="o">=</span> angular.extend({}, $modalProvider.<span class="no">options</span>, modalOptions);</td>
      </tr>
      <tr>
        <td id="L2083" class="blob-num js-line-number" data-line-number="2083"></td>
        <td id="LC2083" class="blob-code js-file-line">            modalOptions.resolve <span class="o">=</span> modalOptions.resolve <span class="o">||</span> {};</td>
      </tr>
      <tr>
        <td id="L2084" class="blob-num js-line-number" data-line-number="2084"></td>
        <td id="LC2084" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2085" class="blob-num js-line-number" data-line-number="2085"></td>
        <td id="LC2085" class="blob-code js-file-line">            <span class="c1">//verify options</span></td>
      </tr>
      <tr>
        <td id="L2086" class="blob-num js-line-number" data-line-number="2086"></td>
        <td id="LC2086" class="blob-code js-file-line">            <span class="k">if</span> (<span class="o">!</span>modalOptions.template <span class="o">&amp;&amp;</span> <span class="o">!</span>modalOptions.templateUrl) {</td>
      </tr>
      <tr>
        <td id="L2087" class="blob-num js-line-number" data-line-number="2087"></td>
        <td id="LC2087" class="blob-code js-file-line">              <span class="k">throw</span> <span class="o">new</span> <span class="nc">Error</span>(<span class="s1">'One of template or templateUrl options is required.'</span>);</td>
      </tr>
      <tr>
        <td id="L2088" class="blob-num js-line-number" data-line-number="2088"></td>
        <td id="LC2088" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2089" class="blob-num js-line-number" data-line-number="2089"></td>
        <td id="LC2089" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2090" class="blob-num js-line-number" data-line-number="2090"></td>
        <td id="LC2090" class="blob-code js-file-line">            <span class="k">var</span> templateAndResolvePromise <span class="o">=</span></td>
      </tr>
      <tr>
        <td id="L2091" class="blob-num js-line-number" data-line-number="2091"></td>
        <td id="LC2091" class="blob-code js-file-line">              $q.<span class="no">all</span>([getTemplatePromise(modalOptions)].<span class="nf">concat</span>(getResolvePromises(modalOptions.resolve)));</td>
      </tr>
      <tr>
        <td id="L2092" class="blob-num js-line-number" data-line-number="2092"></td>
        <td id="LC2092" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2093" class="blob-num js-line-number" data-line-number="2093"></td>
        <td id="LC2093" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2094" class="blob-num js-line-number" data-line-number="2094"></td>
        <td id="LC2094" class="blob-code js-file-line">            templateAndResolvePromise.then(<span class="kt">function</span> <span class="nf">resolveSuccess</span>(<span class="nv">tplAndVars</span>) {</td>
      </tr>
      <tr>
        <td id="L2095" class="blob-num js-line-number" data-line-number="2095"></td>
        <td id="LC2095" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2096" class="blob-num js-line-number" data-line-number="2096"></td>
        <td id="LC2096" class="blob-code js-file-line">              <span class="k">var</span> modalScope <span class="o">=</span> (modalOptions.<span class="no">scope</span> <span class="o">||</span> $rootScope).$<span class="o">new</span>();</td>
      </tr>
      <tr>
        <td id="L2097" class="blob-num js-line-number" data-line-number="2097"></td>
        <td id="LC2097" class="blob-code js-file-line">              modalScope.$close <span class="o">=</span> modalInstance.close;</td>
      </tr>
      <tr>
        <td id="L2098" class="blob-num js-line-number" data-line-number="2098"></td>
        <td id="LC2098" class="blob-code js-file-line">              modalScope.$dismiss <span class="o">=</span> modalInstance.dismiss;</td>
      </tr>
      <tr>
        <td id="L2099" class="blob-num js-line-number" data-line-number="2099"></td>
        <td id="LC2099" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2100" class="blob-num js-line-number" data-line-number="2100"></td>
        <td id="LC2100" class="blob-code js-file-line">              <span class="k">var</span> ctrlInstance, ctrlLocals <span class="o">=</span> {};</td>
      </tr>
      <tr>
        <td id="L2101" class="blob-num js-line-number" data-line-number="2101"></td>
        <td id="LC2101" class="blob-code js-file-line">              <span class="k">var</span> resolveIter <span class="o">=</span> <span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L2102" class="blob-num js-line-number" data-line-number="2102"></td>
        <td id="LC2102" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2103" class="blob-num js-line-number" data-line-number="2103"></td>
        <td id="LC2103" class="blob-code js-file-line">              <span class="c1">//controllers</span></td>
      </tr>
      <tr>
        <td id="L2104" class="blob-num js-line-number" data-line-number="2104"></td>
        <td id="LC2104" class="blob-code js-file-line">              <span class="k">if</span> (modalOptions.controller) {</td>
      </tr>
      <tr>
        <td id="L2105" class="blob-num js-line-number" data-line-number="2105"></td>
        <td id="LC2105" class="blob-code js-file-line">                ctrlLocals.$scope <span class="o">=</span> modalScope;</td>
      </tr>
      <tr>
        <td id="L2106" class="blob-num js-line-number" data-line-number="2106"></td>
        <td id="LC2106" class="blob-code js-file-line">                ctrlLocals.$modalInstance <span class="o">=</span> modalInstance;</td>
      </tr>
      <tr>
        <td id="L2107" class="blob-num js-line-number" data-line-number="2107"></td>
        <td id="LC2107" class="blob-code js-file-line">                angular.forEach(modalOptions.resolve, <span class="kt">function</span> (<span class="nv">value</span>, <span class="nv">key</span>) {</td>
      </tr>
      <tr>
        <td id="L2108" class="blob-num js-line-number" data-line-number="2108"></td>
        <td id="LC2108" class="blob-code js-file-line">                  ctrlLocals[key] <span class="o">=</span> tplAndVars[resolveIter<span class="o">++</span>];</td>
      </tr>
      <tr>
        <td id="L2109" class="blob-num js-line-number" data-line-number="2109"></td>
        <td id="LC2109" class="blob-code js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L2110" class="blob-num js-line-number" data-line-number="2110"></td>
        <td id="LC2110" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2111" class="blob-num js-line-number" data-line-number="2111"></td>
        <td id="LC2111" class="blob-code js-file-line">                ctrlInstance <span class="o">=</span> $controller(modalOptions.controller, ctrlLocals);</td>
      </tr>
      <tr>
        <td id="L2112" class="blob-num js-line-number" data-line-number="2112"></td>
        <td id="LC2112" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L2113" class="blob-num js-line-number" data-line-number="2113"></td>
        <td id="LC2113" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2114" class="blob-num js-line-number" data-line-number="2114"></td>
        <td id="LC2114" class="blob-code js-file-line">              $modalStack.<span class="nf">open</span>(modalInstance, {</td>
      </tr>
      <tr>
        <td id="L2115" class="blob-num js-line-number" data-line-number="2115"></td>
        <td id="LC2115" class="blob-code js-file-line">                scope<span class="o">:</span> modalScope,</td>
      </tr>
      <tr>
        <td id="L2116" class="blob-num js-line-number" data-line-number="2116"></td>
        <td id="LC2116" class="blob-code js-file-line">                deferred<span class="o">:</span> modalResultDeferred,</td>
      </tr>
      <tr>
        <td id="L2117" class="blob-num js-line-number" data-line-number="2117"></td>
        <td id="LC2117" class="blob-code js-file-line">                content<span class="o">:</span> tplAndVars[<span class="m">0</span>],</td>
      </tr>
      <tr>
        <td id="L2118" class="blob-num js-line-number" data-line-number="2118"></td>
        <td id="LC2118" class="blob-code js-file-line">                backdrop<span class="o">:</span> modalOptions.backdrop,</td>
      </tr>
      <tr>
        <td id="L2119" class="blob-num js-line-number" data-line-number="2119"></td>
        <td id="LC2119" class="blob-code js-file-line">                keyboard<span class="o">:</span> modalOptions.keyboard,</td>
      </tr>
      <tr>
        <td id="L2120" class="blob-num js-line-number" data-line-number="2120"></td>
        <td id="LC2120" class="blob-code js-file-line">                windowClass<span class="o">:</span> modalOptions.windowClass,</td>
      </tr>
      <tr>
        <td id="L2121" class="blob-num js-line-number" data-line-number="2121"></td>
        <td id="LC2121" class="blob-code js-file-line">                windowTemplateUrl<span class="o">:</span> modalOptions.windowTemplateUrl,</td>
      </tr>
      <tr>
        <td id="L2122" class="blob-num js-line-number" data-line-number="2122"></td>
        <td id="LC2122" class="blob-code js-file-line">                size<span class="o">:</span> modalOptions.<span class="no">size</span></td>
      </tr>
      <tr>
        <td id="L2123" class="blob-num js-line-number" data-line-number="2123"></td>
        <td id="LC2123" class="blob-code js-file-line">              });</td>
      </tr>
      <tr>
        <td id="L2124" class="blob-num js-line-number" data-line-number="2124"></td>
        <td id="LC2124" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2125" class="blob-num js-line-number" data-line-number="2125"></td>
        <td id="LC2125" class="blob-code js-file-line">            }, <span class="kt">function</span> <span class="nf">resolveError</span>(<span class="nv">reason</span>) {</td>
      </tr>
      <tr>
        <td id="L2126" class="blob-num js-line-number" data-line-number="2126"></td>
        <td id="LC2126" class="blob-code js-file-line">              modalResultDeferred.reject(reason);</td>
      </tr>
      <tr>
        <td id="L2127" class="blob-num js-line-number" data-line-number="2127"></td>
        <td id="LC2127" class="blob-code js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L2128" class="blob-num js-line-number" data-line-number="2128"></td>
        <td id="LC2128" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2129" class="blob-num js-line-number" data-line-number="2129"></td>
        <td id="LC2129" class="blob-code js-file-line">            templateAndResolvePromise.then(<span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2130" class="blob-num js-line-number" data-line-number="2130"></td>
        <td id="LC2130" class="blob-code js-file-line">              modalOpenedDeferred.resolve(<span class="kc">true</span>);</td>
      </tr>
      <tr>
        <td id="L2131" class="blob-num js-line-number" data-line-number="2131"></td>
        <td id="LC2131" class="blob-code js-file-line">            }, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2132" class="blob-num js-line-number" data-line-number="2132"></td>
        <td id="LC2132" class="blob-code js-file-line">              modalOpenedDeferred.reject(<span class="kc">false</span>);</td>
      </tr>
      <tr>
        <td id="L2133" class="blob-num js-line-number" data-line-number="2133"></td>
        <td id="LC2133" class="blob-code js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L2134" class="blob-num js-line-number" data-line-number="2134"></td>
        <td id="LC2134" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2135" class="blob-num js-line-number" data-line-number="2135"></td>
        <td id="LC2135" class="blob-code js-file-line">            <span class="k">return</span> modalInstance;</td>
      </tr>
      <tr>
        <td id="L2136" class="blob-num js-line-number" data-line-number="2136"></td>
        <td id="LC2136" class="blob-code js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L2137" class="blob-num js-line-number" data-line-number="2137"></td>
        <td id="LC2137" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2138" class="blob-num js-line-number" data-line-number="2138"></td>
        <td id="LC2138" class="blob-code js-file-line">          <span class="k">return</span> $modal;</td>
      </tr>
      <tr>
        <td id="L2139" class="blob-num js-line-number" data-line-number="2139"></td>
        <td id="LC2139" class="blob-code js-file-line">        }]</td>
      </tr>
      <tr>
        <td id="L2140" class="blob-num js-line-number" data-line-number="2140"></td>
        <td id="LC2140" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L2141" class="blob-num js-line-number" data-line-number="2141"></td>
        <td id="LC2141" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2142" class="blob-num js-line-number" data-line-number="2142"></td>
        <td id="LC2142" class="blob-code js-file-line">    <span class="k">return</span> $modalProvider;</td>
      </tr>
      <tr>
        <td id="L2143" class="blob-num js-line-number" data-line-number="2143"></td>
        <td id="LC2143" class="blob-code js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L2144" class="blob-num js-line-number" data-line-number="2144"></td>
        <td id="LC2144" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2145" class="blob-num js-line-number" data-line-number="2145"></td>
        <td id="LC2145" class="blob-code js-file-line">angular.module(<span class="s1">'ui.bootstrap.pagination'</span>, [])</td>
      </tr>
      <tr>
        <td id="L2146" class="blob-num js-line-number" data-line-number="2146"></td>
        <td id="LC2146" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2147" class="blob-num js-line-number" data-line-number="2147"></td>
        <td id="LC2147" class="blob-code js-file-line">.controller(<span class="s1">'PaginationController'</span>, [<span class="s1">'$scope'</span>, <span class="s1">'$attrs'</span>, <span class="s1">'$parse'</span>, <span class="kt">function</span> (<span class="nv">$scope</span>, <span class="nv">$attrs</span>, <span class="nv">$parse</span>) {</td>
      </tr>
      <tr>
        <td id="L2148" class="blob-num js-line-number" data-line-number="2148"></td>
        <td id="LC2148" class="blob-code js-file-line">  <span class="k">var</span> self <span class="o">=</span> <span class="nb">this</span>,</td>
      </tr>
      <tr>
        <td id="L2149" class="blob-num js-line-number" data-line-number="2149"></td>
        <td id="LC2149" class="blob-code js-file-line">      ngModelCtrl <span class="o">=</span> { $setViewValue<span class="o">:</span> angular.noop }, <span class="c1">// nullModelCtrl</span></td>
      </tr>
      <tr>
        <td id="L2150" class="blob-num js-line-number" data-line-number="2150"></td>
        <td id="LC2150" class="blob-code js-file-line">      setNumPages <span class="o">=</span> $attrs.numPages <span class="o">?</span> $<span class="nf">parse</span>($attrs.numPages).assign <span class="o">:</span> angular.noop;</td>
      </tr>
      <tr>
        <td id="L2151" class="blob-num js-line-number" data-line-number="2151"></td>
        <td id="LC2151" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2152" class="blob-num js-line-number" data-line-number="2152"></td>
        <td id="LC2152" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">init</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">ngModelCtrl_</span>, <span class="nv">config</span>) {</td>
      </tr>
      <tr>
        <td id="L2153" class="blob-num js-line-number" data-line-number="2153"></td>
        <td id="LC2153" class="blob-code js-file-line">    ngModelCtrl <span class="o">=</span> ngModelCtrl_;</td>
      </tr>
      <tr>
        <td id="L2154" class="blob-num js-line-number" data-line-number="2154"></td>
        <td id="LC2154" class="blob-code js-file-line">    <span class="nb">this</span>.config <span class="o">=</span> config;</td>
      </tr>
      <tr>
        <td id="L2155" class="blob-num js-line-number" data-line-number="2155"></td>
        <td id="LC2155" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2156" class="blob-num js-line-number" data-line-number="2156"></td>
        <td id="LC2156" class="blob-code js-file-line">    <span class="no">ngModelCtrl</span>.<span class="nf">$render</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2157" class="blob-num js-line-number" data-line-number="2157"></td>
        <td id="LC2157" class="blob-code js-file-line">      self.render();</td>
      </tr>
      <tr>
        <td id="L2158" class="blob-num js-line-number" data-line-number="2158"></td>
        <td id="LC2158" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L2159" class="blob-num js-line-number" data-line-number="2159"></td>
        <td id="LC2159" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2160" class="blob-num js-line-number" data-line-number="2160"></td>
        <td id="LC2160" class="blob-code js-file-line">    <span class="k">if</span> ($attrs.itemsPerPage) {</td>
      </tr>
      <tr>
        <td id="L2161" class="blob-num js-line-number" data-line-number="2161"></td>
        <td id="LC2161" class="blob-code js-file-line">      $scope.$parent.$<span class="nf">watch</span>($<span class="nf">parse</span>($attrs.itemsPerPage), <span class="kt">function</span>(<span class="nv">value</span>) {</td>
      </tr>
      <tr>
        <td id="L2162" class="blob-num js-line-number" data-line-number="2162"></td>
        <td id="LC2162" class="blob-code js-file-line">        self.itemsPerPage <span class="o">=</span> <span class="nf">parseInt</span>(value, <span class="m">10</span>);</td>
      </tr>
      <tr>
        <td id="L2163" class="blob-num js-line-number" data-line-number="2163"></td>
        <td id="LC2163" class="blob-code js-file-line">        $scope.totalPages <span class="o">=</span> self.calculateTotalPages();</td>
      </tr>
      <tr>
        <td id="L2164" class="blob-num js-line-number" data-line-number="2164"></td>
        <td id="LC2164" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L2165" class="blob-num js-line-number" data-line-number="2165"></td>
        <td id="LC2165" class="blob-code js-file-line">    } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2166" class="blob-num js-line-number" data-line-number="2166"></td>
        <td id="LC2166" class="blob-code js-file-line">      <span class="nb">this</span>.itemsPerPage <span class="o">=</span> config.itemsPerPage;</td>
      </tr>
      <tr>
        <td id="L2167" class="blob-num js-line-number" data-line-number="2167"></td>
        <td id="LC2167" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2168" class="blob-num js-line-number" data-line-number="2168"></td>
        <td id="LC2168" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2169" class="blob-num js-line-number" data-line-number="2169"></td>
        <td id="LC2169" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2170" class="blob-num js-line-number" data-line-number="2170"></td>
        <td id="LC2170" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">calculateTotalPages</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2171" class="blob-num js-line-number" data-line-number="2171"></td>
        <td id="LC2171" class="blob-code js-file-line">    <span class="k">var</span> totalPages <span class="o">=</span> <span class="nb">this</span>.itemsPerPage <span class="o">&lt;</span> <span class="m">1</span> <span class="o">?</span> <span class="m">1</span> <span class="o">:</span> <span class="no">Math</span>.<span class="nf">ceil</span>($scope.totalItems / <span class="nb">this</span>.itemsPerPage);</td>
      </tr>
      <tr>
        <td id="L2172" class="blob-num js-line-number" data-line-number="2172"></td>
        <td id="LC2172" class="blob-code js-file-line">    <span class="k">return</span> <span class="no">Math</span>.<span class="nf">max</span>(totalPages <span class="o">||</span> <span class="m">0</span>, <span class="m">1</span>);</td>
      </tr>
      <tr>
        <td id="L2173" class="blob-num js-line-number" data-line-number="2173"></td>
        <td id="LC2173" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2174" class="blob-num js-line-number" data-line-number="2174"></td>
        <td id="LC2174" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2175" class="blob-num js-line-number" data-line-number="2175"></td>
        <td id="LC2175" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">render</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2176" class="blob-num js-line-number" data-line-number="2176"></td>
        <td id="LC2176" class="blob-code js-file-line">    $scope.page <span class="o">=</span> <span class="nf">parseInt</span>(ngModelCtrl.$viewValue, <span class="m">10</span>) <span class="o">||</span> <span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L2177" class="blob-num js-line-number" data-line-number="2177"></td>
        <td id="LC2177" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2178" class="blob-num js-line-number" data-line-number="2178"></td>
        <td id="LC2178" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2179" class="blob-num js-line-number" data-line-number="2179"></td>
        <td id="LC2179" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">selectPage</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">page</span>) {</td>
      </tr>
      <tr>
        <td id="L2180" class="blob-num js-line-number" data-line-number="2180"></td>
        <td id="LC2180" class="blob-code js-file-line">    <span class="k">if</span> ( $scope.page <span class="o">!==</span> page <span class="o">&amp;&amp;</span> page <span class="o">&gt;</span> <span class="m">0</span> <span class="o">&amp;&amp;</span> page <span class="o">&lt;=</span> $scope.totalPages) {</td>
      </tr>
      <tr>
        <td id="L2181" class="blob-num js-line-number" data-line-number="2181"></td>
        <td id="LC2181" class="blob-code js-file-line">      ngModelCtrl.$setViewValue(page);</td>
      </tr>
      <tr>
        <td id="L2182" class="blob-num js-line-number" data-line-number="2182"></td>
        <td id="LC2182" class="blob-code js-file-line">      ngModelCtrl.$render();</td>
      </tr>
      <tr>
        <td id="L2183" class="blob-num js-line-number" data-line-number="2183"></td>
        <td id="LC2183" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2184" class="blob-num js-line-number" data-line-number="2184"></td>
        <td id="LC2184" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2185" class="blob-num js-line-number" data-line-number="2185"></td>
        <td id="LC2185" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2186" class="blob-num js-line-number" data-line-number="2186"></td>
        <td id="LC2186" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">getText</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">key</span> ) {</td>
      </tr>
      <tr>
        <td id="L2187" class="blob-num js-line-number" data-line-number="2187"></td>
        <td id="LC2187" class="blob-code js-file-line">    <span class="k">return</span> $scope[key <span class="o">+</span> <span class="s1">'Text'</span>] <span class="o">||</span> self.config[key <span class="o">+</span> <span class="s1">'Text'</span>];</td>
      </tr>
      <tr>
        <td id="L2188" class="blob-num js-line-number" data-line-number="2188"></td>
        <td id="LC2188" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2189" class="blob-num js-line-number" data-line-number="2189"></td>
        <td id="LC2189" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">noPrevious</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2190" class="blob-num js-line-number" data-line-number="2190"></td>
        <td id="LC2190" class="blob-code js-file-line">    <span class="k">return</span> $scope.page <span class="o">===</span> <span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L2191" class="blob-num js-line-number" data-line-number="2191"></td>
        <td id="LC2191" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2192" class="blob-num js-line-number" data-line-number="2192"></td>
        <td id="LC2192" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">noNext</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2193" class="blob-num js-line-number" data-line-number="2193"></td>
        <td id="LC2193" class="blob-code js-file-line">    <span class="k">return</span> $scope.page <span class="o">===</span> $scope.totalPages;</td>
      </tr>
      <tr>
        <td id="L2194" class="blob-num js-line-number" data-line-number="2194"></td>
        <td id="LC2194" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2195" class="blob-num js-line-number" data-line-number="2195"></td>
        <td id="LC2195" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2196" class="blob-num js-line-number" data-line-number="2196"></td>
        <td id="LC2196" class="blob-code js-file-line">  $scope.$<span class="nf">watch</span>(<span class="s1">'totalItems'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2197" class="blob-num js-line-number" data-line-number="2197"></td>
        <td id="LC2197" class="blob-code js-file-line">    $scope.totalPages <span class="o">=</span> self.calculateTotalPages();</td>
      </tr>
      <tr>
        <td id="L2198" class="blob-num js-line-number" data-line-number="2198"></td>
        <td id="LC2198" class="blob-code js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L2199" class="blob-num js-line-number" data-line-number="2199"></td>
        <td id="LC2199" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2200" class="blob-num js-line-number" data-line-number="2200"></td>
        <td id="LC2200" class="blob-code js-file-line">  $scope.$<span class="nf">watch</span>(<span class="s1">'totalPages'</span>, <span class="kt">function</span>(<span class="nv">value</span>) {</td>
      </tr>
      <tr>
        <td id="L2201" class="blob-num js-line-number" data-line-number="2201"></td>
        <td id="LC2201" class="blob-code js-file-line">    setNumPages($scope.$parent, value); <span class="c1">// Readonly variable</span></td>
      </tr>
      <tr>
        <td id="L2202" class="blob-num js-line-number" data-line-number="2202"></td>
        <td id="LC2202" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2203" class="blob-num js-line-number" data-line-number="2203"></td>
        <td id="LC2203" class="blob-code js-file-line">    <span class="k">if</span> ( $scope.page <span class="o">&gt;</span> value ) {</td>
      </tr>
      <tr>
        <td id="L2204" class="blob-num js-line-number" data-line-number="2204"></td>
        <td id="LC2204" class="blob-code js-file-line">      $scope.selectPage(value);</td>
      </tr>
      <tr>
        <td id="L2205" class="blob-num js-line-number" data-line-number="2205"></td>
        <td id="LC2205" class="blob-code js-file-line">    } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2206" class="blob-num js-line-number" data-line-number="2206"></td>
        <td id="LC2206" class="blob-code js-file-line">      ngModelCtrl.$render();</td>
      </tr>
      <tr>
        <td id="L2207" class="blob-num js-line-number" data-line-number="2207"></td>
        <td id="LC2207" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2208" class="blob-num js-line-number" data-line-number="2208"></td>
        <td id="LC2208" class="blob-code js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L2209" class="blob-num js-line-number" data-line-number="2209"></td>
        <td id="LC2209" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L2210" class="blob-num js-line-number" data-line-number="2210"></td>
        <td id="LC2210" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2211" class="blob-num js-line-number" data-line-number="2211"></td>
        <td id="LC2211" class="blob-code js-file-line">.constant(<span class="s1">'paginationConfig'</span>, {</td>
      </tr>
      <tr>
        <td id="L2212" class="blob-num js-line-number" data-line-number="2212"></td>
        <td id="LC2212" class="blob-code js-file-line">  itemsPerPage<span class="o">:</span> <span class="m">10</span>,</td>
      </tr>
      <tr>
        <td id="L2213" class="blob-num js-line-number" data-line-number="2213"></td>
        <td id="LC2213" class="blob-code js-file-line">  boundaryLinks<span class="o">:</span> <span class="kc">false</span>,</td>
      </tr>
      <tr>
        <td id="L2214" class="blob-num js-line-number" data-line-number="2214"></td>
        <td id="LC2214" class="blob-code js-file-line">  directionLinks<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L2215" class="blob-num js-line-number" data-line-number="2215"></td>
        <td id="LC2215" class="blob-code js-file-line">  firstText<span class="o">:</span> <span class="s1">'First'</span>,</td>
      </tr>
      <tr>
        <td id="L2216" class="blob-num js-line-number" data-line-number="2216"></td>
        <td id="LC2216" class="blob-code js-file-line">  previousText<span class="o">:</span> <span class="s1">'Previous'</span>,</td>
      </tr>
      <tr>
        <td id="L2217" class="blob-num js-line-number" data-line-number="2217"></td>
        <td id="LC2217" class="blob-code js-file-line">  nextText<span class="o">:</span> <span class="s1">'Next'</span>,</td>
      </tr>
      <tr>
        <td id="L2218" class="blob-num js-line-number" data-line-number="2218"></td>
        <td id="LC2218" class="blob-code js-file-line">  lastText<span class="o">:</span> <span class="s1">'Last'</span>,</td>
      </tr>
      <tr>
        <td id="L2219" class="blob-num js-line-number" data-line-number="2219"></td>
        <td id="LC2219" class="blob-code js-file-line">  rotate<span class="o">:</span> <span class="kc">true</span></td>
      </tr>
      <tr>
        <td id="L2220" class="blob-num js-line-number" data-line-number="2220"></td>
        <td id="LC2220" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L2221" class="blob-num js-line-number" data-line-number="2221"></td>
        <td id="LC2221" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2222" class="blob-num js-line-number" data-line-number="2222"></td>
        <td id="LC2222" class="blob-code js-file-line">.directive(<span class="s1">'pagination'</span>, [<span class="s1">'$parse'</span>, <span class="s1">'paginationConfig'</span>, <span class="kt">function</span>(<span class="nv">$parse</span>, <span class="nv">paginationConfig</span>) {</td>
      </tr>
      <tr>
        <td id="L2223" class="blob-num js-line-number" data-line-number="2223"></td>
        <td id="LC2223" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L2224" class="blob-num js-line-number" data-line-number="2224"></td>
        <td id="LC2224" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L2225" class="blob-num js-line-number" data-line-number="2225"></td>
        <td id="LC2225" class="blob-code js-file-line">    scope<span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L2226" class="blob-num js-line-number" data-line-number="2226"></td>
        <td id="LC2226" class="blob-code js-file-line">      totalItems<span class="o">:</span> <span class="s1">'='</span>,</td>
      </tr>
      <tr>
        <td id="L2227" class="blob-num js-line-number" data-line-number="2227"></td>
        <td id="LC2227" class="blob-code js-file-line">      firstText<span class="o">:</span> <span class="s1">'@'</span>,</td>
      </tr>
      <tr>
        <td id="L2228" class="blob-num js-line-number" data-line-number="2228"></td>
        <td id="LC2228" class="blob-code js-file-line">      previousText<span class="o">:</span> <span class="s1">'@'</span>,</td>
      </tr>
      <tr>
        <td id="L2229" class="blob-num js-line-number" data-line-number="2229"></td>
        <td id="LC2229" class="blob-code js-file-line">      nextText<span class="o">:</span> <span class="s1">'@'</span>,</td>
      </tr>
      <tr>
        <td id="L2230" class="blob-num js-line-number" data-line-number="2230"></td>
        <td id="LC2230" class="blob-code js-file-line">      lastText<span class="o">:</span> <span class="s1">'@'</span></td>
      </tr>
      <tr>
        <td id="L2231" class="blob-num js-line-number" data-line-number="2231"></td>
        <td id="LC2231" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L2232" class="blob-num js-line-number" data-line-number="2232"></td>
        <td id="LC2232" class="blob-code js-file-line">    require<span class="o">:</span> [<span class="s1">'pagination'</span>, <span class="s1">'?ngModel'</span>],</td>
      </tr>
      <tr>
        <td id="L2233" class="blob-num js-line-number" data-line-number="2233"></td>
        <td id="LC2233" class="blob-code js-file-line">    controller<span class="o">:</span> <span class="s1">'PaginationController'</span>,</td>
      </tr>
      <tr>
        <td id="L2234" class="blob-num js-line-number" data-line-number="2234"></td>
        <td id="LC2234" class="blob-code js-file-line">    templateUrl<span class="o">:</span> <span class="s1">'template/pagination/pagination.html'</span>,</td>
      </tr>
      <tr>
        <td id="L2235" class="blob-num js-line-number" data-line-number="2235"></td>
        <td id="LC2235" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L2236" class="blob-num js-line-number" data-line-number="2236"></td>
        <td id="LC2236" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>, <span class="nv">ctrls</span>) {</td>
      </tr>
      <tr>
        <td id="L2237" class="blob-num js-line-number" data-line-number="2237"></td>
        <td id="LC2237" class="blob-code js-file-line">      <span class="k">var</span> paginationCtrl <span class="o">=</span> ctrls[<span class="m">0</span>], ngModelCtrl <span class="o">=</span> ctrls[<span class="m">1</span>];</td>
      </tr>
      <tr>
        <td id="L2238" class="blob-num js-line-number" data-line-number="2238"></td>
        <td id="LC2238" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2239" class="blob-num js-line-number" data-line-number="2239"></td>
        <td id="LC2239" class="blob-code js-file-line">      <span class="k">if</span> (<span class="o">!</span>ngModelCtrl) {</td>
      </tr>
      <tr>
        <td id="L2240" class="blob-num js-line-number" data-line-number="2240"></td>
        <td id="LC2240" class="blob-code js-file-line">         <span class="k">return</span>; <span class="c1">// do nothing if no ng-model</span></td>
      </tr>
      <tr>
        <td id="L2241" class="blob-num js-line-number" data-line-number="2241"></td>
        <td id="LC2241" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L2242" class="blob-num js-line-number" data-line-number="2242"></td>
        <td id="LC2242" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2243" class="blob-num js-line-number" data-line-number="2243"></td>
        <td id="LC2243" class="blob-code js-file-line">      <span class="c1">// Setup configuration parameters</span></td>
      </tr>
      <tr>
        <td id="L2244" class="blob-num js-line-number" data-line-number="2244"></td>
        <td id="LC2244" class="blob-code js-file-line">      <span class="k">var</span> maxSize <span class="o">=</span> angular.isDefined(attrs.maxSize) <span class="o">?</span> scope.$parent.$<span class="nf">eval</span>(attrs.maxSize) <span class="o">:</span> paginationConfig.maxSize,</td>
      </tr>
      <tr>
        <td id="L2245" class="blob-num js-line-number" data-line-number="2245"></td>
        <td id="LC2245" class="blob-code js-file-line">          rotate <span class="o">=</span> angular.isDefined(attrs.rotate) <span class="o">?</span> scope.$parent.$<span class="nf">eval</span>(attrs.rotate) <span class="o">:</span> paginationConfig.rotate;</td>
      </tr>
      <tr>
        <td id="L2246" class="blob-num js-line-number" data-line-number="2246"></td>
        <td id="LC2246" class="blob-code js-file-line">      scope.boundaryLinks <span class="o">=</span> angular.isDefined(attrs.boundaryLinks) <span class="o">?</span> scope.$parent.$<span class="nf">eval</span>(attrs.boundaryLinks) <span class="o">:</span> paginationConfig.boundaryLinks;</td>
      </tr>
      <tr>
        <td id="L2247" class="blob-num js-line-number" data-line-number="2247"></td>
        <td id="LC2247" class="blob-code js-file-line">      scope.directionLinks <span class="o">=</span> angular.isDefined(attrs.directionLinks) <span class="o">?</span> scope.$parent.$<span class="nf">eval</span>(attrs.directionLinks) <span class="o">:</span> paginationConfig.directionLinks;</td>
      </tr>
      <tr>
        <td id="L2248" class="blob-num js-line-number" data-line-number="2248"></td>
        <td id="LC2248" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2249" class="blob-num js-line-number" data-line-number="2249"></td>
        <td id="LC2249" class="blob-code js-file-line">      paginationCtrl.init(ngModelCtrl, paginationConfig);</td>
      </tr>
      <tr>
        <td id="L2250" class="blob-num js-line-number" data-line-number="2250"></td>
        <td id="LC2250" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2251" class="blob-num js-line-number" data-line-number="2251"></td>
        <td id="LC2251" class="blob-code js-file-line">      <span class="k">if</span> (attrs.maxSize) {</td>
      </tr>
      <tr>
        <td id="L2252" class="blob-num js-line-number" data-line-number="2252"></td>
        <td id="LC2252" class="blob-code js-file-line">        scope.$parent.$<span class="nf">watch</span>($<span class="nf">parse</span>(attrs.maxSize), <span class="kt">function</span>(<span class="nv">value</span>) {</td>
      </tr>
      <tr>
        <td id="L2253" class="blob-num js-line-number" data-line-number="2253"></td>
        <td id="LC2253" class="blob-code js-file-line">          maxSize <span class="o">=</span> <span class="nf">parseInt</span>(value, <span class="m">10</span>);</td>
      </tr>
      <tr>
        <td id="L2254" class="blob-num js-line-number" data-line-number="2254"></td>
        <td id="LC2254" class="blob-code js-file-line">          paginationCtrl.render();</td>
      </tr>
      <tr>
        <td id="L2255" class="blob-num js-line-number" data-line-number="2255"></td>
        <td id="LC2255" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L2256" class="blob-num js-line-number" data-line-number="2256"></td>
        <td id="LC2256" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L2257" class="blob-num js-line-number" data-line-number="2257"></td>
        <td id="LC2257" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2258" class="blob-num js-line-number" data-line-number="2258"></td>
        <td id="LC2258" class="blob-code js-file-line">      <span class="c1">// Create page object used in template</span></td>
      </tr>
      <tr>
        <td id="L2259" class="blob-num js-line-number" data-line-number="2259"></td>
        <td id="LC2259" class="blob-code js-file-line">      <span class="kt">function</span> <span class="nf">makePage</span>(<span class="nv">number</span>, <span class="nv">text</span>, <span class="nv">isActive</span>) {</td>
      </tr>
      <tr>
        <td id="L2260" class="blob-num js-line-number" data-line-number="2260"></td>
        <td id="LC2260" class="blob-code js-file-line">        <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L2261" class="blob-num js-line-number" data-line-number="2261"></td>
        <td id="LC2261" class="blob-code js-file-line">          number<span class="o">:</span> number,</td>
      </tr>
      <tr>
        <td id="L2262" class="blob-num js-line-number" data-line-number="2262"></td>
        <td id="LC2262" class="blob-code js-file-line">          text<span class="o">:</span> text,</td>
      </tr>
      <tr>
        <td id="L2263" class="blob-num js-line-number" data-line-number="2263"></td>
        <td id="LC2263" class="blob-code js-file-line">          active<span class="o">:</span> isActive</td>
      </tr>
      <tr>
        <td id="L2264" class="blob-num js-line-number" data-line-number="2264"></td>
        <td id="LC2264" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L2265" class="blob-num js-line-number" data-line-number="2265"></td>
        <td id="LC2265" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L2266" class="blob-num js-line-number" data-line-number="2266"></td>
        <td id="LC2266" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2267" class="blob-num js-line-number" data-line-number="2267"></td>
        <td id="LC2267" class="blob-code js-file-line">      <span class="kt">function</span> <span class="nf">getPages</span>(<span class="nv">currentPage</span>, <span class="nv">totalPages</span>) {</td>
      </tr>
      <tr>
        <td id="L2268" class="blob-num js-line-number" data-line-number="2268"></td>
        <td id="LC2268" class="blob-code js-file-line">        <span class="k">var</span> pages <span class="o">=</span> [];</td>
      </tr>
      <tr>
        <td id="L2269" class="blob-num js-line-number" data-line-number="2269"></td>
        <td id="LC2269" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2270" class="blob-num js-line-number" data-line-number="2270"></td>
        <td id="LC2270" class="blob-code js-file-line">        <span class="c1">// Default page limits</span></td>
      </tr>
      <tr>
        <td id="L2271" class="blob-num js-line-number" data-line-number="2271"></td>
        <td id="LC2271" class="blob-code js-file-line">        <span class="k">var</span> startPage <span class="o">=</span> <span class="m">1</span>, endPage <span class="o">=</span> totalPages;</td>
      </tr>
      <tr>
        <td id="L2272" class="blob-num js-line-number" data-line-number="2272"></td>
        <td id="LC2272" class="blob-code js-file-line">        <span class="k">var</span> isMaxSized <span class="o">=</span> ( angular.isDefined(maxSize) <span class="o">&amp;&amp;</span> maxSize <span class="o">&lt;</span> totalPages );</td>
      </tr>
      <tr>
        <td id="L2273" class="blob-num js-line-number" data-line-number="2273"></td>
        <td id="LC2273" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2274" class="blob-num js-line-number" data-line-number="2274"></td>
        <td id="LC2274" class="blob-code js-file-line">        <span class="c1">// recompute if maxSize</span></td>
      </tr>
      <tr>
        <td id="L2275" class="blob-num js-line-number" data-line-number="2275"></td>
        <td id="LC2275" class="blob-code js-file-line">        <span class="k">if</span> ( isMaxSized ) {</td>
      </tr>
      <tr>
        <td id="L2276" class="blob-num js-line-number" data-line-number="2276"></td>
        <td id="LC2276" class="blob-code js-file-line">          <span class="k">if</span> ( rotate ) {</td>
      </tr>
      <tr>
        <td id="L2277" class="blob-num js-line-number" data-line-number="2277"></td>
        <td id="LC2277" class="blob-code js-file-line">            <span class="c1">// Current page is displayed in the middle of the visible ones</span></td>
      </tr>
      <tr>
        <td id="L2278" class="blob-num js-line-number" data-line-number="2278"></td>
        <td id="LC2278" class="blob-code js-file-line">            startPage <span class="o">=</span> <span class="no">Math</span>.<span class="nf">max</span>(currentPage <span class="o">-</span> <span class="no">Math</span>.<span class="nf">floor</span>(maxSize/<span class="m">2</span>), <span class="m">1</span>);</td>
      </tr>
      <tr>
        <td id="L2279" class="blob-num js-line-number" data-line-number="2279"></td>
        <td id="LC2279" class="blob-code js-file-line">            endPage   <span class="o">=</span> startPage <span class="o">+</span> maxSize <span class="o">-</span> <span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L2280" class="blob-num js-line-number" data-line-number="2280"></td>
        <td id="LC2280" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2281" class="blob-num js-line-number" data-line-number="2281"></td>
        <td id="LC2281" class="blob-code js-file-line">            <span class="c1">// Adjust if limit is exceeded</span></td>
      </tr>
      <tr>
        <td id="L2282" class="blob-num js-line-number" data-line-number="2282"></td>
        <td id="LC2282" class="blob-code js-file-line">            <span class="k">if</span> (endPage <span class="o">&gt;</span> totalPages) {</td>
      </tr>
      <tr>
        <td id="L2283" class="blob-num js-line-number" data-line-number="2283"></td>
        <td id="LC2283" class="blob-code js-file-line">              endPage   <span class="o">=</span> totalPages;</td>
      </tr>
      <tr>
        <td id="L2284" class="blob-num js-line-number" data-line-number="2284"></td>
        <td id="LC2284" class="blob-code js-file-line">              startPage <span class="o">=</span> endPage <span class="o">-</span> maxSize <span class="o">+</span> <span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L2285" class="blob-num js-line-number" data-line-number="2285"></td>
        <td id="LC2285" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2286" class="blob-num js-line-number" data-line-number="2286"></td>
        <td id="LC2286" class="blob-code js-file-line">          } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2287" class="blob-num js-line-number" data-line-number="2287"></td>
        <td id="LC2287" class="blob-code js-file-line">            <span class="c1">// Visible pages are paginated with maxSize</span></td>
      </tr>
      <tr>
        <td id="L2288" class="blob-num js-line-number" data-line-number="2288"></td>
        <td id="LC2288" class="blob-code js-file-line">            startPage <span class="o">=</span> ((<span class="no">Math</span>.<span class="nf">ceil</span>(currentPage / maxSize) <span class="o">-</span> <span class="m">1</span>) <span class="o">*</span> maxSize) <span class="o">+</span> <span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L2289" class="blob-num js-line-number" data-line-number="2289"></td>
        <td id="LC2289" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2290" class="blob-num js-line-number" data-line-number="2290"></td>
        <td id="LC2290" class="blob-code js-file-line">            <span class="c1">// Adjust last page if limit is exceeded</span></td>
      </tr>
      <tr>
        <td id="L2291" class="blob-num js-line-number" data-line-number="2291"></td>
        <td id="LC2291" class="blob-code js-file-line">            endPage <span class="o">=</span> <span class="no">Math</span>.<span class="nf">min</span>(startPage <span class="o">+</span> maxSize <span class="o">-</span> <span class="m">1</span>, totalPages);</td>
      </tr>
      <tr>
        <td id="L2292" class="blob-num js-line-number" data-line-number="2292"></td>
        <td id="LC2292" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L2293" class="blob-num js-line-number" data-line-number="2293"></td>
        <td id="LC2293" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L2294" class="blob-num js-line-number" data-line-number="2294"></td>
        <td id="LC2294" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2295" class="blob-num js-line-number" data-line-number="2295"></td>
        <td id="LC2295" class="blob-code js-file-line">        <span class="c1">// Add page number links</span></td>
      </tr>
      <tr>
        <td id="L2296" class="blob-num js-line-number" data-line-number="2296"></td>
        <td id="LC2296" class="blob-code js-file-line">        <span class="k">for</span> (<span class="k">var</span> number <span class="o">=</span> startPage; number <span class="o">&lt;=</span> endPage; number<span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L2297" class="blob-num js-line-number" data-line-number="2297"></td>
        <td id="LC2297" class="blob-code js-file-line">          <span class="k">var</span> page <span class="o">=</span> makePage(number, number, number <span class="o">===</span> currentPage);</td>
      </tr>
      <tr>
        <td id="L2298" class="blob-num js-line-number" data-line-number="2298"></td>
        <td id="LC2298" class="blob-code js-file-line">          pages.<span class="nf">push</span>(page);</td>
      </tr>
      <tr>
        <td id="L2299" class="blob-num js-line-number" data-line-number="2299"></td>
        <td id="LC2299" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L2300" class="blob-num js-line-number" data-line-number="2300"></td>
        <td id="LC2300" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2301" class="blob-num js-line-number" data-line-number="2301"></td>
        <td id="LC2301" class="blob-code js-file-line">        <span class="c1">// Add links to move between page sets</span></td>
      </tr>
      <tr>
        <td id="L2302" class="blob-num js-line-number" data-line-number="2302"></td>
        <td id="LC2302" class="blob-code js-file-line">        <span class="k">if</span> ( isMaxSized <span class="o">&amp;&amp;</span> <span class="o">!</span> rotate ) {</td>
      </tr>
      <tr>
        <td id="L2303" class="blob-num js-line-number" data-line-number="2303"></td>
        <td id="LC2303" class="blob-code js-file-line">          <span class="k">if</span> ( startPage <span class="o">&gt;</span> <span class="m">1</span> ) {</td>
      </tr>
      <tr>
        <td id="L2304" class="blob-num js-line-number" data-line-number="2304"></td>
        <td id="LC2304" class="blob-code js-file-line">            <span class="k">var</span> previousPageSet <span class="o">=</span> makePage(startPage <span class="o">-</span> <span class="m">1</span>, <span class="s1">'...'</span>, <span class="kc">false</span>);</td>
      </tr>
      <tr>
        <td id="L2305" class="blob-num js-line-number" data-line-number="2305"></td>
        <td id="LC2305" class="blob-code js-file-line">            pages.<span class="nf">unshift</span>(previousPageSet);</td>
      </tr>
      <tr>
        <td id="L2306" class="blob-num js-line-number" data-line-number="2306"></td>
        <td id="LC2306" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L2307" class="blob-num js-line-number" data-line-number="2307"></td>
        <td id="LC2307" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2308" class="blob-num js-line-number" data-line-number="2308"></td>
        <td id="LC2308" class="blob-code js-file-line">          <span class="k">if</span> ( endPage <span class="o">&lt;</span> totalPages ) {</td>
      </tr>
      <tr>
        <td id="L2309" class="blob-num js-line-number" data-line-number="2309"></td>
        <td id="LC2309" class="blob-code js-file-line">            <span class="k">var</span> nextPageSet <span class="o">=</span> makePage(endPage <span class="o">+</span> <span class="m">1</span>, <span class="s1">'...'</span>, <span class="kc">false</span>);</td>
      </tr>
      <tr>
        <td id="L2310" class="blob-num js-line-number" data-line-number="2310"></td>
        <td id="LC2310" class="blob-code js-file-line">            pages.<span class="nf">push</span>(nextPageSet);</td>
      </tr>
      <tr>
        <td id="L2311" class="blob-num js-line-number" data-line-number="2311"></td>
        <td id="LC2311" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L2312" class="blob-num js-line-number" data-line-number="2312"></td>
        <td id="LC2312" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L2313" class="blob-num js-line-number" data-line-number="2313"></td>
        <td id="LC2313" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2314" class="blob-num js-line-number" data-line-number="2314"></td>
        <td id="LC2314" class="blob-code js-file-line">        <span class="k">return</span> pages;</td>
      </tr>
      <tr>
        <td id="L2315" class="blob-num js-line-number" data-line-number="2315"></td>
        <td id="LC2315" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L2316" class="blob-num js-line-number" data-line-number="2316"></td>
        <td id="LC2316" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2317" class="blob-num js-line-number" data-line-number="2317"></td>
        <td id="LC2317" class="blob-code js-file-line">      <span class="k">var</span> originalRender <span class="o">=</span> paginationCtrl.render;</td>
      </tr>
      <tr>
        <td id="L2318" class="blob-num js-line-number" data-line-number="2318"></td>
        <td id="LC2318" class="blob-code js-file-line">      <span class="no">paginationCtrl</span>.<span class="nf">render</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2319" class="blob-num js-line-number" data-line-number="2319"></td>
        <td id="LC2319" class="blob-code js-file-line">        originalRender();</td>
      </tr>
      <tr>
        <td id="L2320" class="blob-num js-line-number" data-line-number="2320"></td>
        <td id="LC2320" class="blob-code js-file-line">        <span class="k">if</span> (scope.page <span class="o">&gt;</span> <span class="m">0</span> <span class="o">&amp;&amp;</span> scope.page <span class="o">&lt;=</span> scope.totalPages) {</td>
      </tr>
      <tr>
        <td id="L2321" class="blob-num js-line-number" data-line-number="2321"></td>
        <td id="LC2321" class="blob-code js-file-line">          scope.pages <span class="o">=</span> getPages(scope.page, scope.totalPages);</td>
      </tr>
      <tr>
        <td id="L2322" class="blob-num js-line-number" data-line-number="2322"></td>
        <td id="LC2322" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L2323" class="blob-num js-line-number" data-line-number="2323"></td>
        <td id="LC2323" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L2324" class="blob-num js-line-number" data-line-number="2324"></td>
        <td id="LC2324" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2325" class="blob-num js-line-number" data-line-number="2325"></td>
        <td id="LC2325" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2326" class="blob-num js-line-number" data-line-number="2326"></td>
        <td id="LC2326" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L2327" class="blob-num js-line-number" data-line-number="2327"></td>
        <td id="LC2327" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2328" class="blob-num js-line-number" data-line-number="2328"></td>
        <td id="LC2328" class="blob-code js-file-line">.constant(<span class="s1">'pagerConfig'</span>, {</td>
      </tr>
      <tr>
        <td id="L2329" class="blob-num js-line-number" data-line-number="2329"></td>
        <td id="LC2329" class="blob-code js-file-line">  itemsPerPage<span class="o">:</span> <span class="m">10</span>,</td>
      </tr>
      <tr>
        <td id="L2330" class="blob-num js-line-number" data-line-number="2330"></td>
        <td id="LC2330" class="blob-code js-file-line">  previousText<span class="o">:</span> <span class="s1">'« Previous'</span>,</td>
      </tr>
      <tr>
        <td id="L2331" class="blob-num js-line-number" data-line-number="2331"></td>
        <td id="LC2331" class="blob-code js-file-line">  nextText<span class="o">:</span> <span class="s1">'Next »'</span>,</td>
      </tr>
      <tr>
        <td id="L2332" class="blob-num js-line-number" data-line-number="2332"></td>
        <td id="LC2332" class="blob-code js-file-line">  align<span class="o">:</span> <span class="kc">true</span></td>
      </tr>
      <tr>
        <td id="L2333" class="blob-num js-line-number" data-line-number="2333"></td>
        <td id="LC2333" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L2334" class="blob-num js-line-number" data-line-number="2334"></td>
        <td id="LC2334" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2335" class="blob-num js-line-number" data-line-number="2335"></td>
        <td id="LC2335" class="blob-code js-file-line">.directive(<span class="s1">'pager'</span>, [<span class="s1">'pagerConfig'</span>, <span class="kt">function</span>(<span class="nv">pagerConfig</span>) {</td>
      </tr>
      <tr>
        <td id="L2336" class="blob-num js-line-number" data-line-number="2336"></td>
        <td id="LC2336" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L2337" class="blob-num js-line-number" data-line-number="2337"></td>
        <td id="LC2337" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L2338" class="blob-num js-line-number" data-line-number="2338"></td>
        <td id="LC2338" class="blob-code js-file-line">    scope<span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L2339" class="blob-num js-line-number" data-line-number="2339"></td>
        <td id="LC2339" class="blob-code js-file-line">      totalItems<span class="o">:</span> <span class="s1">'='</span>,</td>
      </tr>
      <tr>
        <td id="L2340" class="blob-num js-line-number" data-line-number="2340"></td>
        <td id="LC2340" class="blob-code js-file-line">      previousText<span class="o">:</span> <span class="s1">'@'</span>,</td>
      </tr>
      <tr>
        <td id="L2341" class="blob-num js-line-number" data-line-number="2341"></td>
        <td id="LC2341" class="blob-code js-file-line">      nextText<span class="o">:</span> <span class="s1">'@'</span></td>
      </tr>
      <tr>
        <td id="L2342" class="blob-num js-line-number" data-line-number="2342"></td>
        <td id="LC2342" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L2343" class="blob-num js-line-number" data-line-number="2343"></td>
        <td id="LC2343" class="blob-code js-file-line">    require<span class="o">:</span> [<span class="s1">'pager'</span>, <span class="s1">'?ngModel'</span>],</td>
      </tr>
      <tr>
        <td id="L2344" class="blob-num js-line-number" data-line-number="2344"></td>
        <td id="LC2344" class="blob-code js-file-line">    controller<span class="o">:</span> <span class="s1">'PaginationController'</span>,</td>
      </tr>
      <tr>
        <td id="L2345" class="blob-num js-line-number" data-line-number="2345"></td>
        <td id="LC2345" class="blob-code js-file-line">    templateUrl<span class="o">:</span> <span class="s1">'template/pagination/pager.html'</span>,</td>
      </tr>
      <tr>
        <td id="L2346" class="blob-num js-line-number" data-line-number="2346"></td>
        <td id="LC2346" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L2347" class="blob-num js-line-number" data-line-number="2347"></td>
        <td id="LC2347" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>, <span class="nv">ctrls</span>) {</td>
      </tr>
      <tr>
        <td id="L2348" class="blob-num js-line-number" data-line-number="2348"></td>
        <td id="LC2348" class="blob-code js-file-line">      <span class="k">var</span> paginationCtrl <span class="o">=</span> ctrls[<span class="m">0</span>], ngModelCtrl <span class="o">=</span> ctrls[<span class="m">1</span>];</td>
      </tr>
      <tr>
        <td id="L2349" class="blob-num js-line-number" data-line-number="2349"></td>
        <td id="LC2349" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2350" class="blob-num js-line-number" data-line-number="2350"></td>
        <td id="LC2350" class="blob-code js-file-line">      <span class="k">if</span> (<span class="o">!</span>ngModelCtrl) {</td>
      </tr>
      <tr>
        <td id="L2351" class="blob-num js-line-number" data-line-number="2351"></td>
        <td id="LC2351" class="blob-code js-file-line">         <span class="k">return</span>; <span class="c1">// do nothing if no ng-model</span></td>
      </tr>
      <tr>
        <td id="L2352" class="blob-num js-line-number" data-line-number="2352"></td>
        <td id="LC2352" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L2353" class="blob-num js-line-number" data-line-number="2353"></td>
        <td id="LC2353" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2354" class="blob-num js-line-number" data-line-number="2354"></td>
        <td id="LC2354" class="blob-code js-file-line">      scope.<span class="no">align</span> <span class="o">=</span> angular.isDefined(attrs.<span class="no">align</span>) <span class="o">?</span> scope.$parent.$<span class="nf">eval</span>(attrs.<span class="no">align</span>) <span class="o">:</span> pagerConfig.<span class="no">align</span>;</td>
      </tr>
      <tr>
        <td id="L2355" class="blob-num js-line-number" data-line-number="2355"></td>
        <td id="LC2355" class="blob-code js-file-line">      paginationCtrl.init(ngModelCtrl, pagerConfig);</td>
      </tr>
      <tr>
        <td id="L2356" class="blob-num js-line-number" data-line-number="2356"></td>
        <td id="LC2356" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2357" class="blob-num js-line-number" data-line-number="2357"></td>
        <td id="LC2357" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2358" class="blob-num js-line-number" data-line-number="2358"></td>
        <td id="LC2358" class="blob-code js-file-line">}]);</td>
      </tr>
      <tr>
        <td id="L2359" class="blob-num js-line-number" data-line-number="2359"></td>
        <td id="LC2359" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2360" class="blob-num js-line-number" data-line-number="2360"></td>
        <td id="LC2360" class="blob-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L2361" class="blob-num js-line-number" data-line-number="2361"></td>
        <td id="LC2361" class="blob-code js-file-line"><span class="cm"> * The following features are still outstanding: animation as a</span></td>
      </tr>
      <tr>
        <td id="L2362" class="blob-num js-line-number" data-line-number="2362"></td>
        <td id="LC2362" class="blob-code js-file-line"><span class="cm"> * function, placement as a function, inside, support for more triggers than</span></td>
      </tr>
      <tr>
        <td id="L2363" class="blob-num js-line-number" data-line-number="2363"></td>
        <td id="LC2363" class="blob-code js-file-line"><span class="cm"> * just mouse enter/leave, html tooltips, and selector delegation.</span></td>
      </tr>
      <tr>
        <td id="L2364" class="blob-num js-line-number" data-line-number="2364"></td>
        <td id="LC2364" class="blob-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L2365" class="blob-num js-line-number" data-line-number="2365"></td>
        <td id="LC2365" class="blob-code js-file-line">angular.module( <span class="s1">'ui.bootstrap.tooltip'</span>, [ <span class="s1">'ui.bootstrap.position'</span>, <span class="s1">'ui.bootstrap.bindHtml'</span> ] )</td>
      </tr>
      <tr>
        <td id="L2366" class="blob-num js-line-number" data-line-number="2366"></td>
        <td id="LC2366" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2367" class="blob-num js-line-number" data-line-number="2367"></td>
        <td id="LC2367" class="blob-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L2368" class="blob-num js-line-number" data-line-number="2368"></td>
        <td id="LC2368" class="blob-code js-file-line"><span class="cm"> * The $tooltip service creates tooltip- and popover-like directives as well as</span></td>
      </tr>
      <tr>
        <td id="L2369" class="blob-num js-line-number" data-line-number="2369"></td>
        <td id="LC2369" class="blob-code js-file-line"><span class="cm"> * houses global options for them.</span></td>
      </tr>
      <tr>
        <td id="L2370" class="blob-num js-line-number" data-line-number="2370"></td>
        <td id="LC2370" class="blob-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L2371" class="blob-num js-line-number" data-line-number="2371"></td>
        <td id="LC2371" class="blob-code js-file-line">.provider( <span class="s1">'$tooltip'</span>, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2372" class="blob-num js-line-number" data-line-number="2372"></td>
        <td id="LC2372" class="blob-code js-file-line">  <span class="c1">// The default options tooltip and popover.</span></td>
      </tr>
      <tr>
        <td id="L2373" class="blob-num js-line-number" data-line-number="2373"></td>
        <td id="LC2373" class="blob-code js-file-line">  <span class="k">var</span> defaultOptions <span class="o">=</span> {</td>
      </tr>
      <tr>
        <td id="L2374" class="blob-num js-line-number" data-line-number="2374"></td>
        <td id="LC2374" class="blob-code js-file-line">    placement<span class="o">:</span> <span class="s1">'top'</span>,</td>
      </tr>
      <tr>
        <td id="L2375" class="blob-num js-line-number" data-line-number="2375"></td>
        <td id="LC2375" class="blob-code js-file-line">    animation<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L2376" class="blob-num js-line-number" data-line-number="2376"></td>
        <td id="LC2376" class="blob-code js-file-line">    popupDelay<span class="o">:</span> <span class="m">0</span></td>
      </tr>
      <tr>
        <td id="L2377" class="blob-num js-line-number" data-line-number="2377"></td>
        <td id="LC2377" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2378" class="blob-num js-line-number" data-line-number="2378"></td>
        <td id="LC2378" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2379" class="blob-num js-line-number" data-line-number="2379"></td>
        <td id="LC2379" class="blob-code js-file-line">  <span class="c1">// Default hide triggers for each show trigger</span></td>
      </tr>
      <tr>
        <td id="L2380" class="blob-num js-line-number" data-line-number="2380"></td>
        <td id="LC2380" class="blob-code js-file-line">  <span class="k">var</span> triggerMap <span class="o">=</span> {</td>
      </tr>
      <tr>
        <td id="L2381" class="blob-num js-line-number" data-line-number="2381"></td>
        <td id="LC2381" class="blob-code js-file-line">    <span class="s1">'mouseenter'</span><span class="o">:</span> <span class="s1">'mouseleave'</span>,</td>
      </tr>
      <tr>
        <td id="L2382" class="blob-num js-line-number" data-line-number="2382"></td>
        <td id="LC2382" class="blob-code js-file-line">    <span class="s1">'click'</span><span class="o">:</span> <span class="s1">'click'</span>,</td>
      </tr>
      <tr>
        <td id="L2383" class="blob-num js-line-number" data-line-number="2383"></td>
        <td id="LC2383" class="blob-code js-file-line">    <span class="s1">'focus'</span><span class="o">:</span> <span class="s1">'blur'</span></td>
      </tr>
      <tr>
        <td id="L2384" class="blob-num js-line-number" data-line-number="2384"></td>
        <td id="LC2384" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2385" class="blob-num js-line-number" data-line-number="2385"></td>
        <td id="LC2385" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2386" class="blob-num js-line-number" data-line-number="2386"></td>
        <td id="LC2386" class="blob-code js-file-line">  <span class="c1">// The options specified to the provider globally.</span></td>
      </tr>
      <tr>
        <td id="L2387" class="blob-num js-line-number" data-line-number="2387"></td>
        <td id="LC2387" class="blob-code js-file-line">  <span class="k">var</span> globalOptions <span class="o">=</span> {};</td>
      </tr>
      <tr>
        <td id="L2388" class="blob-num js-line-number" data-line-number="2388"></td>
        <td id="LC2388" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2389" class="blob-num js-line-number" data-line-number="2389"></td>
        <td id="LC2389" class="blob-code js-file-line">  <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L2390" class="blob-num js-line-number" data-line-number="2390"></td>
        <td id="LC2390" class="blob-code js-file-line"><span class="cm">   * `options({})` allows global configuration of all tooltips in the</span></td>
      </tr>
      <tr>
        <td id="L2391" class="blob-num js-line-number" data-line-number="2391"></td>
        <td id="LC2391" class="blob-code js-file-line"><span class="cm">   * application.</span></td>
      </tr>
      <tr>
        <td id="L2392" class="blob-num js-line-number" data-line-number="2392"></td>
        <td id="LC2392" class="blob-code js-file-line"><span class="cm">   *</span></td>
      </tr>
      <tr>
        <td id="L2393" class="blob-num js-line-number" data-line-number="2393"></td>
        <td id="LC2393" class="blob-code js-file-line"><span class="cm">   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {</span></td>
      </tr>
      <tr>
        <td id="L2394" class="blob-num js-line-number" data-line-number="2394"></td>
        <td id="LC2394" class="blob-code js-file-line"><span class="cm">   *     // place tooltips left instead of top by default</span></td>
      </tr>
      <tr>
        <td id="L2395" class="blob-num js-line-number" data-line-number="2395"></td>
        <td id="LC2395" class="blob-code js-file-line"><span class="cm">   *     $tooltipProvider.options( { placement: 'left' } );</span></td>
      </tr>
      <tr>
        <td id="L2396" class="blob-num js-line-number" data-line-number="2396"></td>
        <td id="LC2396" class="blob-code js-file-line"><span class="cm">   *   });</span></td>
      </tr>
      <tr>
        <td id="L2397" class="blob-num js-line-number" data-line-number="2397"></td>
        <td id="LC2397" class="blob-code js-file-line"><span class="cm">   */</span></td>
      </tr>
      <tr>
        <td id="L2398" class="blob-num js-line-number" data-line-number="2398"></td>
        <td id="LC2398" class="blob-code js-file-line">	<span class="no">this</span>.<span class="nf">options</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">value</span> ) {</td>
      </tr>
      <tr>
        <td id="L2399" class="blob-num js-line-number" data-line-number="2399"></td>
        <td id="LC2399" class="blob-code js-file-line">		angular.extend( globalOptions, value );</td>
      </tr>
      <tr>
        <td id="L2400" class="blob-num js-line-number" data-line-number="2400"></td>
        <td id="LC2400" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L2401" class="blob-num js-line-number" data-line-number="2401"></td>
        <td id="LC2401" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2402" class="blob-num js-line-number" data-line-number="2402"></td>
        <td id="LC2402" class="blob-code js-file-line">  <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L2403" class="blob-num js-line-number" data-line-number="2403"></td>
        <td id="LC2403" class="blob-code js-file-line"><span class="cm">   * This allows you to extend the set of trigger mappings available. E.g.:</span></td>
      </tr>
      <tr>
        <td id="L2404" class="blob-num js-line-number" data-line-number="2404"></td>
        <td id="LC2404" class="blob-code js-file-line"><span class="cm">   *</span></td>
      </tr>
      <tr>
        <td id="L2405" class="blob-num js-line-number" data-line-number="2405"></td>
        <td id="LC2405" class="blob-code js-file-line"><span class="cm">   *   $tooltipProvider.setTriggers( 'openTrigger': 'closeTrigger' );</span></td>
      </tr>
      <tr>
        <td id="L2406" class="blob-num js-line-number" data-line-number="2406"></td>
        <td id="LC2406" class="blob-code js-file-line"><span class="cm">   */</span></td>
      </tr>
      <tr>
        <td id="L2407" class="blob-num js-line-number" data-line-number="2407"></td>
        <td id="LC2407" class="blob-code js-file-line">  <span class="nb">this</span>.setTriggers <span class="o">=</span> <span class="kt">function</span> <span class="nf">setTriggers</span> ( <span class="nv">triggers</span> ) {</td>
      </tr>
      <tr>
        <td id="L2408" class="blob-num js-line-number" data-line-number="2408"></td>
        <td id="LC2408" class="blob-code js-file-line">    angular.extend( triggerMap, triggers );</td>
      </tr>
      <tr>
        <td id="L2409" class="blob-num js-line-number" data-line-number="2409"></td>
        <td id="LC2409" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2410" class="blob-num js-line-number" data-line-number="2410"></td>
        <td id="LC2410" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2411" class="blob-num js-line-number" data-line-number="2411"></td>
        <td id="LC2411" class="blob-code js-file-line">  <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L2412" class="blob-num js-line-number" data-line-number="2412"></td>
        <td id="LC2412" class="blob-code js-file-line"><span class="cm">   * This is a helper function for translating camel-case to snake-case.</span></td>
      </tr>
      <tr>
        <td id="L2413" class="blob-num js-line-number" data-line-number="2413"></td>
        <td id="LC2413" class="blob-code js-file-line"><span class="cm">   */</span></td>
      </tr>
      <tr>
        <td id="L2414" class="blob-num js-line-number" data-line-number="2414"></td>
        <td id="LC2414" class="blob-code js-file-line">  <span class="kt">function</span> <span class="nf">snake_case</span>(<span class="nv">name</span>){</td>
      </tr>
      <tr>
        <td id="L2415" class="blob-num js-line-number" data-line-number="2415"></td>
        <td id="LC2415" class="blob-code js-file-line">    <span class="k">var</span> regexp <span class="o">=</span><span class="sr"> /<span class="no">[<span class="no">A-Z</span>]</span>/g</span>;</td>
      </tr>
      <tr>
        <td id="L2416" class="blob-num js-line-number" data-line-number="2416"></td>
        <td id="LC2416" class="blob-code js-file-line">    <span class="k">var</span> separator <span class="o">=</span> <span class="s1">'-'</span>;</td>
      </tr>
      <tr>
        <td id="L2417" class="blob-num js-line-number" data-line-number="2417"></td>
        <td id="LC2417" class="blob-code js-file-line">    <span class="k">return</span> name.<span class="nf">replace</span>(regexp, <span class="kt">function</span>(<span class="nv">letter</span>, <span class="nv">pos</span>) {</td>
      </tr>
      <tr>
        <td id="L2418" class="blob-num js-line-number" data-line-number="2418"></td>
        <td id="LC2418" class="blob-code js-file-line">      <span class="k">return</span> (pos <span class="o">?</span> separator <span class="o">:</span> <span class="s1">''</span>) <span class="o">+</span> letter.<span class="nf">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L2419" class="blob-num js-line-number" data-line-number="2419"></td>
        <td id="LC2419" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L2420" class="blob-num js-line-number" data-line-number="2420"></td>
        <td id="LC2420" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L2421" class="blob-num js-line-number" data-line-number="2421"></td>
        <td id="LC2421" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2422" class="blob-num js-line-number" data-line-number="2422"></td>
        <td id="LC2422" class="blob-code js-file-line">  <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L2423" class="blob-num js-line-number" data-line-number="2423"></td>
        <td id="LC2423" class="blob-code js-file-line"><span class="cm">   * Returns the actual instance of the $tooltip service.</span></td>
      </tr>
      <tr>
        <td id="L2424" class="blob-num js-line-number" data-line-number="2424"></td>
        <td id="LC2424" class="blob-code js-file-line"><span class="cm">   * TODO support multiple triggers</span></td>
      </tr>
      <tr>
        <td id="L2425" class="blob-num js-line-number" data-line-number="2425"></td>
        <td id="LC2425" class="blob-code js-file-line"><span class="cm">   */</span></td>
      </tr>
      <tr>
        <td id="L2426" class="blob-num js-line-number" data-line-number="2426"></td>
        <td id="LC2426" class="blob-code js-file-line">  <span class="nb">this</span>.$get <span class="o">=</span> [ <span class="s1">'$window'</span>, <span class="s1">'$compile'</span>, <span class="s1">'$timeout'</span>, <span class="s1">'$parse'</span>, <span class="s1">'$document'</span>, <span class="s1">'$position'</span>, <span class="s1">'$interpolate'</span>, <span class="kt">function</span> ( <span class="nv">$window</span>, <span class="nv">$compile</span>, <span class="nv">$timeout</span>, <span class="nv">$parse</span>, <span class="nv">$document</span>, <span class="nv">$position</span>, <span class="nv">$interpolate</span> ) {</td>
      </tr>
      <tr>
        <td id="L2427" class="blob-num js-line-number" data-line-number="2427"></td>
        <td id="LC2427" class="blob-code js-file-line">    <span class="k">return</span> <span class="kt">function</span> <span class="nf">$tooltip</span> ( <span class="nv">type</span>, <span class="nv">prefix</span>, <span class="nv">defaultTriggerShow</span> ) {</td>
      </tr>
      <tr>
        <td id="L2428" class="blob-num js-line-number" data-line-number="2428"></td>
        <td id="LC2428" class="blob-code js-file-line">      <span class="k">var</span> options <span class="o">=</span> angular.extend( {}, defaultOptions, globalOptions );</td>
      </tr>
      <tr>
        <td id="L2429" class="blob-num js-line-number" data-line-number="2429"></td>
        <td id="LC2429" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2430" class="blob-num js-line-number" data-line-number="2430"></td>
        <td id="LC2430" class="blob-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L2431" class="blob-num js-line-number" data-line-number="2431"></td>
        <td id="LC2431" class="blob-code js-file-line"><span class="cm">       * Returns an object of show and hide triggers.</span></td>
      </tr>
      <tr>
        <td id="L2432" class="blob-num js-line-number" data-line-number="2432"></td>
        <td id="LC2432" class="blob-code js-file-line"><span class="cm">       *</span></td>
      </tr>
      <tr>
        <td id="L2433" class="blob-num js-line-number" data-line-number="2433"></td>
        <td id="LC2433" class="blob-code js-file-line"><span class="cm">       * If a trigger is supplied,</span></td>
      </tr>
      <tr>
        <td id="L2434" class="blob-num js-line-number" data-line-number="2434"></td>
        <td id="LC2434" class="blob-code js-file-line"><span class="cm">       * it is used to show the tooltip; otherwise, it will use the `trigger`</span></td>
      </tr>
      <tr>
        <td id="L2435" class="blob-num js-line-number" data-line-number="2435"></td>
        <td id="LC2435" class="blob-code js-file-line"><span class="cm">       * option passed to the `$tooltipProvider.options` method; else it will</span></td>
      </tr>
      <tr>
        <td id="L2436" class="blob-num js-line-number" data-line-number="2436"></td>
        <td id="LC2436" class="blob-code js-file-line"><span class="cm">       * default to the trigger supplied to this directive factory.</span></td>
      </tr>
      <tr>
        <td id="L2437" class="blob-num js-line-number" data-line-number="2437"></td>
        <td id="LC2437" class="blob-code js-file-line"><span class="cm">       *</span></td>
      </tr>
      <tr>
        <td id="L2438" class="blob-num js-line-number" data-line-number="2438"></td>
        <td id="LC2438" class="blob-code js-file-line"><span class="cm">       * The hide trigger is based on the show trigger. If the `trigger` option</span></td>
      </tr>
      <tr>
        <td id="L2439" class="blob-num js-line-number" data-line-number="2439"></td>
        <td id="LC2439" class="blob-code js-file-line"><span class="cm">       * was passed to the `$tooltipProvider.options` method, it will use the</span></td>
      </tr>
      <tr>
        <td id="L2440" class="blob-num js-line-number" data-line-number="2440"></td>
        <td id="LC2440" class="blob-code js-file-line"><span class="cm">       * mapped trigger from `triggerMap` or the passed trigger if the map is</span></td>
      </tr>
      <tr>
        <td id="L2441" class="blob-num js-line-number" data-line-number="2441"></td>
        <td id="LC2441" class="blob-code js-file-line"><span class="cm">       * undefined; otherwise, it uses the `triggerMap` value of the show</span></td>
      </tr>
      <tr>
        <td id="L2442" class="blob-num js-line-number" data-line-number="2442"></td>
        <td id="LC2442" class="blob-code js-file-line"><span class="cm">       * trigger; else it will just use the show trigger.</span></td>
      </tr>
      <tr>
        <td id="L2443" class="blob-num js-line-number" data-line-number="2443"></td>
        <td id="LC2443" class="blob-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L2444" class="blob-num js-line-number" data-line-number="2444"></td>
        <td id="LC2444" class="blob-code js-file-line">      <span class="kt">function</span> <span class="nf">getTriggers</span> ( <span class="nv">trigger</span> ) {</td>
      </tr>
      <tr>
        <td id="L2445" class="blob-num js-line-number" data-line-number="2445"></td>
        <td id="LC2445" class="blob-code js-file-line">        <span class="k">var</span> show <span class="o">=</span> trigger <span class="o">||</span> options.trigger <span class="o">||</span> defaultTriggerShow;</td>
      </tr>
      <tr>
        <td id="L2446" class="blob-num js-line-number" data-line-number="2446"></td>
        <td id="LC2446" class="blob-code js-file-line">        <span class="k">var</span> hide <span class="o">=</span> triggerMap[show] <span class="o">||</span> show;</td>
      </tr>
      <tr>
        <td id="L2447" class="blob-num js-line-number" data-line-number="2447"></td>
        <td id="LC2447" class="blob-code js-file-line">        <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L2448" class="blob-num js-line-number" data-line-number="2448"></td>
        <td id="LC2448" class="blob-code js-file-line">          show<span class="o">:</span> show,</td>
      </tr>
      <tr>
        <td id="L2449" class="blob-num js-line-number" data-line-number="2449"></td>
        <td id="LC2449" class="blob-code js-file-line">          hide<span class="o">:</span> hide</td>
      </tr>
      <tr>
        <td id="L2450" class="blob-num js-line-number" data-line-number="2450"></td>
        <td id="LC2450" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L2451" class="blob-num js-line-number" data-line-number="2451"></td>
        <td id="LC2451" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L2452" class="blob-num js-line-number" data-line-number="2452"></td>
        <td id="LC2452" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2453" class="blob-num js-line-number" data-line-number="2453"></td>
        <td id="LC2453" class="blob-code js-file-line">      <span class="k">var</span> directiveName <span class="o">=</span> snake_case( type );</td>
      </tr>
      <tr>
        <td id="L2454" class="blob-num js-line-number" data-line-number="2454"></td>
        <td id="LC2454" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2455" class="blob-num js-line-number" data-line-number="2455"></td>
        <td id="LC2455" class="blob-code js-file-line">      <span class="k">var</span> startSym <span class="o">=</span> $interpolate.startSymbol();</td>
      </tr>
      <tr>
        <td id="L2456" class="blob-num js-line-number" data-line-number="2456"></td>
        <td id="LC2456" class="blob-code js-file-line">      <span class="k">var</span> endSym <span class="o">=</span> $interpolate.endSymbol();</td>
      </tr>
      <tr>
        <td id="L2457" class="blob-num js-line-number" data-line-number="2457"></td>
        <td id="LC2457" class="blob-code js-file-line">      <span class="k">var</span> template <span class="o">=</span></td>
      </tr>
      <tr>
        <td id="L2458" class="blob-num js-line-number" data-line-number="2458"></td>
        <td id="LC2458" class="blob-code js-file-line">        <span class="s1">'&lt;div '</span><span class="o">+</span> directiveName <span class="o">+</span><span class="s1">'-popup '</span><span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L2459" class="blob-num js-line-number" data-line-number="2459"></td>
        <td id="LC2459" class="blob-code js-file-line">          <span class="s1">'title=&quot;'</span><span class="o">+</span>startSym<span class="o">+</span><span class="s1">'tt_title'</span><span class="o">+</span>endSym<span class="o">+</span><span class="s1">'&quot; '</span><span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L2460" class="blob-num js-line-number" data-line-number="2460"></td>
        <td id="LC2460" class="blob-code js-file-line">          <span class="s1">'content=&quot;'</span><span class="o">+</span>startSym<span class="o">+</span><span class="s1">'tt_content'</span><span class="o">+</span>endSym<span class="o">+</span><span class="s1">'&quot; '</span><span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L2461" class="blob-num js-line-number" data-line-number="2461"></td>
        <td id="LC2461" class="blob-code js-file-line">          <span class="s1">'placement=&quot;'</span><span class="o">+</span>startSym<span class="o">+</span><span class="s1">'tt_placement'</span><span class="o">+</span>endSym<span class="o">+</span><span class="s1">'&quot; '</span><span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L2462" class="blob-num js-line-number" data-line-number="2462"></td>
        <td id="LC2462" class="blob-code js-file-line">          <span class="s1">'animation=&quot;tt_animation&quot; '</span><span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L2463" class="blob-num js-line-number" data-line-number="2463"></td>
        <td id="LC2463" class="blob-code js-file-line">          <span class="s1">'is-open=&quot;tt_isOpen&quot;'</span><span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L2464" class="blob-num js-line-number" data-line-number="2464"></td>
        <td id="LC2464" class="blob-code js-file-line">          <span class="s1">'&gt;'</span><span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L2465" class="blob-num js-line-number" data-line-number="2465"></td>
        <td id="LC2465" class="blob-code js-file-line">        <span class="s1">'&lt;/div&gt;'</span>;</td>
      </tr>
      <tr>
        <td id="L2466" class="blob-num js-line-number" data-line-number="2466"></td>
        <td id="LC2466" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2467" class="blob-num js-line-number" data-line-number="2467"></td>
        <td id="LC2467" class="blob-code js-file-line">      <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L2468" class="blob-num js-line-number" data-line-number="2468"></td>
        <td id="LC2468" class="blob-code js-file-line">        restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L2469" class="blob-num js-line-number" data-line-number="2469"></td>
        <td id="LC2469" class="blob-code js-file-line">        scope<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L2470" class="blob-num js-line-number" data-line-number="2470"></td>
        <td id="LC2470" class="blob-code js-file-line">        <span class="nf">compile</span>: <span class="kt">function</span> (<span class="nv">tElem</span>, <span class="nv">tAttrs</span>) {</td>
      </tr>
      <tr>
        <td id="L2471" class="blob-num js-line-number" data-line-number="2471"></td>
        <td id="LC2471" class="blob-code js-file-line">          <span class="k">var</span> tooltipLinker <span class="o">=</span> $<span class="nf">compile</span>( template );</td>
      </tr>
      <tr>
        <td id="L2472" class="blob-num js-line-number" data-line-number="2472"></td>
        <td id="LC2472" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2473" class="blob-num js-line-number" data-line-number="2473"></td>
        <td id="LC2473" class="blob-code js-file-line">          <span class="k">return</span> <span class="kt">function</span> <span class="nf">link</span> ( <span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span> ) {</td>
      </tr>
      <tr>
        <td id="L2474" class="blob-num js-line-number" data-line-number="2474"></td>
        <td id="LC2474" class="blob-code js-file-line">            <span class="k">var</span> tooltip;</td>
      </tr>
      <tr>
        <td id="L2475" class="blob-num js-line-number" data-line-number="2475"></td>
        <td id="LC2475" class="blob-code js-file-line">            <span class="k">var</span> transitionTimeout;</td>
      </tr>
      <tr>
        <td id="L2476" class="blob-num js-line-number" data-line-number="2476"></td>
        <td id="LC2476" class="blob-code js-file-line">            <span class="k">var</span> popupTimeout;</td>
      </tr>
      <tr>
        <td id="L2477" class="blob-num js-line-number" data-line-number="2477"></td>
        <td id="LC2477" class="blob-code js-file-line">            <span class="k">var</span> appendToBody <span class="o">=</span> angular.isDefined( options.appendToBody ) <span class="o">?</span> options.appendToBody <span class="o">:</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L2478" class="blob-num js-line-number" data-line-number="2478"></td>
        <td id="LC2478" class="blob-code js-file-line">            <span class="k">var</span> triggers <span class="o">=</span> getTriggers( <span class="kc">undefined</span> );</td>
      </tr>
      <tr>
        <td id="L2479" class="blob-num js-line-number" data-line-number="2479"></td>
        <td id="LC2479" class="blob-code js-file-line">            <span class="k">var</span> hasEnableExp <span class="o">=</span> angular.isDefined(attrs[prefix<span class="o">+</span><span class="s1">'Enable'</span>]);</td>
      </tr>
      <tr>
        <td id="L2480" class="blob-num js-line-number" data-line-number="2480"></td>
        <td id="LC2480" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2481" class="blob-num js-line-number" data-line-number="2481"></td>
        <td id="LC2481" class="blob-code js-file-line">            <span class="k">var</span> <span class="nf">positionTooltip</span> <span class="o">=</span> <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2482" class="blob-num js-line-number" data-line-number="2482"></td>
        <td id="LC2482" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2483" class="blob-num js-line-number" data-line-number="2483"></td>
        <td id="LC2483" class="blob-code js-file-line">              <span class="k">var</span> ttPosition <span class="o">=</span> $position.positionElements(element, tooltip, scope.tt_placement, appendToBody);</td>
      </tr>
      <tr>
        <td id="L2484" class="blob-num js-line-number" data-line-number="2484"></td>
        <td id="LC2484" class="blob-code js-file-line">              ttPosition.<span class="no">top</span> <span class="o">+=</span> <span class="s1">'px'</span>;</td>
      </tr>
      <tr>
        <td id="L2485" class="blob-num js-line-number" data-line-number="2485"></td>
        <td id="LC2485" class="blob-code js-file-line">              ttPosition.<span class="no">left</span> <span class="o">+=</span> <span class="s1">'px'</span>;</td>
      </tr>
      <tr>
        <td id="L2486" class="blob-num js-line-number" data-line-number="2486"></td>
        <td id="LC2486" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2487" class="blob-num js-line-number" data-line-number="2487"></td>
        <td id="LC2487" class="blob-code js-file-line">              <span class="c1">// Now set the calculated positioning.</span></td>
      </tr>
      <tr>
        <td id="L2488" class="blob-num js-line-number" data-line-number="2488"></td>
        <td id="LC2488" class="blob-code js-file-line">              tooltip.css( ttPosition );</td>
      </tr>
      <tr>
        <td id="L2489" class="blob-num js-line-number" data-line-number="2489"></td>
        <td id="LC2489" class="blob-code js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L2490" class="blob-num js-line-number" data-line-number="2490"></td>
        <td id="LC2490" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2491" class="blob-num js-line-number" data-line-number="2491"></td>
        <td id="LC2491" class="blob-code js-file-line">            <span class="c1">// By default, the tooltip is not open.</span></td>
      </tr>
      <tr>
        <td id="L2492" class="blob-num js-line-number" data-line-number="2492"></td>
        <td id="LC2492" class="blob-code js-file-line">            <span class="c1">// TODO add ability to start tooltip opened</span></td>
      </tr>
      <tr>
        <td id="L2493" class="blob-num js-line-number" data-line-number="2493"></td>
        <td id="LC2493" class="blob-code js-file-line">            scope.tt_isOpen <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L2494" class="blob-num js-line-number" data-line-number="2494"></td>
        <td id="LC2494" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2495" class="blob-num js-line-number" data-line-number="2495"></td>
        <td id="LC2495" class="blob-code js-file-line">            <span class="kt">function</span> <span class="nf">toggleTooltipBind</span> () {</td>
      </tr>
      <tr>
        <td id="L2496" class="blob-num js-line-number" data-line-number="2496"></td>
        <td id="LC2496" class="blob-code js-file-line">              <span class="k">if</span> ( <span class="o">!</span> scope.tt_isOpen ) {</td>
      </tr>
      <tr>
        <td id="L2497" class="blob-num js-line-number" data-line-number="2497"></td>
        <td id="LC2497" class="blob-code js-file-line">                showTooltipBind();</td>
      </tr>
      <tr>
        <td id="L2498" class="blob-num js-line-number" data-line-number="2498"></td>
        <td id="LC2498" class="blob-code js-file-line">              } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2499" class="blob-num js-line-number" data-line-number="2499"></td>
        <td id="LC2499" class="blob-code js-file-line">                hideTooltipBind();</td>
      </tr>
      <tr>
        <td id="L2500" class="blob-num js-line-number" data-line-number="2500"></td>
        <td id="LC2500" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L2501" class="blob-num js-line-number" data-line-number="2501"></td>
        <td id="LC2501" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2502" class="blob-num js-line-number" data-line-number="2502"></td>
        <td id="LC2502" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2503" class="blob-num js-line-number" data-line-number="2503"></td>
        <td id="LC2503" class="blob-code js-file-line">            <span class="c1">// Show the tooltip with delay if specified, otherwise show it immediately</span></td>
      </tr>
      <tr>
        <td id="L2504" class="blob-num js-line-number" data-line-number="2504"></td>
        <td id="LC2504" class="blob-code js-file-line">            <span class="kt">function</span> <span class="nf">showTooltipBind</span>() {</td>
      </tr>
      <tr>
        <td id="L2505" class="blob-num js-line-number" data-line-number="2505"></td>
        <td id="LC2505" class="blob-code js-file-line">              <span class="k">if</span>(hasEnableExp <span class="o">&amp;&amp;</span> <span class="o">!</span>scope.$<span class="nf">eval</span>(attrs[prefix<span class="o">+</span><span class="s1">'Enable'</span>])) {</td>
      </tr>
      <tr>
        <td id="L2506" class="blob-num js-line-number" data-line-number="2506"></td>
        <td id="LC2506" class="blob-code js-file-line">                <span class="k">return</span>;</td>
      </tr>
      <tr>
        <td id="L2507" class="blob-num js-line-number" data-line-number="2507"></td>
        <td id="LC2507" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L2508" class="blob-num js-line-number" data-line-number="2508"></td>
        <td id="LC2508" class="blob-code js-file-line">              <span class="k">if</span> ( scope.tt_popupDelay ) {</td>
      </tr>
      <tr>
        <td id="L2509" class="blob-num js-line-number" data-line-number="2509"></td>
        <td id="LC2509" class="blob-code js-file-line">                <span class="c1">// Do nothing if the tooltip was already scheduled to pop-up.</span></td>
      </tr>
      <tr>
        <td id="L2510" class="blob-num js-line-number" data-line-number="2510"></td>
        <td id="LC2510" class="blob-code js-file-line">                <span class="c1">// This happens if show is triggered multiple times before any hide is triggered.</span></td>
      </tr>
      <tr>
        <td id="L2511" class="blob-num js-line-number" data-line-number="2511"></td>
        <td id="LC2511" class="blob-code js-file-line">                <span class="k">if</span> (<span class="o">!</span>popupTimeout) {</td>
      </tr>
      <tr>
        <td id="L2512" class="blob-num js-line-number" data-line-number="2512"></td>
        <td id="LC2512" class="blob-code js-file-line">                  popupTimeout <span class="o">=</span> $timeout( show, scope.tt_popupDelay, <span class="kc">false</span> );</td>
      </tr>
      <tr>
        <td id="L2513" class="blob-num js-line-number" data-line-number="2513"></td>
        <td id="LC2513" class="blob-code js-file-line">                  popupTimeout.then(<span class="kt">function</span>(<span class="nv">reposition</span>){reposition();});</td>
      </tr>
      <tr>
        <td id="L2514" class="blob-num js-line-number" data-line-number="2514"></td>
        <td id="LC2514" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L2515" class="blob-num js-line-number" data-line-number="2515"></td>
        <td id="LC2515" class="blob-code js-file-line">              } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2516" class="blob-num js-line-number" data-line-number="2516"></td>
        <td id="LC2516" class="blob-code js-file-line">                show()();</td>
      </tr>
      <tr>
        <td id="L2517" class="blob-num js-line-number" data-line-number="2517"></td>
        <td id="LC2517" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L2518" class="blob-num js-line-number" data-line-number="2518"></td>
        <td id="LC2518" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2519" class="blob-num js-line-number" data-line-number="2519"></td>
        <td id="LC2519" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2520" class="blob-num js-line-number" data-line-number="2520"></td>
        <td id="LC2520" class="blob-code js-file-line">            <span class="kt">function</span> <span class="nf">hideTooltipBind</span> () {</td>
      </tr>
      <tr>
        <td id="L2521" class="blob-num js-line-number" data-line-number="2521"></td>
        <td id="LC2521" class="blob-code js-file-line">              scope.$<span class="nf">apply</span>(<span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2522" class="blob-num js-line-number" data-line-number="2522"></td>
        <td id="LC2522" class="blob-code js-file-line">                hide();</td>
      </tr>
      <tr>
        <td id="L2523" class="blob-num js-line-number" data-line-number="2523"></td>
        <td id="LC2523" class="blob-code js-file-line">              });</td>
      </tr>
      <tr>
        <td id="L2524" class="blob-num js-line-number" data-line-number="2524"></td>
        <td id="LC2524" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2525" class="blob-num js-line-number" data-line-number="2525"></td>
        <td id="LC2525" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2526" class="blob-num js-line-number" data-line-number="2526"></td>
        <td id="LC2526" class="blob-code js-file-line">            <span class="c1">// Show the tooltip popup element.</span></td>
      </tr>
      <tr>
        <td id="L2527" class="blob-num js-line-number" data-line-number="2527"></td>
        <td id="LC2527" class="blob-code js-file-line">            <span class="kt">function</span> <span class="nf">show</span>() {</td>
      </tr>
      <tr>
        <td id="L2528" class="blob-num js-line-number" data-line-number="2528"></td>
        <td id="LC2528" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2529" class="blob-num js-line-number" data-line-number="2529"></td>
        <td id="LC2529" class="blob-code js-file-line">              popupTimeout <span class="o">=</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L2530" class="blob-num js-line-number" data-line-number="2530"></td>
        <td id="LC2530" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2531" class="blob-num js-line-number" data-line-number="2531"></td>
        <td id="LC2531" class="blob-code js-file-line">              <span class="c1">// If there is a pending remove transition, we must cancel it, lest the</span></td>
      </tr>
      <tr>
        <td id="L2532" class="blob-num js-line-number" data-line-number="2532"></td>
        <td id="LC2532" class="blob-code js-file-line">              <span class="c1">// tooltip be mysteriously removed.</span></td>
      </tr>
      <tr>
        <td id="L2533" class="blob-num js-line-number" data-line-number="2533"></td>
        <td id="LC2533" class="blob-code js-file-line">              <span class="k">if</span> ( transitionTimeout ) {</td>
      </tr>
      <tr>
        <td id="L2534" class="blob-num js-line-number" data-line-number="2534"></td>
        <td id="LC2534" class="blob-code js-file-line">                $timeout.cancel( transitionTimeout );</td>
      </tr>
      <tr>
        <td id="L2535" class="blob-num js-line-number" data-line-number="2535"></td>
        <td id="LC2535" class="blob-code js-file-line">                transitionTimeout <span class="o">=</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L2536" class="blob-num js-line-number" data-line-number="2536"></td>
        <td id="LC2536" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L2537" class="blob-num js-line-number" data-line-number="2537"></td>
        <td id="LC2537" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2538" class="blob-num js-line-number" data-line-number="2538"></td>
        <td id="LC2538" class="blob-code js-file-line">              <span class="c1">// Don't show empty tooltips.</span></td>
      </tr>
      <tr>
        <td id="L2539" class="blob-num js-line-number" data-line-number="2539"></td>
        <td id="LC2539" class="blob-code js-file-line">              <span class="k">if</span> ( <span class="o">!</span> scope.tt_content ) {</td>
      </tr>
      <tr>
        <td id="L2540" class="blob-num js-line-number" data-line-number="2540"></td>
        <td id="LC2540" class="blob-code js-file-line">                <span class="k">return</span> angular.noop;</td>
      </tr>
      <tr>
        <td id="L2541" class="blob-num js-line-number" data-line-number="2541"></td>
        <td id="LC2541" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L2542" class="blob-num js-line-number" data-line-number="2542"></td>
        <td id="LC2542" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2543" class="blob-num js-line-number" data-line-number="2543"></td>
        <td id="LC2543" class="blob-code js-file-line">              createTooltip();</td>
      </tr>
      <tr>
        <td id="L2544" class="blob-num js-line-number" data-line-number="2544"></td>
        <td id="LC2544" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2545" class="blob-num js-line-number" data-line-number="2545"></td>
        <td id="LC2545" class="blob-code js-file-line">              <span class="c1">// Set the initial positioning.</span></td>
      </tr>
      <tr>
        <td id="L2546" class="blob-num js-line-number" data-line-number="2546"></td>
        <td id="LC2546" class="blob-code js-file-line">              tooltip.css({ top<span class="o">:</span> <span class="m">0</span>, left<span class="o">:</span> <span class="m">0</span>, display<span class="o">:</span> <span class="s1">'block'</span> });</td>
      </tr>
      <tr>
        <td id="L2547" class="blob-num js-line-number" data-line-number="2547"></td>
        <td id="LC2547" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2548" class="blob-num js-line-number" data-line-number="2548"></td>
        <td id="LC2548" class="blob-code js-file-line">              <span class="c1">// Now we add it to the DOM because need some info about it. But it's not </span></td>
      </tr>
      <tr>
        <td id="L2549" class="blob-num js-line-number" data-line-number="2549"></td>
        <td id="LC2549" class="blob-code js-file-line">              <span class="c1">// visible yet anyway.</span></td>
      </tr>
      <tr>
        <td id="L2550" class="blob-num js-line-number" data-line-number="2550"></td>
        <td id="LC2550" class="blob-code js-file-line">              <span class="k">if</span> ( appendToBody ) {</td>
      </tr>
      <tr>
        <td id="L2551" class="blob-num js-line-number" data-line-number="2551"></td>
        <td id="LC2551" class="blob-code js-file-line">                  $<span class="no">document</span>.<span class="nf">find</span>( <span class="s1">'body'</span> ).append( tooltip );</td>
      </tr>
      <tr>
        <td id="L2552" class="blob-num js-line-number" data-line-number="2552"></td>
        <td id="LC2552" class="blob-code js-file-line">              } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2553" class="blob-num js-line-number" data-line-number="2553"></td>
        <td id="LC2553" class="blob-code js-file-line">                element.after( tooltip );</td>
      </tr>
      <tr>
        <td id="L2554" class="blob-num js-line-number" data-line-number="2554"></td>
        <td id="LC2554" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L2555" class="blob-num js-line-number" data-line-number="2555"></td>
        <td id="LC2555" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2556" class="blob-num js-line-number" data-line-number="2556"></td>
        <td id="LC2556" class="blob-code js-file-line">              positionTooltip();</td>
      </tr>
      <tr>
        <td id="L2557" class="blob-num js-line-number" data-line-number="2557"></td>
        <td id="LC2557" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2558" class="blob-num js-line-number" data-line-number="2558"></td>
        <td id="LC2558" class="blob-code js-file-line">              <span class="c1">// And show the tooltip.</span></td>
      </tr>
      <tr>
        <td id="L2559" class="blob-num js-line-number" data-line-number="2559"></td>
        <td id="LC2559" class="blob-code js-file-line">              scope.tt_isOpen <span class="o">=</span> <span class="kc">true</span>;</td>
      </tr>
      <tr>
        <td id="L2560" class="blob-num js-line-number" data-line-number="2560"></td>
        <td id="LC2560" class="blob-code js-file-line">              scope.$digest(); <span class="c1">// digest required as $apply is not called</span></td>
      </tr>
      <tr>
        <td id="L2561" class="blob-num js-line-number" data-line-number="2561"></td>
        <td id="LC2561" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2562" class="blob-num js-line-number" data-line-number="2562"></td>
        <td id="LC2562" class="blob-code js-file-line">              <span class="c1">// Return positioning function as promise callback for correct</span></td>
      </tr>
      <tr>
        <td id="L2563" class="blob-num js-line-number" data-line-number="2563"></td>
        <td id="LC2563" class="blob-code js-file-line">              <span class="c1">// positioning after draw.</span></td>
      </tr>
      <tr>
        <td id="L2564" class="blob-num js-line-number" data-line-number="2564"></td>
        <td id="LC2564" class="blob-code js-file-line">              <span class="k">return</span> positionTooltip;</td>
      </tr>
      <tr>
        <td id="L2565" class="blob-num js-line-number" data-line-number="2565"></td>
        <td id="LC2565" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2566" class="blob-num js-line-number" data-line-number="2566"></td>
        <td id="LC2566" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2567" class="blob-num js-line-number" data-line-number="2567"></td>
        <td id="LC2567" class="blob-code js-file-line">            <span class="c1">// Hide the tooltip popup element.</span></td>
      </tr>
      <tr>
        <td id="L2568" class="blob-num js-line-number" data-line-number="2568"></td>
        <td id="LC2568" class="blob-code js-file-line">            <span class="kt">function</span> <span class="nf">hide</span>() {</td>
      </tr>
      <tr>
        <td id="L2569" class="blob-num js-line-number" data-line-number="2569"></td>
        <td id="LC2569" class="blob-code js-file-line">              <span class="c1">// First things first: we don't show it anymore.</span></td>
      </tr>
      <tr>
        <td id="L2570" class="blob-num js-line-number" data-line-number="2570"></td>
        <td id="LC2570" class="blob-code js-file-line">              scope.tt_isOpen <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L2571" class="blob-num js-line-number" data-line-number="2571"></td>
        <td id="LC2571" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2572" class="blob-num js-line-number" data-line-number="2572"></td>
        <td id="LC2572" class="blob-code js-file-line">              <span class="c1">//if tooltip is going to be shown after delay, we must cancel this</span></td>
      </tr>
      <tr>
        <td id="L2573" class="blob-num js-line-number" data-line-number="2573"></td>
        <td id="LC2573" class="blob-code js-file-line">              $timeout.cancel( popupTimeout );</td>
      </tr>
      <tr>
        <td id="L2574" class="blob-num js-line-number" data-line-number="2574"></td>
        <td id="LC2574" class="blob-code js-file-line">              popupTimeout <span class="o">=</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L2575" class="blob-num js-line-number" data-line-number="2575"></td>
        <td id="LC2575" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2576" class="blob-num js-line-number" data-line-number="2576"></td>
        <td id="LC2576" class="blob-code js-file-line">              <span class="c1">// And now we remove it from the DOM. However, if we have animation, we </span></td>
      </tr>
      <tr>
        <td id="L2577" class="blob-num js-line-number" data-line-number="2577"></td>
        <td id="LC2577" class="blob-code js-file-line">              <span class="c1">// need to wait for it to expire beforehand.</span></td>
      </tr>
      <tr>
        <td id="L2578" class="blob-num js-line-number" data-line-number="2578"></td>
        <td id="LC2578" class="blob-code js-file-line">              <span class="c1">// FIXME: this is a placeholder for a port of the transitions library.</span></td>
      </tr>
      <tr>
        <td id="L2579" class="blob-num js-line-number" data-line-number="2579"></td>
        <td id="LC2579" class="blob-code js-file-line">              <span class="k">if</span> ( scope.tt_animation ) {</td>
      </tr>
      <tr>
        <td id="L2580" class="blob-num js-line-number" data-line-number="2580"></td>
        <td id="LC2580" class="blob-code js-file-line">                <span class="k">if</span> (<span class="o">!</span>transitionTimeout) {</td>
      </tr>
      <tr>
        <td id="L2581" class="blob-num js-line-number" data-line-number="2581"></td>
        <td id="LC2581" class="blob-code js-file-line">                  transitionTimeout <span class="o">=</span> $timeout(removeTooltip, <span class="m">500</span>);</td>
      </tr>
      <tr>
        <td id="L2582" class="blob-num js-line-number" data-line-number="2582"></td>
        <td id="LC2582" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L2583" class="blob-num js-line-number" data-line-number="2583"></td>
        <td id="LC2583" class="blob-code js-file-line">              } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2584" class="blob-num js-line-number" data-line-number="2584"></td>
        <td id="LC2584" class="blob-code js-file-line">                removeTooltip();</td>
      </tr>
      <tr>
        <td id="L2585" class="blob-num js-line-number" data-line-number="2585"></td>
        <td id="LC2585" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L2586" class="blob-num js-line-number" data-line-number="2586"></td>
        <td id="LC2586" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2587" class="blob-num js-line-number" data-line-number="2587"></td>
        <td id="LC2587" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2588" class="blob-num js-line-number" data-line-number="2588"></td>
        <td id="LC2588" class="blob-code js-file-line">            <span class="kt">function</span> <span class="nf">createTooltip</span>() {</td>
      </tr>
      <tr>
        <td id="L2589" class="blob-num js-line-number" data-line-number="2589"></td>
        <td id="LC2589" class="blob-code js-file-line">              <span class="c1">// There can only be one tooltip element per directive shown at once.</span></td>
      </tr>
      <tr>
        <td id="L2590" class="blob-num js-line-number" data-line-number="2590"></td>
        <td id="LC2590" class="blob-code js-file-line">              <span class="k">if</span> (tooltip) {</td>
      </tr>
      <tr>
        <td id="L2591" class="blob-num js-line-number" data-line-number="2591"></td>
        <td id="LC2591" class="blob-code js-file-line">                removeTooltip();</td>
      </tr>
      <tr>
        <td id="L2592" class="blob-num js-line-number" data-line-number="2592"></td>
        <td id="LC2592" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L2593" class="blob-num js-line-number" data-line-number="2593"></td>
        <td id="LC2593" class="blob-code js-file-line">              tooltip <span class="o">=</span> tooltipLinker(scope, <span class="kt">function</span> () {});</td>
      </tr>
      <tr>
        <td id="L2594" class="blob-num js-line-number" data-line-number="2594"></td>
        <td id="LC2594" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2595" class="blob-num js-line-number" data-line-number="2595"></td>
        <td id="LC2595" class="blob-code js-file-line">              <span class="c1">// Get contents rendered into the tooltip</span></td>
      </tr>
      <tr>
        <td id="L2596" class="blob-num js-line-number" data-line-number="2596"></td>
        <td id="LC2596" class="blob-code js-file-line">              scope.$digest();</td>
      </tr>
      <tr>
        <td id="L2597" class="blob-num js-line-number" data-line-number="2597"></td>
        <td id="LC2597" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2598" class="blob-num js-line-number" data-line-number="2598"></td>
        <td id="LC2598" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2599" class="blob-num js-line-number" data-line-number="2599"></td>
        <td id="LC2599" class="blob-code js-file-line">            <span class="kt">function</span> <span class="nf">removeTooltip</span>() {</td>
      </tr>
      <tr>
        <td id="L2600" class="blob-num js-line-number" data-line-number="2600"></td>
        <td id="LC2600" class="blob-code js-file-line">              transitionTimeout <span class="o">=</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L2601" class="blob-num js-line-number" data-line-number="2601"></td>
        <td id="LC2601" class="blob-code js-file-line">              <span class="k">if</span> (tooltip) {</td>
      </tr>
      <tr>
        <td id="L2602" class="blob-num js-line-number" data-line-number="2602"></td>
        <td id="LC2602" class="blob-code js-file-line">                tooltip.<span class="nf">remove</span>();</td>
      </tr>
      <tr>
        <td id="L2603" class="blob-num js-line-number" data-line-number="2603"></td>
        <td id="LC2603" class="blob-code js-file-line">                tooltip <span class="o">=</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L2604" class="blob-num js-line-number" data-line-number="2604"></td>
        <td id="LC2604" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L2605" class="blob-num js-line-number" data-line-number="2605"></td>
        <td id="LC2605" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2606" class="blob-num js-line-number" data-line-number="2606"></td>
        <td id="LC2606" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2607" class="blob-num js-line-number" data-line-number="2607"></td>
        <td id="LC2607" class="blob-code js-file-line">            <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L2608" class="blob-num js-line-number" data-line-number="2608"></td>
        <td id="LC2608" class="blob-code js-file-line"><span class="cm">             * Observe the relevant attributes.</span></td>
      </tr>
      <tr>
        <td id="L2609" class="blob-num js-line-number" data-line-number="2609"></td>
        <td id="LC2609" class="blob-code js-file-line"><span class="cm">             */</span></td>
      </tr>
      <tr>
        <td id="L2610" class="blob-num js-line-number" data-line-number="2610"></td>
        <td id="LC2610" class="blob-code js-file-line">            attrs.$observe( type, <span class="kt">function</span> ( <span class="nv">val</span> ) {</td>
      </tr>
      <tr>
        <td id="L2611" class="blob-num js-line-number" data-line-number="2611"></td>
        <td id="LC2611" class="blob-code js-file-line">              scope.tt_content <span class="o">=</span> val;</td>
      </tr>
      <tr>
        <td id="L2612" class="blob-num js-line-number" data-line-number="2612"></td>
        <td id="LC2612" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2613" class="blob-num js-line-number" data-line-number="2613"></td>
        <td id="LC2613" class="blob-code js-file-line">              <span class="k">if</span> (<span class="o">!</span>val <span class="o">&amp;&amp;</span> scope.tt_isOpen ) {</td>
      </tr>
      <tr>
        <td id="L2614" class="blob-num js-line-number" data-line-number="2614"></td>
        <td id="LC2614" class="blob-code js-file-line">                hide();</td>
      </tr>
      <tr>
        <td id="L2615" class="blob-num js-line-number" data-line-number="2615"></td>
        <td id="LC2615" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L2616" class="blob-num js-line-number" data-line-number="2616"></td>
        <td id="LC2616" class="blob-code js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L2617" class="blob-num js-line-number" data-line-number="2617"></td>
        <td id="LC2617" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2618" class="blob-num js-line-number" data-line-number="2618"></td>
        <td id="LC2618" class="blob-code js-file-line">            attrs.$observe( prefix<span class="o">+</span><span class="s1">'Title'</span>, <span class="kt">function</span> ( <span class="nv">val</span> ) {</td>
      </tr>
      <tr>
        <td id="L2619" class="blob-num js-line-number" data-line-number="2619"></td>
        <td id="LC2619" class="blob-code js-file-line">              scope.tt_title <span class="o">=</span> val;</td>
      </tr>
      <tr>
        <td id="L2620" class="blob-num js-line-number" data-line-number="2620"></td>
        <td id="LC2620" class="blob-code js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L2621" class="blob-num js-line-number" data-line-number="2621"></td>
        <td id="LC2621" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2622" class="blob-num js-line-number" data-line-number="2622"></td>
        <td id="LC2622" class="blob-code js-file-line">            attrs.$observe( prefix<span class="o">+</span><span class="s1">'Placement'</span>, <span class="kt">function</span> ( <span class="nv">val</span> ) {</td>
      </tr>
      <tr>
        <td id="L2623" class="blob-num js-line-number" data-line-number="2623"></td>
        <td id="LC2623" class="blob-code js-file-line">              scope.tt_placement <span class="o">=</span> angular.isDefined( val ) <span class="o">?</span> val <span class="o">:</span> options.placement;</td>
      </tr>
      <tr>
        <td id="L2624" class="blob-num js-line-number" data-line-number="2624"></td>
        <td id="LC2624" class="blob-code js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L2625" class="blob-num js-line-number" data-line-number="2625"></td>
        <td id="LC2625" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2626" class="blob-num js-line-number" data-line-number="2626"></td>
        <td id="LC2626" class="blob-code js-file-line">            attrs.$observe( prefix<span class="o">+</span><span class="s1">'PopupDelay'</span>, <span class="kt">function</span> ( <span class="nv">val</span> ) {</td>
      </tr>
      <tr>
        <td id="L2627" class="blob-num js-line-number" data-line-number="2627"></td>
        <td id="LC2627" class="blob-code js-file-line">              <span class="k">var</span> delay <span class="o">=</span> <span class="nf">parseInt</span>( val, <span class="m">10</span> );</td>
      </tr>
      <tr>
        <td id="L2628" class="blob-num js-line-number" data-line-number="2628"></td>
        <td id="LC2628" class="blob-code js-file-line">              scope.tt_popupDelay <span class="o">=</span> <span class="o">!</span> <span class="nf">isNaN</span>(delay) <span class="o">?</span> delay <span class="o">:</span> options.popupDelay;</td>
      </tr>
      <tr>
        <td id="L2629" class="blob-num js-line-number" data-line-number="2629"></td>
        <td id="LC2629" class="blob-code js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L2630" class="blob-num js-line-number" data-line-number="2630"></td>
        <td id="LC2630" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2631" class="blob-num js-line-number" data-line-number="2631"></td>
        <td id="LC2631" class="blob-code js-file-line">            <span class="k">var</span> <span class="nf">unregisterTriggers</span> <span class="o">=</span> <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2632" class="blob-num js-line-number" data-line-number="2632"></td>
        <td id="LC2632" class="blob-code js-file-line">              element.unbind(triggers.show, showTooltipBind);</td>
      </tr>
      <tr>
        <td id="L2633" class="blob-num js-line-number" data-line-number="2633"></td>
        <td id="LC2633" class="blob-code js-file-line">              element.unbind(triggers.hide, hideTooltipBind);</td>
      </tr>
      <tr>
        <td id="L2634" class="blob-num js-line-number" data-line-number="2634"></td>
        <td id="LC2634" class="blob-code js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L2635" class="blob-num js-line-number" data-line-number="2635"></td>
        <td id="LC2635" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2636" class="blob-num js-line-number" data-line-number="2636"></td>
        <td id="LC2636" class="blob-code js-file-line">            attrs.$observe( prefix<span class="o">+</span><span class="s1">'Trigger'</span>, <span class="kt">function</span> ( <span class="nv">val</span> ) {</td>
      </tr>
      <tr>
        <td id="L2637" class="blob-num js-line-number" data-line-number="2637"></td>
        <td id="LC2637" class="blob-code js-file-line">              unregisterTriggers();</td>
      </tr>
      <tr>
        <td id="L2638" class="blob-num js-line-number" data-line-number="2638"></td>
        <td id="LC2638" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2639" class="blob-num js-line-number" data-line-number="2639"></td>
        <td id="LC2639" class="blob-code js-file-line">              triggers <span class="o">=</span> getTriggers( val );</td>
      </tr>
      <tr>
        <td id="L2640" class="blob-num js-line-number" data-line-number="2640"></td>
        <td id="LC2640" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2641" class="blob-num js-line-number" data-line-number="2641"></td>
        <td id="LC2641" class="blob-code js-file-line">              <span class="k">if</span> ( triggers.show <span class="o">===</span> triggers.hide ) {</td>
      </tr>
      <tr>
        <td id="L2642" class="blob-num js-line-number" data-line-number="2642"></td>
        <td id="LC2642" class="blob-code js-file-line">                element.bind( triggers.show, toggleTooltipBind );</td>
      </tr>
      <tr>
        <td id="L2643" class="blob-num js-line-number" data-line-number="2643"></td>
        <td id="LC2643" class="blob-code js-file-line">              } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2644" class="blob-num js-line-number" data-line-number="2644"></td>
        <td id="LC2644" class="blob-code js-file-line">                element.bind( triggers.show, showTooltipBind );</td>
      </tr>
      <tr>
        <td id="L2645" class="blob-num js-line-number" data-line-number="2645"></td>
        <td id="LC2645" class="blob-code js-file-line">                element.bind( triggers.hide, hideTooltipBind );</td>
      </tr>
      <tr>
        <td id="L2646" class="blob-num js-line-number" data-line-number="2646"></td>
        <td id="LC2646" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L2647" class="blob-num js-line-number" data-line-number="2647"></td>
        <td id="LC2647" class="blob-code js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L2648" class="blob-num js-line-number" data-line-number="2648"></td>
        <td id="LC2648" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2649" class="blob-num js-line-number" data-line-number="2649"></td>
        <td id="LC2649" class="blob-code js-file-line">            <span class="k">var</span> animation <span class="o">=</span> scope.$<span class="nf">eval</span>(attrs[prefix <span class="o">+</span> <span class="s1">'Animation'</span>]);</td>
      </tr>
      <tr>
        <td id="L2650" class="blob-num js-line-number" data-line-number="2650"></td>
        <td id="LC2650" class="blob-code js-file-line">            scope.tt_animation <span class="o">=</span> angular.isDefined(animation) <span class="o">?</span> <span class="o">!!</span>animation <span class="o">:</span> options.animation;</td>
      </tr>
      <tr>
        <td id="L2651" class="blob-num js-line-number" data-line-number="2651"></td>
        <td id="LC2651" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2652" class="blob-num js-line-number" data-line-number="2652"></td>
        <td id="LC2652" class="blob-code js-file-line">            attrs.$observe( prefix<span class="o">+</span><span class="s1">'AppendToBody'</span>, <span class="kt">function</span> ( <span class="nv">val</span> ) {</td>
      </tr>
      <tr>
        <td id="L2653" class="blob-num js-line-number" data-line-number="2653"></td>
        <td id="LC2653" class="blob-code js-file-line">              appendToBody <span class="o">=</span> angular.isDefined( val ) <span class="o">?</span> $<span class="nf">parse</span>( val )( scope ) <span class="o">:</span> appendToBody;</td>
      </tr>
      <tr>
        <td id="L2654" class="blob-num js-line-number" data-line-number="2654"></td>
        <td id="LC2654" class="blob-code js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L2655" class="blob-num js-line-number" data-line-number="2655"></td>
        <td id="LC2655" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2656" class="blob-num js-line-number" data-line-number="2656"></td>
        <td id="LC2656" class="blob-code js-file-line">            <span class="c1">// if a tooltip is attached to &lt;body&gt; we need to remove it on</span></td>
      </tr>
      <tr>
        <td id="L2657" class="blob-num js-line-number" data-line-number="2657"></td>
        <td id="LC2657" class="blob-code js-file-line">            <span class="c1">// location change as its parent scope will probably not be destroyed</span></td>
      </tr>
      <tr>
        <td id="L2658" class="blob-num js-line-number" data-line-number="2658"></td>
        <td id="LC2658" class="blob-code js-file-line">            <span class="c1">// by the change.</span></td>
      </tr>
      <tr>
        <td id="L2659" class="blob-num js-line-number" data-line-number="2659"></td>
        <td id="LC2659" class="blob-code js-file-line">            <span class="k">if</span> ( appendToBody ) {</td>
      </tr>
      <tr>
        <td id="L2660" class="blob-num js-line-number" data-line-number="2660"></td>
        <td id="LC2660" class="blob-code js-file-line">              scope.$on(<span class="s1">'$locationChangeSuccess'</span>, <span class="kt">function</span> <span class="nf">closeTooltipOnLocationChangeSuccess</span> () {</td>
      </tr>
      <tr>
        <td id="L2661" class="blob-num js-line-number" data-line-number="2661"></td>
        <td id="LC2661" class="blob-code js-file-line">              <span class="k">if</span> ( scope.tt_isOpen ) {</td>
      </tr>
      <tr>
        <td id="L2662" class="blob-num js-line-number" data-line-number="2662"></td>
        <td id="LC2662" class="blob-code js-file-line">                hide();</td>
      </tr>
      <tr>
        <td id="L2663" class="blob-num js-line-number" data-line-number="2663"></td>
        <td id="LC2663" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L2664" class="blob-num js-line-number" data-line-number="2664"></td>
        <td id="LC2664" class="blob-code js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L2665" class="blob-num js-line-number" data-line-number="2665"></td>
        <td id="LC2665" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L2666" class="blob-num js-line-number" data-line-number="2666"></td>
        <td id="LC2666" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2667" class="blob-num js-line-number" data-line-number="2667"></td>
        <td id="LC2667" class="blob-code js-file-line">            <span class="c1">// Make sure tooltip is destroyed and removed.</span></td>
      </tr>
      <tr>
        <td id="L2668" class="blob-num js-line-number" data-line-number="2668"></td>
        <td id="LC2668" class="blob-code js-file-line">            scope.$on(<span class="s1">'$destroy'</span>, <span class="kt">function</span> <span class="nf">onDestroyTooltip</span>() {</td>
      </tr>
      <tr>
        <td id="L2669" class="blob-num js-line-number" data-line-number="2669"></td>
        <td id="LC2669" class="blob-code js-file-line">              $timeout.cancel( transitionTimeout );</td>
      </tr>
      <tr>
        <td id="L2670" class="blob-num js-line-number" data-line-number="2670"></td>
        <td id="LC2670" class="blob-code js-file-line">              $timeout.cancel( popupTimeout );</td>
      </tr>
      <tr>
        <td id="L2671" class="blob-num js-line-number" data-line-number="2671"></td>
        <td id="LC2671" class="blob-code js-file-line">              unregisterTriggers();</td>
      </tr>
      <tr>
        <td id="L2672" class="blob-num js-line-number" data-line-number="2672"></td>
        <td id="LC2672" class="blob-code js-file-line">              removeTooltip();</td>
      </tr>
      <tr>
        <td id="L2673" class="blob-num js-line-number" data-line-number="2673"></td>
        <td id="LC2673" class="blob-code js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L2674" class="blob-num js-line-number" data-line-number="2674"></td>
        <td id="LC2674" class="blob-code js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L2675" class="blob-num js-line-number" data-line-number="2675"></td>
        <td id="LC2675" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L2676" class="blob-num js-line-number" data-line-number="2676"></td>
        <td id="LC2676" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L2677" class="blob-num js-line-number" data-line-number="2677"></td>
        <td id="LC2677" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L2678" class="blob-num js-line-number" data-line-number="2678"></td>
        <td id="LC2678" class="blob-code js-file-line">  }];</td>
      </tr>
      <tr>
        <td id="L2679" class="blob-num js-line-number" data-line-number="2679"></td>
        <td id="LC2679" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L2680" class="blob-num js-line-number" data-line-number="2680"></td>
        <td id="LC2680" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2681" class="blob-num js-line-number" data-line-number="2681"></td>
        <td id="LC2681" class="blob-code js-file-line">.directive( <span class="s1">'tooltipPopup'</span>, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2682" class="blob-num js-line-number" data-line-number="2682"></td>
        <td id="LC2682" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L2683" class="blob-num js-line-number" data-line-number="2683"></td>
        <td id="LC2683" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L2684" class="blob-num js-line-number" data-line-number="2684"></td>
        <td id="LC2684" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L2685" class="blob-num js-line-number" data-line-number="2685"></td>
        <td id="LC2685" class="blob-code js-file-line">    scope<span class="o">:</span> { content<span class="o">:</span> <span class="s1">'@'</span>, placement<span class="o">:</span> <span class="s1">'@'</span>, animation<span class="o">:</span> <span class="s1">'&amp;'</span>, isOpen<span class="o">:</span> <span class="s1">'&amp;'</span> },</td>
      </tr>
      <tr>
        <td id="L2686" class="blob-num js-line-number" data-line-number="2686"></td>
        <td id="LC2686" class="blob-code js-file-line">    templateUrl<span class="o">:</span> <span class="s1">'template/tooltip/tooltip-popup.html'</span></td>
      </tr>
      <tr>
        <td id="L2687" class="blob-num js-line-number" data-line-number="2687"></td>
        <td id="LC2687" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2688" class="blob-num js-line-number" data-line-number="2688"></td>
        <td id="LC2688" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L2689" class="blob-num js-line-number" data-line-number="2689"></td>
        <td id="LC2689" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2690" class="blob-num js-line-number" data-line-number="2690"></td>
        <td id="LC2690" class="blob-code js-file-line">.directive( <span class="s1">'tooltip'</span>, [ <span class="s1">'$tooltip'</span>, <span class="kt">function</span> ( <span class="nv">$tooltip</span> ) {</td>
      </tr>
      <tr>
        <td id="L2691" class="blob-num js-line-number" data-line-number="2691"></td>
        <td id="LC2691" class="blob-code js-file-line">  <span class="k">return</span> $tooltip( <span class="s1">'tooltip'</span>, <span class="s1">'tooltip'</span>, <span class="s1">'mouseenter'</span> );</td>
      </tr>
      <tr>
        <td id="L2692" class="blob-num js-line-number" data-line-number="2692"></td>
        <td id="LC2692" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L2693" class="blob-num js-line-number" data-line-number="2693"></td>
        <td id="LC2693" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2694" class="blob-num js-line-number" data-line-number="2694"></td>
        <td id="LC2694" class="blob-code js-file-line">.directive( <span class="s1">'tooltipHtmlUnsafePopup'</span>, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2695" class="blob-num js-line-number" data-line-number="2695"></td>
        <td id="LC2695" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L2696" class="blob-num js-line-number" data-line-number="2696"></td>
        <td id="LC2696" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L2697" class="blob-num js-line-number" data-line-number="2697"></td>
        <td id="LC2697" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L2698" class="blob-num js-line-number" data-line-number="2698"></td>
        <td id="LC2698" class="blob-code js-file-line">    scope<span class="o">:</span> { content<span class="o">:</span> <span class="s1">'@'</span>, placement<span class="o">:</span> <span class="s1">'@'</span>, animation<span class="o">:</span> <span class="s1">'&amp;'</span>, isOpen<span class="o">:</span> <span class="s1">'&amp;'</span> },</td>
      </tr>
      <tr>
        <td id="L2699" class="blob-num js-line-number" data-line-number="2699"></td>
        <td id="LC2699" class="blob-code js-file-line">    templateUrl<span class="o">:</span> <span class="s1">'template/tooltip/tooltip-html-unsafe-popup.html'</span></td>
      </tr>
      <tr>
        <td id="L2700" class="blob-num js-line-number" data-line-number="2700"></td>
        <td id="LC2700" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2701" class="blob-num js-line-number" data-line-number="2701"></td>
        <td id="LC2701" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L2702" class="blob-num js-line-number" data-line-number="2702"></td>
        <td id="LC2702" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2703" class="blob-num js-line-number" data-line-number="2703"></td>
        <td id="LC2703" class="blob-code js-file-line">.directive( <span class="s1">'tooltipHtmlUnsafe'</span>, [ <span class="s1">'$tooltip'</span>, <span class="kt">function</span> ( <span class="nv">$tooltip</span> ) {</td>
      </tr>
      <tr>
        <td id="L2704" class="blob-num js-line-number" data-line-number="2704"></td>
        <td id="LC2704" class="blob-code js-file-line">  <span class="k">return</span> $tooltip( <span class="s1">'tooltipHtmlUnsafe'</span>, <span class="s1">'tooltip'</span>, <span class="s1">'mouseenter'</span> );</td>
      </tr>
      <tr>
        <td id="L2705" class="blob-num js-line-number" data-line-number="2705"></td>
        <td id="LC2705" class="blob-code js-file-line">}]);</td>
      </tr>
      <tr>
        <td id="L2706" class="blob-num js-line-number" data-line-number="2706"></td>
        <td id="LC2706" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2707" class="blob-num js-line-number" data-line-number="2707"></td>
        <td id="LC2707" class="blob-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L2708" class="blob-num js-line-number" data-line-number="2708"></td>
        <td id="LC2708" class="blob-code js-file-line"><span class="cm"> * The following features are still outstanding: popup delay, animation as a</span></td>
      </tr>
      <tr>
        <td id="L2709" class="blob-num js-line-number" data-line-number="2709"></td>
        <td id="LC2709" class="blob-code js-file-line"><span class="cm"> * function, placement as a function, inside, support for more triggers than</span></td>
      </tr>
      <tr>
        <td id="L2710" class="blob-num js-line-number" data-line-number="2710"></td>
        <td id="LC2710" class="blob-code js-file-line"><span class="cm"> * just mouse enter/leave, html popovers, and selector delegatation.</span></td>
      </tr>
      <tr>
        <td id="L2711" class="blob-num js-line-number" data-line-number="2711"></td>
        <td id="LC2711" class="blob-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L2712" class="blob-num js-line-number" data-line-number="2712"></td>
        <td id="LC2712" class="blob-code js-file-line">angular.module( <span class="s1">'ui.bootstrap.popover'</span>, [ <span class="s1">'ui.bootstrap.tooltip'</span> ] )</td>
      </tr>
      <tr>
        <td id="L2713" class="blob-num js-line-number" data-line-number="2713"></td>
        <td id="LC2713" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2714" class="blob-num js-line-number" data-line-number="2714"></td>
        <td id="LC2714" class="blob-code js-file-line">.directive( <span class="s1">'popoverPopup'</span>, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L2715" class="blob-num js-line-number" data-line-number="2715"></td>
        <td id="LC2715" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L2716" class="blob-num js-line-number" data-line-number="2716"></td>
        <td id="LC2716" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L2717" class="blob-num js-line-number" data-line-number="2717"></td>
        <td id="LC2717" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L2718" class="blob-num js-line-number" data-line-number="2718"></td>
        <td id="LC2718" class="blob-code js-file-line">    scope<span class="o">:</span> { title<span class="o">:</span> <span class="s1">'@'</span>, content<span class="o">:</span> <span class="s1">'@'</span>, placement<span class="o">:</span> <span class="s1">'@'</span>, animation<span class="o">:</span> <span class="s1">'&amp;'</span>, isOpen<span class="o">:</span> <span class="s1">'&amp;'</span> },</td>
      </tr>
      <tr>
        <td id="L2719" class="blob-num js-line-number" data-line-number="2719"></td>
        <td id="LC2719" class="blob-code js-file-line">    templateUrl<span class="o">:</span> <span class="s1">'template/popover/popover.html'</span></td>
      </tr>
      <tr>
        <td id="L2720" class="blob-num js-line-number" data-line-number="2720"></td>
        <td id="LC2720" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2721" class="blob-num js-line-number" data-line-number="2721"></td>
        <td id="LC2721" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L2722" class="blob-num js-line-number" data-line-number="2722"></td>
        <td id="LC2722" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2723" class="blob-num js-line-number" data-line-number="2723"></td>
        <td id="LC2723" class="blob-code js-file-line">.directive( <span class="s1">'popover'</span>, [ <span class="s1">'$tooltip'</span>, <span class="kt">function</span> ( <span class="nv">$tooltip</span> ) {</td>
      </tr>
      <tr>
        <td id="L2724" class="blob-num js-line-number" data-line-number="2724"></td>
        <td id="LC2724" class="blob-code js-file-line">  <span class="k">return</span> $tooltip( <span class="s1">'popover'</span>, <span class="s1">'popover'</span>, <span class="s1">'click'</span> );</td>
      </tr>
      <tr>
        <td id="L2725" class="blob-num js-line-number" data-line-number="2725"></td>
        <td id="LC2725" class="blob-code js-file-line">}]);</td>
      </tr>
      <tr>
        <td id="L2726" class="blob-num js-line-number" data-line-number="2726"></td>
        <td id="LC2726" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2727" class="blob-num js-line-number" data-line-number="2727"></td>
        <td id="LC2727" class="blob-code js-file-line">angular.module(<span class="s1">'ui.bootstrap.progressbar'</span>, [])</td>
      </tr>
      <tr>
        <td id="L2728" class="blob-num js-line-number" data-line-number="2728"></td>
        <td id="LC2728" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2729" class="blob-num js-line-number" data-line-number="2729"></td>
        <td id="LC2729" class="blob-code js-file-line">.constant(<span class="s1">'progressConfig'</span>, {</td>
      </tr>
      <tr>
        <td id="L2730" class="blob-num js-line-number" data-line-number="2730"></td>
        <td id="LC2730" class="blob-code js-file-line">  animate<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L2731" class="blob-num js-line-number" data-line-number="2731"></td>
        <td id="LC2731" class="blob-code js-file-line">  max<span class="o">:</span> <span class="m">100</span></td>
      </tr>
      <tr>
        <td id="L2732" class="blob-num js-line-number" data-line-number="2732"></td>
        <td id="LC2732" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L2733" class="blob-num js-line-number" data-line-number="2733"></td>
        <td id="LC2733" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2734" class="blob-num js-line-number" data-line-number="2734"></td>
        <td id="LC2734" class="blob-code js-file-line">.controller(<span class="s1">'ProgressController'</span>, [<span class="s1">'$scope'</span>, <span class="s1">'$attrs'</span>, <span class="s1">'progressConfig'</span>, <span class="kt">function</span>(<span class="nv">$scope</span>, <span class="nv">$attrs</span>, <span class="nv">progressConfig</span>) {</td>
      </tr>
      <tr>
        <td id="L2735" class="blob-num js-line-number" data-line-number="2735"></td>
        <td id="LC2735" class="blob-code js-file-line">    <span class="k">var</span> self <span class="o">=</span> <span class="nb">this</span>,</td>
      </tr>
      <tr>
        <td id="L2736" class="blob-num js-line-number" data-line-number="2736"></td>
        <td id="LC2736" class="blob-code js-file-line">        animate <span class="o">=</span> angular.isDefined($attrs.animate) <span class="o">?</span> $scope.$parent.$<span class="nf">eval</span>($attrs.animate) <span class="o">:</span> progressConfig.animate;</td>
      </tr>
      <tr>
        <td id="L2737" class="blob-num js-line-number" data-line-number="2737"></td>
        <td id="LC2737" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2738" class="blob-num js-line-number" data-line-number="2738"></td>
        <td id="LC2738" class="blob-code js-file-line">    <span class="nb">this</span>.bars <span class="o">=</span> [];</td>
      </tr>
      <tr>
        <td id="L2739" class="blob-num js-line-number" data-line-number="2739"></td>
        <td id="LC2739" class="blob-code js-file-line">    $scope.max <span class="o">=</span> angular.isDefined($attrs.max) <span class="o">?</span> $scope.$parent.$<span class="nf">eval</span>($attrs.max) <span class="o">:</span> progressConfig.max;</td>
      </tr>
      <tr>
        <td id="L2740" class="blob-num js-line-number" data-line-number="2740"></td>
        <td id="LC2740" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2741" class="blob-num js-line-number" data-line-number="2741"></td>
        <td id="LC2741" class="blob-code js-file-line">    <span class="no">this</span>.<span class="nf">addBar</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">bar</span>, <span class="nv">element</span>) {</td>
      </tr>
      <tr>
        <td id="L2742" class="blob-num js-line-number" data-line-number="2742"></td>
        <td id="LC2742" class="blob-code js-file-line">        <span class="k">if</span> ( <span class="o">!</span>animate ) {</td>
      </tr>
      <tr>
        <td id="L2743" class="blob-num js-line-number" data-line-number="2743"></td>
        <td id="LC2743" class="blob-code js-file-line">            element.css({<span class="s1">'transition'</span><span class="o">:</span> <span class="s1">'none'</span>});</td>
      </tr>
      <tr>
        <td id="L2744" class="blob-num js-line-number" data-line-number="2744"></td>
        <td id="LC2744" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L2745" class="blob-num js-line-number" data-line-number="2745"></td>
        <td id="LC2745" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2746" class="blob-num js-line-number" data-line-number="2746"></td>
        <td id="LC2746" class="blob-code js-file-line">        <span class="nb">this</span>.bars.<span class="nf">push</span>(bar);</td>
      </tr>
      <tr>
        <td id="L2747" class="blob-num js-line-number" data-line-number="2747"></td>
        <td id="LC2747" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2748" class="blob-num js-line-number" data-line-number="2748"></td>
        <td id="LC2748" class="blob-code js-file-line">        bar.$<span class="nf">watch</span>(<span class="s1">'value'</span>, <span class="kt">function</span>( <span class="nv">value</span> ) {</td>
      </tr>
      <tr>
        <td id="L2749" class="blob-num js-line-number" data-line-number="2749"></td>
        <td id="LC2749" class="blob-code js-file-line">            bar.percent <span class="o">=</span> <span class="o">+</span>(<span class="m">100</span> <span class="o">*</span> value / $scope.max).toFixed(<span class="m">2</span>);</td>
      </tr>
      <tr>
        <td id="L2750" class="blob-num js-line-number" data-line-number="2750"></td>
        <td id="LC2750" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L2751" class="blob-num js-line-number" data-line-number="2751"></td>
        <td id="LC2751" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2752" class="blob-num js-line-number" data-line-number="2752"></td>
        <td id="LC2752" class="blob-code js-file-line">        bar.$on(<span class="s1">'$destroy'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2753" class="blob-num js-line-number" data-line-number="2753"></td>
        <td id="LC2753" class="blob-code js-file-line">            element <span class="o">=</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L2754" class="blob-num js-line-number" data-line-number="2754"></td>
        <td id="LC2754" class="blob-code js-file-line">            self.removeBar(bar);</td>
      </tr>
      <tr>
        <td id="L2755" class="blob-num js-line-number" data-line-number="2755"></td>
        <td id="LC2755" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L2756" class="blob-num js-line-number" data-line-number="2756"></td>
        <td id="LC2756" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L2757" class="blob-num js-line-number" data-line-number="2757"></td>
        <td id="LC2757" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2758" class="blob-num js-line-number" data-line-number="2758"></td>
        <td id="LC2758" class="blob-code js-file-line">    <span class="no">this</span>.<span class="nf">removeBar</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">bar</span>) {</td>
      </tr>
      <tr>
        <td id="L2759" class="blob-num js-line-number" data-line-number="2759"></td>
        <td id="LC2759" class="blob-code js-file-line">        <span class="nb">this</span>.bars.<span class="nf">splice</span>(<span class="nb">this</span>.bars.<span class="nf">indexOf</span>(bar), <span class="m">1</span>);</td>
      </tr>
      <tr>
        <td id="L2760" class="blob-num js-line-number" data-line-number="2760"></td>
        <td id="LC2760" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L2761" class="blob-num js-line-number" data-line-number="2761"></td>
        <td id="LC2761" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L2762" class="blob-num js-line-number" data-line-number="2762"></td>
        <td id="LC2762" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2763" class="blob-num js-line-number" data-line-number="2763"></td>
        <td id="LC2763" class="blob-code js-file-line">.directive(<span class="s1">'progress'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2764" class="blob-num js-line-number" data-line-number="2764"></td>
        <td id="LC2764" class="blob-code js-file-line">    <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L2765" class="blob-num js-line-number" data-line-number="2765"></td>
        <td id="LC2765" class="blob-code js-file-line">        restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L2766" class="blob-num js-line-number" data-line-number="2766"></td>
        <td id="LC2766" class="blob-code js-file-line">        replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L2767" class="blob-num js-line-number" data-line-number="2767"></td>
        <td id="LC2767" class="blob-code js-file-line">        transclude<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L2768" class="blob-num js-line-number" data-line-number="2768"></td>
        <td id="LC2768" class="blob-code js-file-line">        controller<span class="o">:</span> <span class="s1">'ProgressController'</span>,</td>
      </tr>
      <tr>
        <td id="L2769" class="blob-num js-line-number" data-line-number="2769"></td>
        <td id="LC2769" class="blob-code js-file-line">        require<span class="o">:</span> <span class="s1">'progress'</span>,</td>
      </tr>
      <tr>
        <td id="L2770" class="blob-num js-line-number" data-line-number="2770"></td>
        <td id="LC2770" class="blob-code js-file-line">        scope<span class="o">:</span> {},</td>
      </tr>
      <tr>
        <td id="L2771" class="blob-num js-line-number" data-line-number="2771"></td>
        <td id="LC2771" class="blob-code js-file-line">        templateUrl<span class="o">:</span> <span class="s1">'template/progressbar/progress.html'</span></td>
      </tr>
      <tr>
        <td id="L2772" class="blob-num js-line-number" data-line-number="2772"></td>
        <td id="LC2772" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L2773" class="blob-num js-line-number" data-line-number="2773"></td>
        <td id="LC2773" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L2774" class="blob-num js-line-number" data-line-number="2774"></td>
        <td id="LC2774" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2775" class="blob-num js-line-number" data-line-number="2775"></td>
        <td id="LC2775" class="blob-code js-file-line">.directive(<span class="s1">'bar'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2776" class="blob-num js-line-number" data-line-number="2776"></td>
        <td id="LC2776" class="blob-code js-file-line">    <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L2777" class="blob-num js-line-number" data-line-number="2777"></td>
        <td id="LC2777" class="blob-code js-file-line">        restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L2778" class="blob-num js-line-number" data-line-number="2778"></td>
        <td id="LC2778" class="blob-code js-file-line">        replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L2779" class="blob-num js-line-number" data-line-number="2779"></td>
        <td id="LC2779" class="blob-code js-file-line">        transclude<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L2780" class="blob-num js-line-number" data-line-number="2780"></td>
        <td id="LC2780" class="blob-code js-file-line">        require<span class="o">:</span> <span class="s1">'^progress'</span>,</td>
      </tr>
      <tr>
        <td id="L2781" class="blob-num js-line-number" data-line-number="2781"></td>
        <td id="LC2781" class="blob-code js-file-line">        scope<span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L2782" class="blob-num js-line-number" data-line-number="2782"></td>
        <td id="LC2782" class="blob-code js-file-line">            value<span class="o">:</span> <span class="s1">'='</span>,</td>
      </tr>
      <tr>
        <td id="L2783" class="blob-num js-line-number" data-line-number="2783"></td>
        <td id="LC2783" class="blob-code js-file-line">            type<span class="o">:</span> <span class="s1">'@'</span></td>
      </tr>
      <tr>
        <td id="L2784" class="blob-num js-line-number" data-line-number="2784"></td>
        <td id="LC2784" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2785" class="blob-num js-line-number" data-line-number="2785"></td>
        <td id="LC2785" class="blob-code js-file-line">        templateUrl<span class="o">:</span> <span class="s1">'template/progressbar/bar.html'</span>,</td>
      </tr>
      <tr>
        <td id="L2786" class="blob-num js-line-number" data-line-number="2786"></td>
        <td id="LC2786" class="blob-code js-file-line">        <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>, <span class="nv">progressCtrl</span>) {</td>
      </tr>
      <tr>
        <td id="L2787" class="blob-num js-line-number" data-line-number="2787"></td>
        <td id="LC2787" class="blob-code js-file-line">            progressCtrl.addBar(scope, element);</td>
      </tr>
      <tr>
        <td id="L2788" class="blob-num js-line-number" data-line-number="2788"></td>
        <td id="LC2788" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L2789" class="blob-num js-line-number" data-line-number="2789"></td>
        <td id="LC2789" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L2790" class="blob-num js-line-number" data-line-number="2790"></td>
        <td id="LC2790" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L2791" class="blob-num js-line-number" data-line-number="2791"></td>
        <td id="LC2791" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2792" class="blob-num js-line-number" data-line-number="2792"></td>
        <td id="LC2792" class="blob-code js-file-line">.directive(<span class="s1">'progressbar'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2793" class="blob-num js-line-number" data-line-number="2793"></td>
        <td id="LC2793" class="blob-code js-file-line">    <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L2794" class="blob-num js-line-number" data-line-number="2794"></td>
        <td id="LC2794" class="blob-code js-file-line">        restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L2795" class="blob-num js-line-number" data-line-number="2795"></td>
        <td id="LC2795" class="blob-code js-file-line">        replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L2796" class="blob-num js-line-number" data-line-number="2796"></td>
        <td id="LC2796" class="blob-code js-file-line">        transclude<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L2797" class="blob-num js-line-number" data-line-number="2797"></td>
        <td id="LC2797" class="blob-code js-file-line">        controller<span class="o">:</span> <span class="s1">'ProgressController'</span>,</td>
      </tr>
      <tr>
        <td id="L2798" class="blob-num js-line-number" data-line-number="2798"></td>
        <td id="LC2798" class="blob-code js-file-line">        scope<span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L2799" class="blob-num js-line-number" data-line-number="2799"></td>
        <td id="LC2799" class="blob-code js-file-line">            value<span class="o">:</span> <span class="s1">'='</span>,</td>
      </tr>
      <tr>
        <td id="L2800" class="blob-num js-line-number" data-line-number="2800"></td>
        <td id="LC2800" class="blob-code js-file-line">            type<span class="o">:</span> <span class="s1">'@'</span></td>
      </tr>
      <tr>
        <td id="L2801" class="blob-num js-line-number" data-line-number="2801"></td>
        <td id="LC2801" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L2802" class="blob-num js-line-number" data-line-number="2802"></td>
        <td id="LC2802" class="blob-code js-file-line">        templateUrl<span class="o">:</span> <span class="s1">'template/progressbar/progressbar.html'</span>,</td>
      </tr>
      <tr>
        <td id="L2803" class="blob-num js-line-number" data-line-number="2803"></td>
        <td id="LC2803" class="blob-code js-file-line">        <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>, <span class="nv">progressCtrl</span>) {</td>
      </tr>
      <tr>
        <td id="L2804" class="blob-num js-line-number" data-line-number="2804"></td>
        <td id="LC2804" class="blob-code js-file-line">            progressCtrl.addBar(scope, angular.element(element.children()[<span class="m">0</span>]));</td>
      </tr>
      <tr>
        <td id="L2805" class="blob-num js-line-number" data-line-number="2805"></td>
        <td id="LC2805" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L2806" class="blob-num js-line-number" data-line-number="2806"></td>
        <td id="LC2806" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L2807" class="blob-num js-line-number" data-line-number="2807"></td>
        <td id="LC2807" class="blob-code js-file-line">});</td>
      </tr>
      <tr>
        <td id="L2808" class="blob-num js-line-number" data-line-number="2808"></td>
        <td id="LC2808" class="blob-code js-file-line">angular.module(<span class="s1">'ui.bootstrap.rating'</span>, [])</td>
      </tr>
      <tr>
        <td id="L2809" class="blob-num js-line-number" data-line-number="2809"></td>
        <td id="LC2809" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2810" class="blob-num js-line-number" data-line-number="2810"></td>
        <td id="LC2810" class="blob-code js-file-line">.constant(<span class="s1">'ratingConfig'</span>, {</td>
      </tr>
      <tr>
        <td id="L2811" class="blob-num js-line-number" data-line-number="2811"></td>
        <td id="LC2811" class="blob-code js-file-line">  max<span class="o">:</span> <span class="m">5</span>,</td>
      </tr>
      <tr>
        <td id="L2812" class="blob-num js-line-number" data-line-number="2812"></td>
        <td id="LC2812" class="blob-code js-file-line">  stateOn<span class="o">:</span> <span class="kc">null</span>,</td>
      </tr>
      <tr>
        <td id="L2813" class="blob-num js-line-number" data-line-number="2813"></td>
        <td id="LC2813" class="blob-code js-file-line">  stateOff<span class="o">:</span> <span class="kc">null</span></td>
      </tr>
      <tr>
        <td id="L2814" class="blob-num js-line-number" data-line-number="2814"></td>
        <td id="LC2814" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L2815" class="blob-num js-line-number" data-line-number="2815"></td>
        <td id="LC2815" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2816" class="blob-num js-line-number" data-line-number="2816"></td>
        <td id="LC2816" class="blob-code js-file-line">.controller(<span class="s1">'RatingController'</span>, [<span class="s1">'$scope'</span>, <span class="s1">'$attrs'</span>, <span class="s1">'ratingConfig'</span>, <span class="kt">function</span>(<span class="nv">$scope</span>, <span class="nv">$attrs</span>, <span class="nv">ratingConfig</span>) {</td>
      </tr>
      <tr>
        <td id="L2817" class="blob-num js-line-number" data-line-number="2817"></td>
        <td id="LC2817" class="blob-code js-file-line">  <span class="k">var</span> ngModelCtrl  <span class="o">=</span> { $setViewValue<span class="o">:</span> angular.noop };</td>
      </tr>
      <tr>
        <td id="L2818" class="blob-num js-line-number" data-line-number="2818"></td>
        <td id="LC2818" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2819" class="blob-num js-line-number" data-line-number="2819"></td>
        <td id="LC2819" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">init</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">ngModelCtrl_</span>) {</td>
      </tr>
      <tr>
        <td id="L2820" class="blob-num js-line-number" data-line-number="2820"></td>
        <td id="LC2820" class="blob-code js-file-line">    ngModelCtrl <span class="o">=</span> ngModelCtrl_;</td>
      </tr>
      <tr>
        <td id="L2821" class="blob-num js-line-number" data-line-number="2821"></td>
        <td id="LC2821" class="blob-code js-file-line">    ngModelCtrl.$render <span class="o">=</span> <span class="nb">this</span>.render;</td>
      </tr>
      <tr>
        <td id="L2822" class="blob-num js-line-number" data-line-number="2822"></td>
        <td id="LC2822" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2823" class="blob-num js-line-number" data-line-number="2823"></td>
        <td id="LC2823" class="blob-code js-file-line">    <span class="nb">this</span>.stateOn <span class="o">=</span> angular.isDefined($attrs.stateOn) <span class="o">?</span> $scope.$parent.$<span class="nf">eval</span>($attrs.stateOn) <span class="o">:</span> ratingConfig.stateOn;</td>
      </tr>
      <tr>
        <td id="L2824" class="blob-num js-line-number" data-line-number="2824"></td>
        <td id="LC2824" class="blob-code js-file-line">    <span class="nb">this</span>.stateOff <span class="o">=</span> angular.isDefined($attrs.stateOff) <span class="o">?</span> $scope.$parent.$<span class="nf">eval</span>($attrs.stateOff) <span class="o">:</span> ratingConfig.stateOff;</td>
      </tr>
      <tr>
        <td id="L2825" class="blob-num js-line-number" data-line-number="2825"></td>
        <td id="LC2825" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2826" class="blob-num js-line-number" data-line-number="2826"></td>
        <td id="LC2826" class="blob-code js-file-line">    <span class="k">var</span> ratingStates <span class="o">=</span> angular.isDefined($attrs.ratingStates) <span class="o">?</span> $scope.$parent.$<span class="nf">eval</span>($attrs.ratingStates) <span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L2827" class="blob-num js-line-number" data-line-number="2827"></td>
        <td id="LC2827" class="blob-code js-file-line">                        <span class="o">new</span> <span class="nc">Array</span>( angular.isDefined($attrs.max) <span class="o">?</span> $scope.$parent.$<span class="nf">eval</span>($attrs.max) <span class="o">:</span> ratingConfig.max );</td>
      </tr>
      <tr>
        <td id="L2828" class="blob-num js-line-number" data-line-number="2828"></td>
        <td id="LC2828" class="blob-code js-file-line">    $scope.range <span class="o">=</span> <span class="nb">this</span>.buildTemplateObjects(ratingStates);</td>
      </tr>
      <tr>
        <td id="L2829" class="blob-num js-line-number" data-line-number="2829"></td>
        <td id="LC2829" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2830" class="blob-num js-line-number" data-line-number="2830"></td>
        <td id="LC2830" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2831" class="blob-num js-line-number" data-line-number="2831"></td>
        <td id="LC2831" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">buildTemplateObjects</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">states</span>) {</td>
      </tr>
      <tr>
        <td id="L2832" class="blob-num js-line-number" data-line-number="2832"></td>
        <td id="LC2832" class="blob-code js-file-line">    <span class="k">for</span> (<span class="k">var</span> i <span class="o">=</span> <span class="m">0</span>, n <span class="o">=</span> states.<span class="no">length</span>; i <span class="o">&lt;</span> n; i<span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L2833" class="blob-num js-line-number" data-line-number="2833"></td>
        <td id="LC2833" class="blob-code js-file-line">      states[i] <span class="o">=</span> angular.extend({ index<span class="o">:</span> i }, { stateOn<span class="o">:</span> <span class="nb">this</span>.stateOn, stateOff<span class="o">:</span> <span class="nb">this</span>.stateOff }, states[i]);</td>
      </tr>
      <tr>
        <td id="L2834" class="blob-num js-line-number" data-line-number="2834"></td>
        <td id="LC2834" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2835" class="blob-num js-line-number" data-line-number="2835"></td>
        <td id="LC2835" class="blob-code js-file-line">    <span class="k">return</span> states;</td>
      </tr>
      <tr>
        <td id="L2836" class="blob-num js-line-number" data-line-number="2836"></td>
        <td id="LC2836" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2837" class="blob-num js-line-number" data-line-number="2837"></td>
        <td id="LC2837" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2838" class="blob-num js-line-number" data-line-number="2838"></td>
        <td id="LC2838" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">rate</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">value</span>) {</td>
      </tr>
      <tr>
        <td id="L2839" class="blob-num js-line-number" data-line-number="2839"></td>
        <td id="LC2839" class="blob-code js-file-line">    <span class="k">if</span> ( <span class="o">!</span>$scope.readonly <span class="o">&amp;&amp;</span> value <span class="o">&gt;=</span> <span class="m">0</span> <span class="o">&amp;&amp;</span> value <span class="o">&lt;=</span> $scope.range.<span class="no">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L2840" class="blob-num js-line-number" data-line-number="2840"></td>
        <td id="LC2840" class="blob-code js-file-line">      ngModelCtrl.$setViewValue(value);</td>
      </tr>
      <tr>
        <td id="L2841" class="blob-num js-line-number" data-line-number="2841"></td>
        <td id="LC2841" class="blob-code js-file-line">      ngModelCtrl.$render();</td>
      </tr>
      <tr>
        <td id="L2842" class="blob-num js-line-number" data-line-number="2842"></td>
        <td id="LC2842" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2843" class="blob-num js-line-number" data-line-number="2843"></td>
        <td id="LC2843" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2844" class="blob-num js-line-number" data-line-number="2844"></td>
        <td id="LC2844" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2845" class="blob-num js-line-number" data-line-number="2845"></td>
        <td id="LC2845" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">enter</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">value</span>) {</td>
      </tr>
      <tr>
        <td id="L2846" class="blob-num js-line-number" data-line-number="2846"></td>
        <td id="LC2846" class="blob-code js-file-line">    <span class="k">if</span> ( <span class="o">!</span>$scope.readonly ) {</td>
      </tr>
      <tr>
        <td id="L2847" class="blob-num js-line-number" data-line-number="2847"></td>
        <td id="LC2847" class="blob-code js-file-line">      $scope.<span class="no">value</span> <span class="o">=</span> value;</td>
      </tr>
      <tr>
        <td id="L2848" class="blob-num js-line-number" data-line-number="2848"></td>
        <td id="LC2848" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2849" class="blob-num js-line-number" data-line-number="2849"></td>
        <td id="LC2849" class="blob-code js-file-line">    $scope.<span class="nf">onHover</span>({value<span class="o">:</span> value});</td>
      </tr>
      <tr>
        <td id="L2850" class="blob-num js-line-number" data-line-number="2850"></td>
        <td id="LC2850" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2851" class="blob-num js-line-number" data-line-number="2851"></td>
        <td id="LC2851" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2852" class="blob-num js-line-number" data-line-number="2852"></td>
        <td id="LC2852" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">reset</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2853" class="blob-num js-line-number" data-line-number="2853"></td>
        <td id="LC2853" class="blob-code js-file-line">    $scope.<span class="no">value</span> <span class="o">=</span> ngModelCtrl.$viewValue;</td>
      </tr>
      <tr>
        <td id="L2854" class="blob-num js-line-number" data-line-number="2854"></td>
        <td id="LC2854" class="blob-code js-file-line">    $scope.onLeave();</td>
      </tr>
      <tr>
        <td id="L2855" class="blob-num js-line-number" data-line-number="2855"></td>
        <td id="LC2855" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2856" class="blob-num js-line-number" data-line-number="2856"></td>
        <td id="LC2856" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2857" class="blob-num js-line-number" data-line-number="2857"></td>
        <td id="LC2857" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">onKeydown</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">evt</span>) {</td>
      </tr>
      <tr>
        <td id="L2858" class="blob-num js-line-number" data-line-number="2858"></td>
        <td id="LC2858" class="blob-code js-file-line">    <span class="k">if</span> (<span class="sr">/(37<span class="o">|</span>38<span class="o">|</span>39<span class="o">|</span>40)/</span>.<span class="nf">test</span>(evt.which)) {</td>
      </tr>
      <tr>
        <td id="L2859" class="blob-num js-line-number" data-line-number="2859"></td>
        <td id="LC2859" class="blob-code js-file-line">      evt.preventDefault();</td>
      </tr>
      <tr>
        <td id="L2860" class="blob-num js-line-number" data-line-number="2860"></td>
        <td id="LC2860" class="blob-code js-file-line">      evt.stopPropagation();</td>
      </tr>
      <tr>
        <td id="L2861" class="blob-num js-line-number" data-line-number="2861"></td>
        <td id="LC2861" class="blob-code js-file-line">      $scope.rate( $scope.<span class="no">value</span> <span class="o">+</span> (evt.which <span class="o">===</span> <span class="m">38</span> <span class="o">||</span> evt.which <span class="o">===</span> <span class="m">39</span> <span class="o">?</span> <span class="m">1</span> <span class="o">:</span> <span class="o">-</span><span class="m">1</span>) );</td>
      </tr>
      <tr>
        <td id="L2862" class="blob-num js-line-number" data-line-number="2862"></td>
        <td id="LC2862" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2863" class="blob-num js-line-number" data-line-number="2863"></td>
        <td id="LC2863" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2864" class="blob-num js-line-number" data-line-number="2864"></td>
        <td id="LC2864" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2865" class="blob-num js-line-number" data-line-number="2865"></td>
        <td id="LC2865" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">render</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2866" class="blob-num js-line-number" data-line-number="2866"></td>
        <td id="LC2866" class="blob-code js-file-line">    $scope.<span class="no">value</span> <span class="o">=</span> ngModelCtrl.$viewValue;</td>
      </tr>
      <tr>
        <td id="L2867" class="blob-num js-line-number" data-line-number="2867"></td>
        <td id="LC2867" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2868" class="blob-num js-line-number" data-line-number="2868"></td>
        <td id="LC2868" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L2869" class="blob-num js-line-number" data-line-number="2869"></td>
        <td id="LC2869" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2870" class="blob-num js-line-number" data-line-number="2870"></td>
        <td id="LC2870" class="blob-code js-file-line">.directive(<span class="s1">'rating'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2871" class="blob-num js-line-number" data-line-number="2871"></td>
        <td id="LC2871" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L2872" class="blob-num js-line-number" data-line-number="2872"></td>
        <td id="LC2872" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L2873" class="blob-num js-line-number" data-line-number="2873"></td>
        <td id="LC2873" class="blob-code js-file-line">    require<span class="o">:</span> [<span class="s1">'rating'</span>, <span class="s1">'ngModel'</span>],</td>
      </tr>
      <tr>
        <td id="L2874" class="blob-num js-line-number" data-line-number="2874"></td>
        <td id="LC2874" class="blob-code js-file-line">    scope<span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L2875" class="blob-num js-line-number" data-line-number="2875"></td>
        <td id="LC2875" class="blob-code js-file-line">      readonly<span class="o">:</span> <span class="s1">'=?'</span>,</td>
      </tr>
      <tr>
        <td id="L2876" class="blob-num js-line-number" data-line-number="2876"></td>
        <td id="LC2876" class="blob-code js-file-line">      <span class="nf">onHover</span><span class="o">:</span> <span class="s1">'&amp;'</span>,</td>
      </tr>
      <tr>
        <td id="L2877" class="blob-num js-line-number" data-line-number="2877"></td>
        <td id="LC2877" class="blob-code js-file-line">      onLeave<span class="o">:</span> <span class="s1">'&amp;'</span></td>
      </tr>
      <tr>
        <td id="L2878" class="blob-num js-line-number" data-line-number="2878"></td>
        <td id="LC2878" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L2879" class="blob-num js-line-number" data-line-number="2879"></td>
        <td id="LC2879" class="blob-code js-file-line">    controller<span class="o">:</span> <span class="s1">'RatingController'</span>,</td>
      </tr>
      <tr>
        <td id="L2880" class="blob-num js-line-number" data-line-number="2880"></td>
        <td id="LC2880" class="blob-code js-file-line">    templateUrl<span class="o">:</span> <span class="s1">'template/rating/rating.html'</span>,</td>
      </tr>
      <tr>
        <td id="L2881" class="blob-num js-line-number" data-line-number="2881"></td>
        <td id="LC2881" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L2882" class="blob-num js-line-number" data-line-number="2882"></td>
        <td id="LC2882" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>, <span class="nv">ctrls</span>) {</td>
      </tr>
      <tr>
        <td id="L2883" class="blob-num js-line-number" data-line-number="2883"></td>
        <td id="LC2883" class="blob-code js-file-line">      <span class="k">var</span> ratingCtrl <span class="o">=</span> ctrls[<span class="m">0</span>], ngModelCtrl <span class="o">=</span> ctrls[<span class="m">1</span>];</td>
      </tr>
      <tr>
        <td id="L2884" class="blob-num js-line-number" data-line-number="2884"></td>
        <td id="LC2884" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2885" class="blob-num js-line-number" data-line-number="2885"></td>
        <td id="LC2885" class="blob-code js-file-line">      <span class="k">if</span> ( ngModelCtrl ) {</td>
      </tr>
      <tr>
        <td id="L2886" class="blob-num js-line-number" data-line-number="2886"></td>
        <td id="LC2886" class="blob-code js-file-line">        ratingCtrl.init( ngModelCtrl );</td>
      </tr>
      <tr>
        <td id="L2887" class="blob-num js-line-number" data-line-number="2887"></td>
        <td id="LC2887" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L2888" class="blob-num js-line-number" data-line-number="2888"></td>
        <td id="LC2888" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2889" class="blob-num js-line-number" data-line-number="2889"></td>
        <td id="LC2889" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2890" class="blob-num js-line-number" data-line-number="2890"></td>
        <td id="LC2890" class="blob-code js-file-line">});</td>
      </tr>
      <tr>
        <td id="L2891" class="blob-num js-line-number" data-line-number="2891"></td>
        <td id="LC2891" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2892" class="blob-num js-line-number" data-line-number="2892"></td>
        <td id="LC2892" class="blob-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L2893" class="blob-num js-line-number" data-line-number="2893"></td>
        <td id="LC2893" class="blob-code js-file-line"><span class="cm"> * @ngdoc overview</span></td>
      </tr>
      <tr>
        <td id="L2894" class="blob-num js-line-number" data-line-number="2894"></td>
        <td id="LC2894" class="blob-code js-file-line"><span class="cm"> * @name ui.bootstrap.tabs</span></td>
      </tr>
      <tr>
        <td id="L2895" class="blob-num js-line-number" data-line-number="2895"></td>
        <td id="LC2895" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L2896" class="blob-num js-line-number" data-line-number="2896"></td>
        <td id="LC2896" class="blob-code js-file-line"><span class="cm"> * @description</span></td>
      </tr>
      <tr>
        <td id="L2897" class="blob-num js-line-number" data-line-number="2897"></td>
        <td id="LC2897" class="blob-code js-file-line"><span class="cm"> * AngularJS version of the tabs directive.</span></td>
      </tr>
      <tr>
        <td id="L2898" class="blob-num js-line-number" data-line-number="2898"></td>
        <td id="LC2898" class="blob-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L2899" class="blob-num js-line-number" data-line-number="2899"></td>
        <td id="LC2899" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2900" class="blob-num js-line-number" data-line-number="2900"></td>
        <td id="LC2900" class="blob-code js-file-line">angular.module(<span class="s1">'ui.bootstrap.tabs'</span>, [])</td>
      </tr>
      <tr>
        <td id="L2901" class="blob-num js-line-number" data-line-number="2901"></td>
        <td id="LC2901" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2902" class="blob-num js-line-number" data-line-number="2902"></td>
        <td id="LC2902" class="blob-code js-file-line">.controller(<span class="s1">'TabsetController'</span>, [<span class="s1">'$scope'</span>, <span class="kt">function</span> <span class="nf">TabsetCtrl</span>(<span class="nv">$scope</span>) {</td>
      </tr>
      <tr>
        <td id="L2903" class="blob-num js-line-number" data-line-number="2903"></td>
        <td id="LC2903" class="blob-code js-file-line">  <span class="k">var</span> ctrl <span class="o">=</span> <span class="nb">this</span>,</td>
      </tr>
      <tr>
        <td id="L2904" class="blob-num js-line-number" data-line-number="2904"></td>
        <td id="LC2904" class="blob-code js-file-line">      tabs <span class="o">=</span> ctrl.tabs <span class="o">=</span> $scope.tabs <span class="o">=</span> [];</td>
      </tr>
      <tr>
        <td id="L2905" class="blob-num js-line-number" data-line-number="2905"></td>
        <td id="LC2905" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2906" class="blob-num js-line-number" data-line-number="2906"></td>
        <td id="LC2906" class="blob-code js-file-line">  <span class="no">ctrl</span>.<span class="nf">select</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">selectedTab</span>) {</td>
      </tr>
      <tr>
        <td id="L2907" class="blob-num js-line-number" data-line-number="2907"></td>
        <td id="LC2907" class="blob-code js-file-line">    angular.forEach(tabs, <span class="kt">function</span>(<span class="nv">tab</span>) {</td>
      </tr>
      <tr>
        <td id="L2908" class="blob-num js-line-number" data-line-number="2908"></td>
        <td id="LC2908" class="blob-code js-file-line">      <span class="k">if</span> (tab.active <span class="o">&amp;&amp;</span> tab <span class="o">!==</span> selectedTab) {</td>
      </tr>
      <tr>
        <td id="L2909" class="blob-num js-line-number" data-line-number="2909"></td>
        <td id="LC2909" class="blob-code js-file-line">        tab.active <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L2910" class="blob-num js-line-number" data-line-number="2910"></td>
        <td id="LC2910" class="blob-code js-file-line">        tab.onDeselect();</td>
      </tr>
      <tr>
        <td id="L2911" class="blob-num js-line-number" data-line-number="2911"></td>
        <td id="LC2911" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L2912" class="blob-num js-line-number" data-line-number="2912"></td>
        <td id="LC2912" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L2913" class="blob-num js-line-number" data-line-number="2913"></td>
        <td id="LC2913" class="blob-code js-file-line">    selectedTab.active <span class="o">=</span> <span class="kc">true</span>;</td>
      </tr>
      <tr>
        <td id="L2914" class="blob-num js-line-number" data-line-number="2914"></td>
        <td id="LC2914" class="blob-code js-file-line">    selectedTab.<span class="nf">onSelect</span>();</td>
      </tr>
      <tr>
        <td id="L2915" class="blob-num js-line-number" data-line-number="2915"></td>
        <td id="LC2915" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2916" class="blob-num js-line-number" data-line-number="2916"></td>
        <td id="LC2916" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2917" class="blob-num js-line-number" data-line-number="2917"></td>
        <td id="LC2917" class="blob-code js-file-line">  ctrl.addTab <span class="o">=</span> <span class="kt">function</span> <span class="nf">addTab</span>(<span class="nv">tab</span>) {</td>
      </tr>
      <tr>
        <td id="L2918" class="blob-num js-line-number" data-line-number="2918"></td>
        <td id="LC2918" class="blob-code js-file-line">    tabs.<span class="nf">push</span>(tab);</td>
      </tr>
      <tr>
        <td id="L2919" class="blob-num js-line-number" data-line-number="2919"></td>
        <td id="LC2919" class="blob-code js-file-line">    <span class="c1">// we can't run the select function on the first tab</span></td>
      </tr>
      <tr>
        <td id="L2920" class="blob-num js-line-number" data-line-number="2920"></td>
        <td id="LC2920" class="blob-code js-file-line">    <span class="c1">// since that would select it twice</span></td>
      </tr>
      <tr>
        <td id="L2921" class="blob-num js-line-number" data-line-number="2921"></td>
        <td id="LC2921" class="blob-code js-file-line">    <span class="k">if</span> (tabs.<span class="no">length</span> <span class="o">===</span> <span class="m">1</span>) {</td>
      </tr>
      <tr>
        <td id="L2922" class="blob-num js-line-number" data-line-number="2922"></td>
        <td id="LC2922" class="blob-code js-file-line">      tab.active <span class="o">=</span> <span class="kc">true</span>;</td>
      </tr>
      <tr>
        <td id="L2923" class="blob-num js-line-number" data-line-number="2923"></td>
        <td id="LC2923" class="blob-code js-file-line">    } <span class="k">else</span> <span class="k">if</span> (tab.active) {</td>
      </tr>
      <tr>
        <td id="L2924" class="blob-num js-line-number" data-line-number="2924"></td>
        <td id="LC2924" class="blob-code js-file-line">      ctrl.<span class="nf">select</span>(tab);</td>
      </tr>
      <tr>
        <td id="L2925" class="blob-num js-line-number" data-line-number="2925"></td>
        <td id="LC2925" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2926" class="blob-num js-line-number" data-line-number="2926"></td>
        <td id="LC2926" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2927" class="blob-num js-line-number" data-line-number="2927"></td>
        <td id="LC2927" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2928" class="blob-num js-line-number" data-line-number="2928"></td>
        <td id="LC2928" class="blob-code js-file-line">  ctrl.removeTab <span class="o">=</span> <span class="kt">function</span> <span class="nf">removeTab</span>(<span class="nv">tab</span>) {</td>
      </tr>
      <tr>
        <td id="L2929" class="blob-num js-line-number" data-line-number="2929"></td>
        <td id="LC2929" class="blob-code js-file-line">    <span class="k">var</span> index <span class="o">=</span> tabs.<span class="nf">indexOf</span>(tab);</td>
      </tr>
      <tr>
        <td id="L2930" class="blob-num js-line-number" data-line-number="2930"></td>
        <td id="LC2930" class="blob-code js-file-line">    <span class="c1">//Select a new tab if the tab to be removed is selected</span></td>
      </tr>
      <tr>
        <td id="L2931" class="blob-num js-line-number" data-line-number="2931"></td>
        <td id="LC2931" class="blob-code js-file-line">    <span class="k">if</span> (tab.active <span class="o">&amp;&amp;</span> tabs.<span class="no">length</span> <span class="o">&gt;</span> <span class="m">1</span>) {</td>
      </tr>
      <tr>
        <td id="L2932" class="blob-num js-line-number" data-line-number="2932"></td>
        <td id="LC2932" class="blob-code js-file-line">      <span class="c1">//If this is the last tab, select the previous tab. else, the next tab.</span></td>
      </tr>
      <tr>
        <td id="L2933" class="blob-num js-line-number" data-line-number="2933"></td>
        <td id="LC2933" class="blob-code js-file-line">      <span class="k">var</span> newActiveIndex <span class="o">=</span> index <span class="o">==</span> tabs.<span class="no">length</span> <span class="o">-</span> <span class="m">1</span> <span class="o">?</span> index <span class="o">-</span> <span class="m">1</span> <span class="o">:</span> index <span class="o">+</span> <span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L2934" class="blob-num js-line-number" data-line-number="2934"></td>
        <td id="LC2934" class="blob-code js-file-line">      ctrl.<span class="nf">select</span>(tabs[newActiveIndex]);</td>
      </tr>
      <tr>
        <td id="L2935" class="blob-num js-line-number" data-line-number="2935"></td>
        <td id="LC2935" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2936" class="blob-num js-line-number" data-line-number="2936"></td>
        <td id="LC2936" class="blob-code js-file-line">    tabs.<span class="nf">splice</span>(index, <span class="m">1</span>);</td>
      </tr>
      <tr>
        <td id="L2937" class="blob-num js-line-number" data-line-number="2937"></td>
        <td id="LC2937" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2938" class="blob-num js-line-number" data-line-number="2938"></td>
        <td id="LC2938" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L2939" class="blob-num js-line-number" data-line-number="2939"></td>
        <td id="LC2939" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2940" class="blob-num js-line-number" data-line-number="2940"></td>
        <td id="LC2940" class="blob-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L2941" class="blob-num js-line-number" data-line-number="2941"></td>
        <td id="LC2941" class="blob-code js-file-line"><span class="cm"> * @ngdoc directive</span></td>
      </tr>
      <tr>
        <td id="L2942" class="blob-num js-line-number" data-line-number="2942"></td>
        <td id="LC2942" class="blob-code js-file-line"><span class="cm"> * @name ui.bootstrap.tabs.directive:tabset</span></td>
      </tr>
      <tr>
        <td id="L2943" class="blob-num js-line-number" data-line-number="2943"></td>
        <td id="LC2943" class="blob-code js-file-line"><span class="cm"> * @restrict EA</span></td>
      </tr>
      <tr>
        <td id="L2944" class="blob-num js-line-number" data-line-number="2944"></td>
        <td id="LC2944" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L2945" class="blob-num js-line-number" data-line-number="2945"></td>
        <td id="LC2945" class="blob-code js-file-line"><span class="cm"> * @description</span></td>
      </tr>
      <tr>
        <td id="L2946" class="blob-num js-line-number" data-line-number="2946"></td>
        <td id="LC2946" class="blob-code js-file-line"><span class="cm"> * Tabset is the outer container for the tabs directive</span></td>
      </tr>
      <tr>
        <td id="L2947" class="blob-num js-line-number" data-line-number="2947"></td>
        <td id="LC2947" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L2948" class="blob-num js-line-number" data-line-number="2948"></td>
        <td id="LC2948" class="blob-code js-file-line"><span class="cm"> * @param {boolean=} vertical Whether or not to use vertical styling for the tabs.</span></td>
      </tr>
      <tr>
        <td id="L2949" class="blob-num js-line-number" data-line-number="2949"></td>
        <td id="LC2949" class="blob-code js-file-line"><span class="cm"> * @param {boolean=} justified Whether or not to use justified styling for the tabs.</span></td>
      </tr>
      <tr>
        <td id="L2950" class="blob-num js-line-number" data-line-number="2950"></td>
        <td id="LC2950" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L2951" class="blob-num js-line-number" data-line-number="2951"></td>
        <td id="LC2951" class="blob-code js-file-line"><span class="cm"> * @example</span></td>
      </tr>
      <tr>
        <td id="L2952" class="blob-num js-line-number" data-line-number="2952"></td>
        <td id="LC2952" class="blob-code js-file-line"><span class="cm">&lt;example module=&quot;ui.bootstrap&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L2953" class="blob-num js-line-number" data-line-number="2953"></td>
        <td id="LC2953" class="blob-code js-file-line"><span class="cm">  &lt;file name=&quot;index.html&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L2954" class="blob-num js-line-number" data-line-number="2954"></td>
        <td id="LC2954" class="blob-code js-file-line"><span class="cm">    &lt;tabset&gt;</span></td>
      </tr>
      <tr>
        <td id="L2955" class="blob-num js-line-number" data-line-number="2955"></td>
        <td id="LC2955" class="blob-code js-file-line"><span class="cm">      &lt;tab heading=&quot;Tab 1&quot;&gt;&lt;b&gt;First&lt;/b&gt; Content!&lt;/tab&gt;</span></td>
      </tr>
      <tr>
        <td id="L2956" class="blob-num js-line-number" data-line-number="2956"></td>
        <td id="LC2956" class="blob-code js-file-line"><span class="cm">      &lt;tab heading=&quot;Tab 2&quot;&gt;&lt;i&gt;Second&lt;/i&gt; Content!&lt;/tab&gt;</span></td>
      </tr>
      <tr>
        <td id="L2957" class="blob-num js-line-number" data-line-number="2957"></td>
        <td id="LC2957" class="blob-code js-file-line"><span class="cm">    &lt;/tabset&gt;</span></td>
      </tr>
      <tr>
        <td id="L2958" class="blob-num js-line-number" data-line-number="2958"></td>
        <td id="LC2958" class="blob-code js-file-line"><span class="cm">    &lt;hr /&gt;</span></td>
      </tr>
      <tr>
        <td id="L2959" class="blob-num js-line-number" data-line-number="2959"></td>
        <td id="LC2959" class="blob-code js-file-line"><span class="cm">    &lt;tabset vertical=&quot;true&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L2960" class="blob-num js-line-number" data-line-number="2960"></td>
        <td id="LC2960" class="blob-code js-file-line"><span class="cm">      &lt;tab heading=&quot;Vertical Tab 1&quot;&gt;&lt;b&gt;First&lt;/b&gt; Vertical Content!&lt;/tab&gt;</span></td>
      </tr>
      <tr>
        <td id="L2961" class="blob-num js-line-number" data-line-number="2961"></td>
        <td id="LC2961" class="blob-code js-file-line"><span class="cm">      &lt;tab heading=&quot;Vertical Tab 2&quot;&gt;&lt;i&gt;Second&lt;/i&gt; Vertical Content!&lt;/tab&gt;</span></td>
      </tr>
      <tr>
        <td id="L2962" class="blob-num js-line-number" data-line-number="2962"></td>
        <td id="LC2962" class="blob-code js-file-line"><span class="cm">    &lt;/tabset&gt;</span></td>
      </tr>
      <tr>
        <td id="L2963" class="blob-num js-line-number" data-line-number="2963"></td>
        <td id="LC2963" class="blob-code js-file-line"><span class="cm">    &lt;tabset justified=&quot;true&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L2964" class="blob-num js-line-number" data-line-number="2964"></td>
        <td id="LC2964" class="blob-code js-file-line"><span class="cm">      &lt;tab heading=&quot;Justified Tab 1&quot;&gt;&lt;b&gt;First&lt;/b&gt; Justified Content!&lt;/tab&gt;</span></td>
      </tr>
      <tr>
        <td id="L2965" class="blob-num js-line-number" data-line-number="2965"></td>
        <td id="LC2965" class="blob-code js-file-line"><span class="cm">      &lt;tab heading=&quot;Justified Tab 2&quot;&gt;&lt;i&gt;Second&lt;/i&gt; Justified Content!&lt;/tab&gt;</span></td>
      </tr>
      <tr>
        <td id="L2966" class="blob-num js-line-number" data-line-number="2966"></td>
        <td id="LC2966" class="blob-code js-file-line"><span class="cm">    &lt;/tabset&gt;</span></td>
      </tr>
      <tr>
        <td id="L2967" class="blob-num js-line-number" data-line-number="2967"></td>
        <td id="LC2967" class="blob-code js-file-line"><span class="cm">  &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L2968" class="blob-num js-line-number" data-line-number="2968"></td>
        <td id="LC2968" class="blob-code js-file-line"><span class="cm">&lt;/example&gt;</span></td>
      </tr>
      <tr>
        <td id="L2969" class="blob-num js-line-number" data-line-number="2969"></td>
        <td id="LC2969" class="blob-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L2970" class="blob-num js-line-number" data-line-number="2970"></td>
        <td id="LC2970" class="blob-code js-file-line">.directive(<span class="s1">'tabset'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2971" class="blob-num js-line-number" data-line-number="2971"></td>
        <td id="LC2971" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L2972" class="blob-num js-line-number" data-line-number="2972"></td>
        <td id="LC2972" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L2973" class="blob-num js-line-number" data-line-number="2973"></td>
        <td id="LC2973" class="blob-code js-file-line">    transclude<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L2974" class="blob-num js-line-number" data-line-number="2974"></td>
        <td id="LC2974" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L2975" class="blob-num js-line-number" data-line-number="2975"></td>
        <td id="LC2975" class="blob-code js-file-line">    scope<span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L2976" class="blob-num js-line-number" data-line-number="2976"></td>
        <td id="LC2976" class="blob-code js-file-line">      type<span class="o">:</span> <span class="s1">'@'</span></td>
      </tr>
      <tr>
        <td id="L2977" class="blob-num js-line-number" data-line-number="2977"></td>
        <td id="LC2977" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L2978" class="blob-num js-line-number" data-line-number="2978"></td>
        <td id="LC2978" class="blob-code js-file-line">    controller<span class="o">:</span> <span class="s1">'TabsetController'</span>,</td>
      </tr>
      <tr>
        <td id="L2979" class="blob-num js-line-number" data-line-number="2979"></td>
        <td id="LC2979" class="blob-code js-file-line">    templateUrl<span class="o">:</span> <span class="s1">'template/tabs/tabset.html'</span>,</td>
      </tr>
      <tr>
        <td id="L2980" class="blob-num js-line-number" data-line-number="2980"></td>
        <td id="LC2980" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>) {</td>
      </tr>
      <tr>
        <td id="L2981" class="blob-num js-line-number" data-line-number="2981"></td>
        <td id="LC2981" class="blob-code js-file-line">      scope.vertical <span class="o">=</span> angular.isDefined(attrs.vertical) <span class="o">?</span> scope.$parent.$<span class="nf">eval</span>(attrs.vertical) <span class="o">:</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L2982" class="blob-num js-line-number" data-line-number="2982"></td>
        <td id="LC2982" class="blob-code js-file-line">      scope.justified <span class="o">=</span> angular.isDefined(attrs.justified) <span class="o">?</span> scope.$parent.$<span class="nf">eval</span>(attrs.justified) <span class="o">:</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L2983" class="blob-num js-line-number" data-line-number="2983"></td>
        <td id="LC2983" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L2984" class="blob-num js-line-number" data-line-number="2984"></td>
        <td id="LC2984" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L2985" class="blob-num js-line-number" data-line-number="2985"></td>
        <td id="LC2985" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L2986" class="blob-num js-line-number" data-line-number="2986"></td>
        <td id="LC2986" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2987" class="blob-num js-line-number" data-line-number="2987"></td>
        <td id="LC2987" class="blob-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L2988" class="blob-num js-line-number" data-line-number="2988"></td>
        <td id="LC2988" class="blob-code js-file-line"><span class="cm"> * @ngdoc directive</span></td>
      </tr>
      <tr>
        <td id="L2989" class="blob-num js-line-number" data-line-number="2989"></td>
        <td id="LC2989" class="blob-code js-file-line"><span class="cm"> * @name ui.bootstrap.tabs.directive:tab</span></td>
      </tr>
      <tr>
        <td id="L2990" class="blob-num js-line-number" data-line-number="2990"></td>
        <td id="LC2990" class="blob-code js-file-line"><span class="cm"> * @restrict EA</span></td>
      </tr>
      <tr>
        <td id="L2991" class="blob-num js-line-number" data-line-number="2991"></td>
        <td id="LC2991" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L2992" class="blob-num js-line-number" data-line-number="2992"></td>
        <td id="LC2992" class="blob-code js-file-line"><span class="cm"> * @param {string=} heading The visible heading, or title, of the tab. Set HTML headings with {@link ui.bootstrap.tabs.directive:tabHeading tabHeading}.</span></td>
      </tr>
      <tr>
        <td id="L2993" class="blob-num js-line-number" data-line-number="2993"></td>
        <td id="LC2993" class="blob-code js-file-line"><span class="cm"> * @param {string=} select An expression to evaluate when the tab is selected.</span></td>
      </tr>
      <tr>
        <td id="L2994" class="blob-num js-line-number" data-line-number="2994"></td>
        <td id="LC2994" class="blob-code js-file-line"><span class="cm"> * @param {boolean=} active A binding, telling whether or not this tab is selected.</span></td>
      </tr>
      <tr>
        <td id="L2995" class="blob-num js-line-number" data-line-number="2995"></td>
        <td id="LC2995" class="blob-code js-file-line"><span class="cm"> * @param {boolean=} disabled A binding, telling whether or not this tab is disabled.</span></td>
      </tr>
      <tr>
        <td id="L2996" class="blob-num js-line-number" data-line-number="2996"></td>
        <td id="LC2996" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L2997" class="blob-num js-line-number" data-line-number="2997"></td>
        <td id="LC2997" class="blob-code js-file-line"><span class="cm"> * @description</span></td>
      </tr>
      <tr>
        <td id="L2998" class="blob-num js-line-number" data-line-number="2998"></td>
        <td id="LC2998" class="blob-code js-file-line"><span class="cm"> * Creates a tab with a heading and content. Must be placed within a {@link ui.bootstrap.tabs.directive:tabset tabset}.</span></td>
      </tr>
      <tr>
        <td id="L2999" class="blob-num js-line-number" data-line-number="2999"></td>
        <td id="LC2999" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L3000" class="blob-num js-line-number" data-line-number="3000"></td>
        <td id="LC3000" class="blob-code js-file-line"><span class="cm"> * @example</span></td>
      </tr>
      <tr>
        <td id="L3001" class="blob-num js-line-number" data-line-number="3001"></td>
        <td id="LC3001" class="blob-code js-file-line"><span class="cm">&lt;example module=&quot;ui.bootstrap&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L3002" class="blob-num js-line-number" data-line-number="3002"></td>
        <td id="LC3002" class="blob-code js-file-line"><span class="cm">  &lt;file name=&quot;index.html&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L3003" class="blob-num js-line-number" data-line-number="3003"></td>
        <td id="LC3003" class="blob-code js-file-line"><span class="cm">    &lt;div ng-controller=&quot;TabsDemoCtrl&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L3004" class="blob-num js-line-number" data-line-number="3004"></td>
        <td id="LC3004" class="blob-code js-file-line"><span class="cm">      &lt;button class=&quot;btn btn-small&quot; ng-click=&quot;items[0].active = true&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L3005" class="blob-num js-line-number" data-line-number="3005"></td>
        <td id="LC3005" class="blob-code js-file-line"><span class="cm">        Select item 1, using active binding</span></td>
      </tr>
      <tr>
        <td id="L3006" class="blob-num js-line-number" data-line-number="3006"></td>
        <td id="LC3006" class="blob-code js-file-line"><span class="cm">      &lt;/button&gt;</span></td>
      </tr>
      <tr>
        <td id="L3007" class="blob-num js-line-number" data-line-number="3007"></td>
        <td id="LC3007" class="blob-code js-file-line"><span class="cm">      &lt;button class=&quot;btn btn-small&quot; ng-click=&quot;items[1].disabled = !items[1].disabled&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L3008" class="blob-num js-line-number" data-line-number="3008"></td>
        <td id="LC3008" class="blob-code js-file-line"><span class="cm">        Enable/disable item 2, using disabled binding</span></td>
      </tr>
      <tr>
        <td id="L3009" class="blob-num js-line-number" data-line-number="3009"></td>
        <td id="LC3009" class="blob-code js-file-line"><span class="cm">      &lt;/button&gt;</span></td>
      </tr>
      <tr>
        <td id="L3010" class="blob-num js-line-number" data-line-number="3010"></td>
        <td id="LC3010" class="blob-code js-file-line"><span class="cm">      &lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L3011" class="blob-num js-line-number" data-line-number="3011"></td>
        <td id="LC3011" class="blob-code js-file-line"><span class="cm">      &lt;tabset&gt;</span></td>
      </tr>
      <tr>
        <td id="L3012" class="blob-num js-line-number" data-line-number="3012"></td>
        <td id="LC3012" class="blob-code js-file-line"><span class="cm">        &lt;tab heading=&quot;Tab 1&quot;&gt;First Tab&lt;/tab&gt;</span></td>
      </tr>
      <tr>
        <td id="L3013" class="blob-num js-line-number" data-line-number="3013"></td>
        <td id="LC3013" class="blob-code js-file-line"><span class="cm">        &lt;tab select=&quot;alertMe()&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L3014" class="blob-num js-line-number" data-line-number="3014"></td>
        <td id="LC3014" class="blob-code js-file-line"><span class="cm">          &lt;tab-heading&gt;&lt;i class=&quot;icon-bell&quot;&gt;&lt;/i&gt; Alert me!&lt;/tab-heading&gt;</span></td>
      </tr>
      <tr>
        <td id="L3015" class="blob-num js-line-number" data-line-number="3015"></td>
        <td id="LC3015" class="blob-code js-file-line"><span class="cm">          Second Tab, with alert callback and html heading!</span></td>
      </tr>
      <tr>
        <td id="L3016" class="blob-num js-line-number" data-line-number="3016"></td>
        <td id="LC3016" class="blob-code js-file-line"><span class="cm">        &lt;/tab&gt;</span></td>
      </tr>
      <tr>
        <td id="L3017" class="blob-num js-line-number" data-line-number="3017"></td>
        <td id="LC3017" class="blob-code js-file-line"><span class="cm">        &lt;tab ng-repeat=&quot;item in items&quot;</span></td>
      </tr>
      <tr>
        <td id="L3018" class="blob-num js-line-number" data-line-number="3018"></td>
        <td id="LC3018" class="blob-code js-file-line"><span class="cm">          heading=&quot;{{item.title}}&quot;</span></td>
      </tr>
      <tr>
        <td id="L3019" class="blob-num js-line-number" data-line-number="3019"></td>
        <td id="LC3019" class="blob-code js-file-line"><span class="cm">          disabled=&quot;item.disabled&quot;</span></td>
      </tr>
      <tr>
        <td id="L3020" class="blob-num js-line-number" data-line-number="3020"></td>
        <td id="LC3020" class="blob-code js-file-line"><span class="cm">          active=&quot;item.active&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L3021" class="blob-num js-line-number" data-line-number="3021"></td>
        <td id="LC3021" class="blob-code js-file-line"><span class="cm">          {{item.content}}</span></td>
      </tr>
      <tr>
        <td id="L3022" class="blob-num js-line-number" data-line-number="3022"></td>
        <td id="LC3022" class="blob-code js-file-line"><span class="cm">        &lt;/tab&gt;</span></td>
      </tr>
      <tr>
        <td id="L3023" class="blob-num js-line-number" data-line-number="3023"></td>
        <td id="LC3023" class="blob-code js-file-line"><span class="cm">      &lt;/tabset&gt;</span></td>
      </tr>
      <tr>
        <td id="L3024" class="blob-num js-line-number" data-line-number="3024"></td>
        <td id="LC3024" class="blob-code js-file-line"><span class="cm">    &lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L3025" class="blob-num js-line-number" data-line-number="3025"></td>
        <td id="LC3025" class="blob-code js-file-line"><span class="cm">  &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L3026" class="blob-num js-line-number" data-line-number="3026"></td>
        <td id="LC3026" class="blob-code js-file-line"><span class="cm">  &lt;file name=&quot;script.js&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L3027" class="blob-num js-line-number" data-line-number="3027"></td>
        <td id="LC3027" class="blob-code js-file-line"><span class="cm">    function TabsDemoCtrl($scope) {</span></td>
      </tr>
      <tr>
        <td id="L3028" class="blob-num js-line-number" data-line-number="3028"></td>
        <td id="LC3028" class="blob-code js-file-line"><span class="cm">      $scope.items = [</span></td>
      </tr>
      <tr>
        <td id="L3029" class="blob-num js-line-number" data-line-number="3029"></td>
        <td id="LC3029" class="blob-code js-file-line"><span class="cm">        { title:&quot;Dynamic Title 1&quot;, content:&quot;Dynamic Item 0&quot; },</span></td>
      </tr>
      <tr>
        <td id="L3030" class="blob-num js-line-number" data-line-number="3030"></td>
        <td id="LC3030" class="blob-code js-file-line"><span class="cm">        { title:&quot;Dynamic Title 2&quot;, content:&quot;Dynamic Item 1&quot;, disabled: true }</span></td>
      </tr>
      <tr>
        <td id="L3031" class="blob-num js-line-number" data-line-number="3031"></td>
        <td id="LC3031" class="blob-code js-file-line"><span class="cm">      ];</span></td>
      </tr>
      <tr>
        <td id="L3032" class="blob-num js-line-number" data-line-number="3032"></td>
        <td id="LC3032" class="blob-code js-file-line"><span class="cm"></span></td>
      </tr>
      <tr>
        <td id="L3033" class="blob-num js-line-number" data-line-number="3033"></td>
        <td id="LC3033" class="blob-code js-file-line"><span class="cm">      $scope.alertMe = function() {</span></td>
      </tr>
      <tr>
        <td id="L3034" class="blob-num js-line-number" data-line-number="3034"></td>
        <td id="LC3034" class="blob-code js-file-line"><span class="cm">        setTimeout(function() {</span></td>
      </tr>
      <tr>
        <td id="L3035" class="blob-num js-line-number" data-line-number="3035"></td>
        <td id="LC3035" class="blob-code js-file-line"><span class="cm">          alert(&quot;You've selected the alert tab!&quot;);</span></td>
      </tr>
      <tr>
        <td id="L3036" class="blob-num js-line-number" data-line-number="3036"></td>
        <td id="LC3036" class="blob-code js-file-line"><span class="cm">        });</span></td>
      </tr>
      <tr>
        <td id="L3037" class="blob-num js-line-number" data-line-number="3037"></td>
        <td id="LC3037" class="blob-code js-file-line"><span class="cm">      };</span></td>
      </tr>
      <tr>
        <td id="L3038" class="blob-num js-line-number" data-line-number="3038"></td>
        <td id="LC3038" class="blob-code js-file-line"><span class="cm">    };</span></td>
      </tr>
      <tr>
        <td id="L3039" class="blob-num js-line-number" data-line-number="3039"></td>
        <td id="LC3039" class="blob-code js-file-line"><span class="cm">  &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L3040" class="blob-num js-line-number" data-line-number="3040"></td>
        <td id="LC3040" class="blob-code js-file-line"><span class="cm">&lt;/example&gt;</span></td>
      </tr>
      <tr>
        <td id="L3041" class="blob-num js-line-number" data-line-number="3041"></td>
        <td id="LC3041" class="blob-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L3042" class="blob-num js-line-number" data-line-number="3042"></td>
        <td id="LC3042" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3043" class="blob-num js-line-number" data-line-number="3043"></td>
        <td id="LC3043" class="blob-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L3044" class="blob-num js-line-number" data-line-number="3044"></td>
        <td id="LC3044" class="blob-code js-file-line"><span class="cm"> * @ngdoc directive</span></td>
      </tr>
      <tr>
        <td id="L3045" class="blob-num js-line-number" data-line-number="3045"></td>
        <td id="LC3045" class="blob-code js-file-line"><span class="cm"> * @name ui.bootstrap.tabs.directive:tabHeading</span></td>
      </tr>
      <tr>
        <td id="L3046" class="blob-num js-line-number" data-line-number="3046"></td>
        <td id="LC3046" class="blob-code js-file-line"><span class="cm"> * @restrict EA</span></td>
      </tr>
      <tr>
        <td id="L3047" class="blob-num js-line-number" data-line-number="3047"></td>
        <td id="LC3047" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L3048" class="blob-num js-line-number" data-line-number="3048"></td>
        <td id="LC3048" class="blob-code js-file-line"><span class="cm"> * @description</span></td>
      </tr>
      <tr>
        <td id="L3049" class="blob-num js-line-number" data-line-number="3049"></td>
        <td id="LC3049" class="blob-code js-file-line"><span class="cm"> * Creates an HTML heading for a {@link ui.bootstrap.tabs.directive:tab tab}. Must be placed as a child of a tab element.</span></td>
      </tr>
      <tr>
        <td id="L3050" class="blob-num js-line-number" data-line-number="3050"></td>
        <td id="LC3050" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L3051" class="blob-num js-line-number" data-line-number="3051"></td>
        <td id="LC3051" class="blob-code js-file-line"><span class="cm"> * @example</span></td>
      </tr>
      <tr>
        <td id="L3052" class="blob-num js-line-number" data-line-number="3052"></td>
        <td id="LC3052" class="blob-code js-file-line"><span class="cm">&lt;example module=&quot;ui.bootstrap&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L3053" class="blob-num js-line-number" data-line-number="3053"></td>
        <td id="LC3053" class="blob-code js-file-line"><span class="cm">  &lt;file name=&quot;index.html&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L3054" class="blob-num js-line-number" data-line-number="3054"></td>
        <td id="LC3054" class="blob-code js-file-line"><span class="cm">    &lt;tabset&gt;</span></td>
      </tr>
      <tr>
        <td id="L3055" class="blob-num js-line-number" data-line-number="3055"></td>
        <td id="LC3055" class="blob-code js-file-line"><span class="cm">      &lt;tab&gt;</span></td>
      </tr>
      <tr>
        <td id="L3056" class="blob-num js-line-number" data-line-number="3056"></td>
        <td id="LC3056" class="blob-code js-file-line"><span class="cm">        &lt;tab-heading&gt;&lt;b&gt;HTML&lt;/b&gt; in my titles?!&lt;/tab-heading&gt;</span></td>
      </tr>
      <tr>
        <td id="L3057" class="blob-num js-line-number" data-line-number="3057"></td>
        <td id="LC3057" class="blob-code js-file-line"><span class="cm">        And some content, too!</span></td>
      </tr>
      <tr>
        <td id="L3058" class="blob-num js-line-number" data-line-number="3058"></td>
        <td id="LC3058" class="blob-code js-file-line"><span class="cm">      &lt;/tab&gt;</span></td>
      </tr>
      <tr>
        <td id="L3059" class="blob-num js-line-number" data-line-number="3059"></td>
        <td id="LC3059" class="blob-code js-file-line"><span class="cm">      &lt;tab&gt;</span></td>
      </tr>
      <tr>
        <td id="L3060" class="blob-num js-line-number" data-line-number="3060"></td>
        <td id="LC3060" class="blob-code js-file-line"><span class="cm">        &lt;tab-heading&gt;&lt;i class=&quot;icon-heart&quot;&gt;&lt;/i&gt; Icon heading?!?&lt;/tab-heading&gt;</span></td>
      </tr>
      <tr>
        <td id="L3061" class="blob-num js-line-number" data-line-number="3061"></td>
        <td id="LC3061" class="blob-code js-file-line"><span class="cm">        That's right.</span></td>
      </tr>
      <tr>
        <td id="L3062" class="blob-num js-line-number" data-line-number="3062"></td>
        <td id="LC3062" class="blob-code js-file-line"><span class="cm">      &lt;/tab&gt;</span></td>
      </tr>
      <tr>
        <td id="L3063" class="blob-num js-line-number" data-line-number="3063"></td>
        <td id="LC3063" class="blob-code js-file-line"><span class="cm">    &lt;/tabset&gt;</span></td>
      </tr>
      <tr>
        <td id="L3064" class="blob-num js-line-number" data-line-number="3064"></td>
        <td id="LC3064" class="blob-code js-file-line"><span class="cm">  &lt;/file&gt;</span></td>
      </tr>
      <tr>
        <td id="L3065" class="blob-num js-line-number" data-line-number="3065"></td>
        <td id="LC3065" class="blob-code js-file-line"><span class="cm">&lt;/example&gt;</span></td>
      </tr>
      <tr>
        <td id="L3066" class="blob-num js-line-number" data-line-number="3066"></td>
        <td id="LC3066" class="blob-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L3067" class="blob-num js-line-number" data-line-number="3067"></td>
        <td id="LC3067" class="blob-code js-file-line">.directive(<span class="s1">'tab'</span>, [<span class="s1">'$parse'</span>, <span class="kt">function</span>(<span class="nv">$parse</span>) {</td>
      </tr>
      <tr>
        <td id="L3068" class="blob-num js-line-number" data-line-number="3068"></td>
        <td id="LC3068" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L3069" class="blob-num js-line-number" data-line-number="3069"></td>
        <td id="LC3069" class="blob-code js-file-line">    require<span class="o">:</span> <span class="s1">'^tabset'</span>,</td>
      </tr>
      <tr>
        <td id="L3070" class="blob-num js-line-number" data-line-number="3070"></td>
        <td id="LC3070" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L3071" class="blob-num js-line-number" data-line-number="3071"></td>
        <td id="LC3071" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L3072" class="blob-num js-line-number" data-line-number="3072"></td>
        <td id="LC3072" class="blob-code js-file-line">    templateUrl<span class="o">:</span> <span class="s1">'template/tabs/tab.html'</span>,</td>
      </tr>
      <tr>
        <td id="L3073" class="blob-num js-line-number" data-line-number="3073"></td>
        <td id="LC3073" class="blob-code js-file-line">    transclude<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L3074" class="blob-num js-line-number" data-line-number="3074"></td>
        <td id="LC3074" class="blob-code js-file-line">    scope<span class="o">:</span> {</td>
      </tr>
      <tr>
        <td id="L3075" class="blob-num js-line-number" data-line-number="3075"></td>
        <td id="LC3075" class="blob-code js-file-line">      active<span class="o">:</span> <span class="s1">'=?'</span>,</td>
      </tr>
      <tr>
        <td id="L3076" class="blob-num js-line-number" data-line-number="3076"></td>
        <td id="LC3076" class="blob-code js-file-line">      heading<span class="o">:</span> <span class="s1">'@'</span>,</td>
      </tr>
      <tr>
        <td id="L3077" class="blob-num js-line-number" data-line-number="3077"></td>
        <td id="LC3077" class="blob-code js-file-line">      <span class="nf">onSelect</span><span class="o">:</span> <span class="s1">'&amp;select'</span>, <span class="c1">//This callback is called in contentHeadingTransclude</span></td>
      </tr>
      <tr>
        <td id="L3078" class="blob-num js-line-number" data-line-number="3078"></td>
        <td id="LC3078" class="blob-code js-file-line">                          <span class="c1">//once it inserts the tab's content into the dom</span></td>
      </tr>
      <tr>
        <td id="L3079" class="blob-num js-line-number" data-line-number="3079"></td>
        <td id="LC3079" class="blob-code js-file-line">      onDeselect<span class="o">:</span> <span class="s1">'&amp;deselect'</span></td>
      </tr>
      <tr>
        <td id="L3080" class="blob-num js-line-number" data-line-number="3080"></td>
        <td id="LC3080" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L3081" class="blob-num js-line-number" data-line-number="3081"></td>
        <td id="LC3081" class="blob-code js-file-line">    <span class="nf">controller</span>: <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3082" class="blob-num js-line-number" data-line-number="3082"></td>
        <td id="LC3082" class="blob-code js-file-line">      <span class="c1">//Empty controller so other directives can require being 'under' a tab</span></td>
      </tr>
      <tr>
        <td id="L3083" class="blob-num js-line-number" data-line-number="3083"></td>
        <td id="LC3083" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L3084" class="blob-num js-line-number" data-line-number="3084"></td>
        <td id="LC3084" class="blob-code js-file-line">    <span class="nf">compile</span>: <span class="kt">function</span>(<span class="nv">elm</span>, <span class="nv">attrs</span>, <span class="nv">transclude</span>) {</td>
      </tr>
      <tr>
        <td id="L3085" class="blob-num js-line-number" data-line-number="3085"></td>
        <td id="LC3085" class="blob-code js-file-line">      <span class="k">return</span> <span class="kt">function</span> <span class="nf">postLink</span>(<span class="nv">scope</span>, <span class="nv">elm</span>, <span class="nv">attrs</span>, <span class="nv">tabsetCtrl</span>) {</td>
      </tr>
      <tr>
        <td id="L3086" class="blob-num js-line-number" data-line-number="3086"></td>
        <td id="LC3086" class="blob-code js-file-line">        scope.$<span class="nf">watch</span>(<span class="s1">'active'</span>, <span class="kt">function</span>(<span class="nv">active</span>) {</td>
      </tr>
      <tr>
        <td id="L3087" class="blob-num js-line-number" data-line-number="3087"></td>
        <td id="LC3087" class="blob-code js-file-line">          <span class="k">if</span> (active) {</td>
      </tr>
      <tr>
        <td id="L3088" class="blob-num js-line-number" data-line-number="3088"></td>
        <td id="LC3088" class="blob-code js-file-line">            tabsetCtrl.<span class="nf">select</span>(scope);</td>
      </tr>
      <tr>
        <td id="L3089" class="blob-num js-line-number" data-line-number="3089"></td>
        <td id="LC3089" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L3090" class="blob-num js-line-number" data-line-number="3090"></td>
        <td id="LC3090" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L3091" class="blob-num js-line-number" data-line-number="3091"></td>
        <td id="LC3091" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3092" class="blob-num js-line-number" data-line-number="3092"></td>
        <td id="LC3092" class="blob-code js-file-line">        scope.<span class="no">disabled</span> <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L3093" class="blob-num js-line-number" data-line-number="3093"></td>
        <td id="LC3093" class="blob-code js-file-line">        <span class="k">if</span> ( attrs.<span class="no">disabled</span> ) {</td>
      </tr>
      <tr>
        <td id="L3094" class="blob-num js-line-number" data-line-number="3094"></td>
        <td id="LC3094" class="blob-code js-file-line">          scope.$parent.$<span class="nf">watch</span>($<span class="nf">parse</span>(attrs.<span class="no">disabled</span>), <span class="kt">function</span>(<span class="nv">value</span>) {</td>
      </tr>
      <tr>
        <td id="L3095" class="blob-num js-line-number" data-line-number="3095"></td>
        <td id="LC3095" class="blob-code js-file-line">            scope.<span class="no">disabled</span> <span class="o">=</span> <span class="o">!!</span> value;</td>
      </tr>
      <tr>
        <td id="L3096" class="blob-num js-line-number" data-line-number="3096"></td>
        <td id="LC3096" class="blob-code js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L3097" class="blob-num js-line-number" data-line-number="3097"></td>
        <td id="LC3097" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L3098" class="blob-num js-line-number" data-line-number="3098"></td>
        <td id="LC3098" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3099" class="blob-num js-line-number" data-line-number="3099"></td>
        <td id="LC3099" class="blob-code js-file-line">        <span class="no">scope</span>.<span class="nf">select</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3100" class="blob-num js-line-number" data-line-number="3100"></td>
        <td id="LC3100" class="blob-code js-file-line">          <span class="k">if</span> ( <span class="o">!</span>scope.<span class="no">disabled</span> ) {</td>
      </tr>
      <tr>
        <td id="L3101" class="blob-num js-line-number" data-line-number="3101"></td>
        <td id="LC3101" class="blob-code js-file-line">            scope.active <span class="o">=</span> <span class="kc">true</span>;</td>
      </tr>
      <tr>
        <td id="L3102" class="blob-num js-line-number" data-line-number="3102"></td>
        <td id="LC3102" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L3103" class="blob-num js-line-number" data-line-number="3103"></td>
        <td id="LC3103" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L3104" class="blob-num js-line-number" data-line-number="3104"></td>
        <td id="LC3104" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3105" class="blob-num js-line-number" data-line-number="3105"></td>
        <td id="LC3105" class="blob-code js-file-line">        tabsetCtrl.addTab(scope);</td>
      </tr>
      <tr>
        <td id="L3106" class="blob-num js-line-number" data-line-number="3106"></td>
        <td id="LC3106" class="blob-code js-file-line">        scope.$on(<span class="s1">'$destroy'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3107" class="blob-num js-line-number" data-line-number="3107"></td>
        <td id="LC3107" class="blob-code js-file-line">          tabsetCtrl.removeTab(scope);</td>
      </tr>
      <tr>
        <td id="L3108" class="blob-num js-line-number" data-line-number="3108"></td>
        <td id="LC3108" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L3109" class="blob-num js-line-number" data-line-number="3109"></td>
        <td id="LC3109" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3110" class="blob-num js-line-number" data-line-number="3110"></td>
        <td id="LC3110" class="blob-code js-file-line">        <span class="c1">//We need to transclude later, once the content container is ready.</span></td>
      </tr>
      <tr>
        <td id="L3111" class="blob-num js-line-number" data-line-number="3111"></td>
        <td id="LC3111" class="blob-code js-file-line">        <span class="c1">//when this link happens, we're inside a tab heading.</span></td>
      </tr>
      <tr>
        <td id="L3112" class="blob-num js-line-number" data-line-number="3112"></td>
        <td id="LC3112" class="blob-code js-file-line">        scope.$transcludeFn <span class="o">=</span> transclude;</td>
      </tr>
      <tr>
        <td id="L3113" class="blob-num js-line-number" data-line-number="3113"></td>
        <td id="LC3113" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L3114" class="blob-num js-line-number" data-line-number="3114"></td>
        <td id="LC3114" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L3115" class="blob-num js-line-number" data-line-number="3115"></td>
        <td id="LC3115" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L3116" class="blob-num js-line-number" data-line-number="3116"></td>
        <td id="LC3116" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L3117" class="blob-num js-line-number" data-line-number="3117"></td>
        <td id="LC3117" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3118" class="blob-num js-line-number" data-line-number="3118"></td>
        <td id="LC3118" class="blob-code js-file-line">.directive(<span class="s1">'tabHeadingTransclude'</span>, [<span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3119" class="blob-num js-line-number" data-line-number="3119"></td>
        <td id="LC3119" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L3120" class="blob-num js-line-number" data-line-number="3120"></td>
        <td id="LC3120" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'A'</span>,</td>
      </tr>
      <tr>
        <td id="L3121" class="blob-num js-line-number" data-line-number="3121"></td>
        <td id="LC3121" class="blob-code js-file-line">    require<span class="o">:</span> <span class="s1">'^tab'</span>,</td>
      </tr>
      <tr>
        <td id="L3122" class="blob-num js-line-number" data-line-number="3122"></td>
        <td id="LC3122" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">elm</span>, <span class="nv">attrs</span>, <span class="nv">tabCtrl</span>) {</td>
      </tr>
      <tr>
        <td id="L3123" class="blob-num js-line-number" data-line-number="3123"></td>
        <td id="LC3123" class="blob-code js-file-line">      scope.$<span class="nf">watch</span>(<span class="s1">'headingElement'</span>, <span class="kt">function</span> <span class="nf">updateHeadingElement</span>(<span class="nv">heading</span>) {</td>
      </tr>
      <tr>
        <td id="L3124" class="blob-num js-line-number" data-line-number="3124"></td>
        <td id="LC3124" class="blob-code js-file-line">        <span class="k">if</span> (heading) {</td>
      </tr>
      <tr>
        <td id="L3125" class="blob-num js-line-number" data-line-number="3125"></td>
        <td id="LC3125" class="blob-code js-file-line">          elm.html(<span class="s1">''</span>);</td>
      </tr>
      <tr>
        <td id="L3126" class="blob-num js-line-number" data-line-number="3126"></td>
        <td id="LC3126" class="blob-code js-file-line">          elm.append(heading);</td>
      </tr>
      <tr>
        <td id="L3127" class="blob-num js-line-number" data-line-number="3127"></td>
        <td id="LC3127" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L3128" class="blob-num js-line-number" data-line-number="3128"></td>
        <td id="LC3128" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L3129" class="blob-num js-line-number" data-line-number="3129"></td>
        <td id="LC3129" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L3130" class="blob-num js-line-number" data-line-number="3130"></td>
        <td id="LC3130" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L3131" class="blob-num js-line-number" data-line-number="3131"></td>
        <td id="LC3131" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L3132" class="blob-num js-line-number" data-line-number="3132"></td>
        <td id="LC3132" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3133" class="blob-num js-line-number" data-line-number="3133"></td>
        <td id="LC3133" class="blob-code js-file-line">.directive(<span class="s1">'tabContentTransclude'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3134" class="blob-num js-line-number" data-line-number="3134"></td>
        <td id="LC3134" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L3135" class="blob-num js-line-number" data-line-number="3135"></td>
        <td id="LC3135" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'A'</span>,</td>
      </tr>
      <tr>
        <td id="L3136" class="blob-num js-line-number" data-line-number="3136"></td>
        <td id="LC3136" class="blob-code js-file-line">    require<span class="o">:</span> <span class="s1">'^tabset'</span>,</td>
      </tr>
      <tr>
        <td id="L3137" class="blob-num js-line-number" data-line-number="3137"></td>
        <td id="LC3137" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">elm</span>, <span class="nv">attrs</span>) {</td>
      </tr>
      <tr>
        <td id="L3138" class="blob-num js-line-number" data-line-number="3138"></td>
        <td id="LC3138" class="blob-code js-file-line">      <span class="k">var</span> tab <span class="o">=</span> scope.$<span class="nf">eval</span>(attrs.tabContentTransclude);</td>
      </tr>
      <tr>
        <td id="L3139" class="blob-num js-line-number" data-line-number="3139"></td>
        <td id="LC3139" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3140" class="blob-num js-line-number" data-line-number="3140"></td>
        <td id="LC3140" class="blob-code js-file-line">      <span class="c1">//Now our tab is ready to be transcluded: both the tab heading area</span></td>
      </tr>
      <tr>
        <td id="L3141" class="blob-num js-line-number" data-line-number="3141"></td>
        <td id="LC3141" class="blob-code js-file-line">      <span class="c1">//and the tab content area are loaded.  Transclude 'em both.</span></td>
      </tr>
      <tr>
        <td id="L3142" class="blob-num js-line-number" data-line-number="3142"></td>
        <td id="LC3142" class="blob-code js-file-line">      tab.$transcludeFn(tab.$parent, <span class="kt">function</span>(<span class="nv">contents</span>) {</td>
      </tr>
      <tr>
        <td id="L3143" class="blob-num js-line-number" data-line-number="3143"></td>
        <td id="LC3143" class="blob-code js-file-line">        angular.forEach(contents, <span class="kt">function</span>(<span class="nv">node</span>) {</td>
      </tr>
      <tr>
        <td id="L3144" class="blob-num js-line-number" data-line-number="3144"></td>
        <td id="LC3144" class="blob-code js-file-line">          <span class="k">if</span> (isTabHeading(node)) {</td>
      </tr>
      <tr>
        <td id="L3145" class="blob-num js-line-number" data-line-number="3145"></td>
        <td id="LC3145" class="blob-code js-file-line">            <span class="c1">//Let tabHeadingTransclude know.</span></td>
      </tr>
      <tr>
        <td id="L3146" class="blob-num js-line-number" data-line-number="3146"></td>
        <td id="LC3146" class="blob-code js-file-line">            tab.headingElement <span class="o">=</span> node;</td>
      </tr>
      <tr>
        <td id="L3147" class="blob-num js-line-number" data-line-number="3147"></td>
        <td id="LC3147" class="blob-code js-file-line">          } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L3148" class="blob-num js-line-number" data-line-number="3148"></td>
        <td id="LC3148" class="blob-code js-file-line">            elm.append(node);</td>
      </tr>
      <tr>
        <td id="L3149" class="blob-num js-line-number" data-line-number="3149"></td>
        <td id="LC3149" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L3150" class="blob-num js-line-number" data-line-number="3150"></td>
        <td id="LC3150" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L3151" class="blob-num js-line-number" data-line-number="3151"></td>
        <td id="LC3151" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L3152" class="blob-num js-line-number" data-line-number="3152"></td>
        <td id="LC3152" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L3153" class="blob-num js-line-number" data-line-number="3153"></td>
        <td id="LC3153" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L3154" class="blob-num js-line-number" data-line-number="3154"></td>
        <td id="LC3154" class="blob-code js-file-line">  <span class="kt">function</span> <span class="nf">isTabHeading</span>(<span class="nv">node</span>) {</td>
      </tr>
      <tr>
        <td id="L3155" class="blob-num js-line-number" data-line-number="3155"></td>
        <td id="LC3155" class="blob-code js-file-line">    <span class="k">return</span> node.<span class="no">tagName</span> <span class="o">&amp;&amp;</span>  (</td>
      </tr>
      <tr>
        <td id="L3156" class="blob-num js-line-number" data-line-number="3156"></td>
        <td id="LC3156" class="blob-code js-file-line">      node.hasAttribute(<span class="s1">'tab-heading'</span>) <span class="o">||</span></td>
      </tr>
      <tr>
        <td id="L3157" class="blob-num js-line-number" data-line-number="3157"></td>
        <td id="LC3157" class="blob-code js-file-line">      node.hasAttribute(<span class="s1">'data-tab-heading'</span>) <span class="o">||</span></td>
      </tr>
      <tr>
        <td id="L3158" class="blob-num js-line-number" data-line-number="3158"></td>
        <td id="LC3158" class="blob-code js-file-line">      node.<span class="no">tagName</span>.<span class="nf">toLowerCase</span>() <span class="o">===</span> <span class="s1">'tab-heading'</span> <span class="o">||</span></td>
      </tr>
      <tr>
        <td id="L3159" class="blob-num js-line-number" data-line-number="3159"></td>
        <td id="LC3159" class="blob-code js-file-line">      node.<span class="no">tagName</span>.<span class="nf">toLowerCase</span>() <span class="o">===</span> <span class="s1">'data-tab-heading'</span></td>
      </tr>
      <tr>
        <td id="L3160" class="blob-num js-line-number" data-line-number="3160"></td>
        <td id="LC3160" class="blob-code js-file-line">    );</td>
      </tr>
      <tr>
        <td id="L3161" class="blob-num js-line-number" data-line-number="3161"></td>
        <td id="LC3161" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L3162" class="blob-num js-line-number" data-line-number="3162"></td>
        <td id="LC3162" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L3163" class="blob-num js-line-number" data-line-number="3163"></td>
        <td id="LC3163" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3164" class="blob-num js-line-number" data-line-number="3164"></td>
        <td id="LC3164" class="blob-code js-file-line">;</td>
      </tr>
      <tr>
        <td id="L3165" class="blob-num js-line-number" data-line-number="3165"></td>
        <td id="LC3165" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3166" class="blob-num js-line-number" data-line-number="3166"></td>
        <td id="LC3166" class="blob-code js-file-line">angular.module(<span class="s1">'ui.bootstrap.timepicker'</span>, [])</td>
      </tr>
      <tr>
        <td id="L3167" class="blob-num js-line-number" data-line-number="3167"></td>
        <td id="LC3167" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3168" class="blob-num js-line-number" data-line-number="3168"></td>
        <td id="LC3168" class="blob-code js-file-line">.constant(<span class="s1">'timepickerConfig'</span>, {</td>
      </tr>
      <tr>
        <td id="L3169" class="blob-num js-line-number" data-line-number="3169"></td>
        <td id="LC3169" class="blob-code js-file-line">  hourStep<span class="o">:</span> <span class="m">1</span>,</td>
      </tr>
      <tr>
        <td id="L3170" class="blob-num js-line-number" data-line-number="3170"></td>
        <td id="LC3170" class="blob-code js-file-line">  minuteStep<span class="o">:</span> <span class="m">1</span>,</td>
      </tr>
      <tr>
        <td id="L3171" class="blob-num js-line-number" data-line-number="3171"></td>
        <td id="LC3171" class="blob-code js-file-line">  showMeridian<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L3172" class="blob-num js-line-number" data-line-number="3172"></td>
        <td id="LC3172" class="blob-code js-file-line">  meridians<span class="o">:</span> <span class="kc">null</span>,</td>
      </tr>
      <tr>
        <td id="L3173" class="blob-num js-line-number" data-line-number="3173"></td>
        <td id="LC3173" class="blob-code js-file-line">  readonlyInput<span class="o">:</span> <span class="kc">false</span>,</td>
      </tr>
      <tr>
        <td id="L3174" class="blob-num js-line-number" data-line-number="3174"></td>
        <td id="LC3174" class="blob-code js-file-line">  mousewheel<span class="o">:</span> <span class="kc">true</span></td>
      </tr>
      <tr>
        <td id="L3175" class="blob-num js-line-number" data-line-number="3175"></td>
        <td id="LC3175" class="blob-code js-file-line">})</td>
      </tr>
      <tr>
        <td id="L3176" class="blob-num js-line-number" data-line-number="3176"></td>
        <td id="LC3176" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3177" class="blob-num js-line-number" data-line-number="3177"></td>
        <td id="LC3177" class="blob-code js-file-line">.controller(<span class="s1">'TimepickerController'</span>, [<span class="s1">'$scope'</span>, <span class="s1">'$attrs'</span>, <span class="s1">'$parse'</span>, <span class="s1">'$log'</span>, <span class="s1">'$locale'</span>, <span class="s1">'timepickerConfig'</span>, <span class="kt">function</span>(<span class="nv">$scope</span>, <span class="nv">$attrs</span>, <span class="nv">$parse</span>, <span class="nv">$log</span>, <span class="nv">$locale</span>, <span class="nv">timepickerConfig</span>) {</td>
      </tr>
      <tr>
        <td id="L3178" class="blob-num js-line-number" data-line-number="3178"></td>
        <td id="LC3178" class="blob-code js-file-line">  <span class="k">var</span> selected <span class="o">=</span> <span class="o">new</span> <span class="nc">Date</span>(),</td>
      </tr>
      <tr>
        <td id="L3179" class="blob-num js-line-number" data-line-number="3179"></td>
        <td id="LC3179" class="blob-code js-file-line">      ngModelCtrl <span class="o">=</span> { $setViewValue<span class="o">:</span> angular.noop }, <span class="c1">// nullModelCtrl</span></td>
      </tr>
      <tr>
        <td id="L3180" class="blob-num js-line-number" data-line-number="3180"></td>
        <td id="LC3180" class="blob-code js-file-line">      meridians <span class="o">=</span> angular.isDefined($attrs.meridians) <span class="o">?</span> $scope.$parent.$<span class="nf">eval</span>($attrs.meridians) <span class="o">:</span> timepickerConfig.meridians <span class="o">||</span> $locale.DATETIME_FORMATS.AMPMS;</td>
      </tr>
      <tr>
        <td id="L3181" class="blob-num js-line-number" data-line-number="3181"></td>
        <td id="LC3181" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3182" class="blob-num js-line-number" data-line-number="3182"></td>
        <td id="LC3182" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">init</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">ngModelCtrl_</span>, <span class="nv">inputs</span> ) {</td>
      </tr>
      <tr>
        <td id="L3183" class="blob-num js-line-number" data-line-number="3183"></td>
        <td id="LC3183" class="blob-code js-file-line">    ngModelCtrl <span class="o">=</span> ngModelCtrl_;</td>
      </tr>
      <tr>
        <td id="L3184" class="blob-num js-line-number" data-line-number="3184"></td>
        <td id="LC3184" class="blob-code js-file-line">    ngModelCtrl.$render <span class="o">=</span> <span class="nb">this</span>.render;</td>
      </tr>
      <tr>
        <td id="L3185" class="blob-num js-line-number" data-line-number="3185"></td>
        <td id="LC3185" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3186" class="blob-num js-line-number" data-line-number="3186"></td>
        <td id="LC3186" class="blob-code js-file-line">    <span class="k">var</span> hoursInputEl <span class="o">=</span> inputs.eq(<span class="m">0</span>),</td>
      </tr>
      <tr>
        <td id="L3187" class="blob-num js-line-number" data-line-number="3187"></td>
        <td id="LC3187" class="blob-code js-file-line">        minutesInputEl <span class="o">=</span> inputs.eq(<span class="m">1</span>);</td>
      </tr>
      <tr>
        <td id="L3188" class="blob-num js-line-number" data-line-number="3188"></td>
        <td id="LC3188" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3189" class="blob-num js-line-number" data-line-number="3189"></td>
        <td id="LC3189" class="blob-code js-file-line">    <span class="k">var</span> mousewheel <span class="o">=</span> angular.isDefined($attrs.mousewheel) <span class="o">?</span> $scope.$parent.$<span class="nf">eval</span>($attrs.mousewheel) <span class="o">:</span> timepickerConfig.mousewheel;</td>
      </tr>
      <tr>
        <td id="L3190" class="blob-num js-line-number" data-line-number="3190"></td>
        <td id="LC3190" class="blob-code js-file-line">    <span class="k">if</span> ( mousewheel ) {</td>
      </tr>
      <tr>
        <td id="L3191" class="blob-num js-line-number" data-line-number="3191"></td>
        <td id="LC3191" class="blob-code js-file-line">      <span class="nb">this</span>.setupMousewheelEvents( hoursInputEl, minutesInputEl );</td>
      </tr>
      <tr>
        <td id="L3192" class="blob-num js-line-number" data-line-number="3192"></td>
        <td id="LC3192" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L3193" class="blob-num js-line-number" data-line-number="3193"></td>
        <td id="LC3193" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3194" class="blob-num js-line-number" data-line-number="3194"></td>
        <td id="LC3194" class="blob-code js-file-line">    $scope.readonlyInput <span class="o">=</span> angular.isDefined($attrs.readonlyInput) <span class="o">?</span> $scope.$parent.$<span class="nf">eval</span>($attrs.readonlyInput) <span class="o">:</span> timepickerConfig.readonlyInput;</td>
      </tr>
      <tr>
        <td id="L3195" class="blob-num js-line-number" data-line-number="3195"></td>
        <td id="LC3195" class="blob-code js-file-line">    <span class="nb">this</span>.setupInputEvents( hoursInputEl, minutesInputEl );</td>
      </tr>
      <tr>
        <td id="L3196" class="blob-num js-line-number" data-line-number="3196"></td>
        <td id="LC3196" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L3197" class="blob-num js-line-number" data-line-number="3197"></td>
        <td id="LC3197" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3198" class="blob-num js-line-number" data-line-number="3198"></td>
        <td id="LC3198" class="blob-code js-file-line">  <span class="k">var</span> hourStep <span class="o">=</span> timepickerConfig.hourStep;</td>
      </tr>
      <tr>
        <td id="L3199" class="blob-num js-line-number" data-line-number="3199"></td>
        <td id="LC3199" class="blob-code js-file-line">  <span class="k">if</span> ($attrs.hourStep) {</td>
      </tr>
      <tr>
        <td id="L3200" class="blob-num js-line-number" data-line-number="3200"></td>
        <td id="LC3200" class="blob-code js-file-line">    $scope.$parent.$<span class="nf">watch</span>($<span class="nf">parse</span>($attrs.hourStep), <span class="kt">function</span>(<span class="nv">value</span>) {</td>
      </tr>
      <tr>
        <td id="L3201" class="blob-num js-line-number" data-line-number="3201"></td>
        <td id="LC3201" class="blob-code js-file-line">      hourStep <span class="o">=</span> <span class="nf">parseInt</span>(value, <span class="m">10</span>);</td>
      </tr>
      <tr>
        <td id="L3202" class="blob-num js-line-number" data-line-number="3202"></td>
        <td id="LC3202" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L3203" class="blob-num js-line-number" data-line-number="3203"></td>
        <td id="LC3203" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L3204" class="blob-num js-line-number" data-line-number="3204"></td>
        <td id="LC3204" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3205" class="blob-num js-line-number" data-line-number="3205"></td>
        <td id="LC3205" class="blob-code js-file-line">  <span class="k">var</span> minuteStep <span class="o">=</span> timepickerConfig.minuteStep;</td>
      </tr>
      <tr>
        <td id="L3206" class="blob-num js-line-number" data-line-number="3206"></td>
        <td id="LC3206" class="blob-code js-file-line">  <span class="k">if</span> ($attrs.minuteStep) {</td>
      </tr>
      <tr>
        <td id="L3207" class="blob-num js-line-number" data-line-number="3207"></td>
        <td id="LC3207" class="blob-code js-file-line">    $scope.$parent.$<span class="nf">watch</span>($<span class="nf">parse</span>($attrs.minuteStep), <span class="kt">function</span>(<span class="nv">value</span>) {</td>
      </tr>
      <tr>
        <td id="L3208" class="blob-num js-line-number" data-line-number="3208"></td>
        <td id="LC3208" class="blob-code js-file-line">      minuteStep <span class="o">=</span> <span class="nf">parseInt</span>(value, <span class="m">10</span>);</td>
      </tr>
      <tr>
        <td id="L3209" class="blob-num js-line-number" data-line-number="3209"></td>
        <td id="LC3209" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L3210" class="blob-num js-line-number" data-line-number="3210"></td>
        <td id="LC3210" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L3211" class="blob-num js-line-number" data-line-number="3211"></td>
        <td id="LC3211" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3212" class="blob-num js-line-number" data-line-number="3212"></td>
        <td id="LC3212" class="blob-code js-file-line">  <span class="c1">// 12H / 24H mode</span></td>
      </tr>
      <tr>
        <td id="L3213" class="blob-num js-line-number" data-line-number="3213"></td>
        <td id="LC3213" class="blob-code js-file-line">  $scope.showMeridian <span class="o">=</span> timepickerConfig.showMeridian;</td>
      </tr>
      <tr>
        <td id="L3214" class="blob-num js-line-number" data-line-number="3214"></td>
        <td id="LC3214" class="blob-code js-file-line">  <span class="k">if</span> ($attrs.showMeridian) {</td>
      </tr>
      <tr>
        <td id="L3215" class="blob-num js-line-number" data-line-number="3215"></td>
        <td id="LC3215" class="blob-code js-file-line">    $scope.$parent.$<span class="nf">watch</span>($<span class="nf">parse</span>($attrs.showMeridian), <span class="kt">function</span>(<span class="nv">value</span>) {</td>
      </tr>
      <tr>
        <td id="L3216" class="blob-num js-line-number" data-line-number="3216"></td>
        <td id="LC3216" class="blob-code js-file-line">      $scope.showMeridian <span class="o">=</span> <span class="o">!!</span>value;</td>
      </tr>
      <tr>
        <td id="L3217" class="blob-num js-line-number" data-line-number="3217"></td>
        <td id="LC3217" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3218" class="blob-num js-line-number" data-line-number="3218"></td>
        <td id="LC3218" class="blob-code js-file-line">      <span class="k">if</span> ( ngModelCtrl.$error<span class="nf">.time</span> ) {</td>
      </tr>
      <tr>
        <td id="L3219" class="blob-num js-line-number" data-line-number="3219"></td>
        <td id="LC3219" class="blob-code js-file-line">        <span class="c1">// Evaluate from template</span></td>
      </tr>
      <tr>
        <td id="L3220" class="blob-num js-line-number" data-line-number="3220"></td>
        <td id="LC3220" class="blob-code js-file-line">        <span class="k">var</span> hours <span class="o">=</span> getHoursFromTemplate(), minutes <span class="o">=</span> getMinutesFromTemplate();</td>
      </tr>
      <tr>
        <td id="L3221" class="blob-num js-line-number" data-line-number="3221"></td>
        <td id="LC3221" class="blob-code js-file-line">        <span class="k">if</span> (angular.isDefined( hours ) <span class="o">&amp;&amp;</span> angular.isDefined( minutes )) {</td>
      </tr>
      <tr>
        <td id="L3222" class="blob-num js-line-number" data-line-number="3222"></td>
        <td id="LC3222" class="blob-code js-file-line">          selected.<span class="nf">setHours</span>( hours );</td>
      </tr>
      <tr>
        <td id="L3223" class="blob-num js-line-number" data-line-number="3223"></td>
        <td id="LC3223" class="blob-code js-file-line">          refresh();</td>
      </tr>
      <tr>
        <td id="L3224" class="blob-num js-line-number" data-line-number="3224"></td>
        <td id="LC3224" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L3225" class="blob-num js-line-number" data-line-number="3225"></td>
        <td id="LC3225" class="blob-code js-file-line">      } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L3226" class="blob-num js-line-number" data-line-number="3226"></td>
        <td id="LC3226" class="blob-code js-file-line">        updateTemplate();</td>
      </tr>
      <tr>
        <td id="L3227" class="blob-num js-line-number" data-line-number="3227"></td>
        <td id="LC3227" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L3228" class="blob-num js-line-number" data-line-number="3228"></td>
        <td id="LC3228" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L3229" class="blob-num js-line-number" data-line-number="3229"></td>
        <td id="LC3229" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L3230" class="blob-num js-line-number" data-line-number="3230"></td>
        <td id="LC3230" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3231" class="blob-num js-line-number" data-line-number="3231"></td>
        <td id="LC3231" class="blob-code js-file-line">  <span class="c1">// Get $scope.hours in 24H mode if valid</span></td>
      </tr>
      <tr>
        <td id="L3232" class="blob-num js-line-number" data-line-number="3232"></td>
        <td id="LC3232" class="blob-code js-file-line">  <span class="kt">function</span> <span class="nf">getHoursFromTemplate</span> ( ) {</td>
      </tr>
      <tr>
        <td id="L3233" class="blob-num js-line-number" data-line-number="3233"></td>
        <td id="LC3233" class="blob-code js-file-line">    <span class="k">var</span> hours <span class="o">=</span> <span class="nf">parseInt</span>( $scope.hours, <span class="m">10</span> );</td>
      </tr>
      <tr>
        <td id="L3234" class="blob-num js-line-number" data-line-number="3234"></td>
        <td id="LC3234" class="blob-code js-file-line">    <span class="k">var</span> valid <span class="o">=</span> ( $scope.showMeridian ) <span class="o">?</span> (hours <span class="o">&gt;</span> <span class="m">0</span> <span class="o">&amp;&amp;</span> hours <span class="o">&lt;</span> <span class="m">13</span>) <span class="o">:</span> (hours <span class="o">&gt;=</span> <span class="m">0</span> <span class="o">&amp;&amp;</span> hours <span class="o">&lt;</span> <span class="m">24</span>);</td>
      </tr>
      <tr>
        <td id="L3235" class="blob-num js-line-number" data-line-number="3235"></td>
        <td id="LC3235" class="blob-code js-file-line">    <span class="k">if</span> ( <span class="o">!</span>valid ) {</td>
      </tr>
      <tr>
        <td id="L3236" class="blob-num js-line-number" data-line-number="3236"></td>
        <td id="LC3236" class="blob-code js-file-line">      <span class="k">return</span> <span class="kc">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L3237" class="blob-num js-line-number" data-line-number="3237"></td>
        <td id="LC3237" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L3238" class="blob-num js-line-number" data-line-number="3238"></td>
        <td id="LC3238" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3239" class="blob-num js-line-number" data-line-number="3239"></td>
        <td id="LC3239" class="blob-code js-file-line">    <span class="k">if</span> ( $scope.showMeridian ) {</td>
      </tr>
      <tr>
        <td id="L3240" class="blob-num js-line-number" data-line-number="3240"></td>
        <td id="LC3240" class="blob-code js-file-line">      <span class="k">if</span> ( hours <span class="o">===</span> <span class="m">12</span> ) {</td>
      </tr>
      <tr>
        <td id="L3241" class="blob-num js-line-number" data-line-number="3241"></td>
        <td id="LC3241" class="blob-code js-file-line">        hours <span class="o">=</span> <span class="m">0</span>;</td>
      </tr>
      <tr>
        <td id="L3242" class="blob-num js-line-number" data-line-number="3242"></td>
        <td id="LC3242" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L3243" class="blob-num js-line-number" data-line-number="3243"></td>
        <td id="LC3243" class="blob-code js-file-line">      <span class="k">if</span> ( $scope.meridian <span class="o">===</span> meridians[<span class="m">1</span>] ) {</td>
      </tr>
      <tr>
        <td id="L3244" class="blob-num js-line-number" data-line-number="3244"></td>
        <td id="LC3244" class="blob-code js-file-line">        hours <span class="o">=</span> hours <span class="o">+</span> <span class="m">12</span>;</td>
      </tr>
      <tr>
        <td id="L3245" class="blob-num js-line-number" data-line-number="3245"></td>
        <td id="LC3245" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L3246" class="blob-num js-line-number" data-line-number="3246"></td>
        <td id="LC3246" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L3247" class="blob-num js-line-number" data-line-number="3247"></td>
        <td id="LC3247" class="blob-code js-file-line">    <span class="k">return</span> hours;</td>
      </tr>
      <tr>
        <td id="L3248" class="blob-num js-line-number" data-line-number="3248"></td>
        <td id="LC3248" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L3249" class="blob-num js-line-number" data-line-number="3249"></td>
        <td id="LC3249" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3250" class="blob-num js-line-number" data-line-number="3250"></td>
        <td id="LC3250" class="blob-code js-file-line">  <span class="kt">function</span> <span class="nf">getMinutesFromTemplate</span>() {</td>
      </tr>
      <tr>
        <td id="L3251" class="blob-num js-line-number" data-line-number="3251"></td>
        <td id="LC3251" class="blob-code js-file-line">    <span class="k">var</span> minutes <span class="o">=</span> <span class="nf">parseInt</span>($scope.minutes, <span class="m">10</span>);</td>
      </tr>
      <tr>
        <td id="L3252" class="blob-num js-line-number" data-line-number="3252"></td>
        <td id="LC3252" class="blob-code js-file-line">    <span class="k">return</span> ( minutes <span class="o">&gt;=</span> <span class="m">0</span> <span class="o">&amp;&amp;</span> minutes <span class="o">&lt;</span> <span class="m">60</span> ) <span class="o">?</span> minutes <span class="o">:</span> <span class="kc">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L3253" class="blob-num js-line-number" data-line-number="3253"></td>
        <td id="LC3253" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L3254" class="blob-num js-line-number" data-line-number="3254"></td>
        <td id="LC3254" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3255" class="blob-num js-line-number" data-line-number="3255"></td>
        <td id="LC3255" class="blob-code js-file-line">  <span class="kt">function</span> <span class="nf">pad</span>( <span class="nv">value</span> ) {</td>
      </tr>
      <tr>
        <td id="L3256" class="blob-num js-line-number" data-line-number="3256"></td>
        <td id="LC3256" class="blob-code js-file-line">    <span class="k">return</span> ( angular.isDefined(value) <span class="o">&amp;&amp;</span> value.<span class="nf">toString</span>().<span class="no">length</span> <span class="o">&lt;</span> <span class="m">2</span> ) <span class="o">?</span> <span class="s1">'0'</span> <span class="o">+</span> value <span class="o">:</span> value;</td>
      </tr>
      <tr>
        <td id="L3257" class="blob-num js-line-number" data-line-number="3257"></td>
        <td id="LC3257" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L3258" class="blob-num js-line-number" data-line-number="3258"></td>
        <td id="LC3258" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3259" class="blob-num js-line-number" data-line-number="3259"></td>
        <td id="LC3259" class="blob-code js-file-line">  <span class="c1">// Respond on mousewheel spin</span></td>
      </tr>
      <tr>
        <td id="L3260" class="blob-num js-line-number" data-line-number="3260"></td>
        <td id="LC3260" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">setupMousewheelEvents</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">hoursInputEl</span>, <span class="nv">minutesInputEl</span> ) {</td>
      </tr>
      <tr>
        <td id="L3261" class="blob-num js-line-number" data-line-number="3261"></td>
        <td id="LC3261" class="blob-code js-file-line">    <span class="k">var</span> <span class="nf">isScrollingUp</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">e</span>) {</td>
      </tr>
      <tr>
        <td id="L3262" class="blob-num js-line-number" data-line-number="3262"></td>
        <td id="LC3262" class="blob-code js-file-line">      <span class="k">if</span> (e.originalEvent) {</td>
      </tr>
      <tr>
        <td id="L3263" class="blob-num js-line-number" data-line-number="3263"></td>
        <td id="LC3263" class="blob-code js-file-line">        e <span class="o">=</span> e.originalEvent;</td>
      </tr>
      <tr>
        <td id="L3264" class="blob-num js-line-number" data-line-number="3264"></td>
        <td id="LC3264" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L3265" class="blob-num js-line-number" data-line-number="3265"></td>
        <td id="LC3265" class="blob-code js-file-line">      <span class="c1">//pick correct delta variable depending on event</span></td>
      </tr>
      <tr>
        <td id="L3266" class="blob-num js-line-number" data-line-number="3266"></td>
        <td id="LC3266" class="blob-code js-file-line">      <span class="k">var</span> delta <span class="o">=</span> (e.wheelDelta) <span class="o">?</span> e.wheelDelta <span class="o">:</span> <span class="o">-</span>e.deltaY;</td>
      </tr>
      <tr>
        <td id="L3267" class="blob-num js-line-number" data-line-number="3267"></td>
        <td id="LC3267" class="blob-code js-file-line">      <span class="k">return</span> (e.detail <span class="o">||</span> delta <span class="o">&gt;</span> <span class="m">0</span>);</td>
      </tr>
      <tr>
        <td id="L3268" class="blob-num js-line-number" data-line-number="3268"></td>
        <td id="LC3268" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L3269" class="blob-num js-line-number" data-line-number="3269"></td>
        <td id="LC3269" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3270" class="blob-num js-line-number" data-line-number="3270"></td>
        <td id="LC3270" class="blob-code js-file-line">    hoursInputEl.bind(<span class="s1">'mousewheel wheel'</span>, <span class="kt">function</span>(<span class="nv">e</span>) {</td>
      </tr>
      <tr>
        <td id="L3271" class="blob-num js-line-number" data-line-number="3271"></td>
        <td id="LC3271" class="blob-code js-file-line">      $scope.$<span class="nf">apply</span>( (isScrollingUp(e)) <span class="o">?</span> $scope.incrementHours() <span class="o">:</span> $scope.decrementHours() );</td>
      </tr>
      <tr>
        <td id="L3272" class="blob-num js-line-number" data-line-number="3272"></td>
        <td id="LC3272" class="blob-code js-file-line">      e.preventDefault();</td>
      </tr>
      <tr>
        <td id="L3273" class="blob-num js-line-number" data-line-number="3273"></td>
        <td id="LC3273" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L3274" class="blob-num js-line-number" data-line-number="3274"></td>
        <td id="LC3274" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3275" class="blob-num js-line-number" data-line-number="3275"></td>
        <td id="LC3275" class="blob-code js-file-line">    minutesInputEl.bind(<span class="s1">'mousewheel wheel'</span>, <span class="kt">function</span>(<span class="nv">e</span>) {</td>
      </tr>
      <tr>
        <td id="L3276" class="blob-num js-line-number" data-line-number="3276"></td>
        <td id="LC3276" class="blob-code js-file-line">      $scope.$<span class="nf">apply</span>( (isScrollingUp(e)) <span class="o">?</span> $scope.incrementMinutes() <span class="o">:</span> $scope.decrementMinutes() );</td>
      </tr>
      <tr>
        <td id="L3277" class="blob-num js-line-number" data-line-number="3277"></td>
        <td id="LC3277" class="blob-code js-file-line">      e.preventDefault();</td>
      </tr>
      <tr>
        <td id="L3278" class="blob-num js-line-number" data-line-number="3278"></td>
        <td id="LC3278" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L3279" class="blob-num js-line-number" data-line-number="3279"></td>
        <td id="LC3279" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3280" class="blob-num js-line-number" data-line-number="3280"></td>
        <td id="LC3280" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L3281" class="blob-num js-line-number" data-line-number="3281"></td>
        <td id="LC3281" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3282" class="blob-num js-line-number" data-line-number="3282"></td>
        <td id="LC3282" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">setupInputEvents</span> <span class="o">=</span> <span class="kt">function</span>( <span class="nv">hoursInputEl</span>, <span class="nv">minutesInputEl</span> ) {</td>
      </tr>
      <tr>
        <td id="L3283" class="blob-num js-line-number" data-line-number="3283"></td>
        <td id="LC3283" class="blob-code js-file-line">    <span class="k">if</span> ( $scope.readonlyInput ) {</td>
      </tr>
      <tr>
        <td id="L3284" class="blob-num js-line-number" data-line-number="3284"></td>
        <td id="LC3284" class="blob-code js-file-line">      $scope.updateHours <span class="o">=</span> angular.noop;</td>
      </tr>
      <tr>
        <td id="L3285" class="blob-num js-line-number" data-line-number="3285"></td>
        <td id="LC3285" class="blob-code js-file-line">      $scope.updateMinutes <span class="o">=</span> angular.noop;</td>
      </tr>
      <tr>
        <td id="L3286" class="blob-num js-line-number" data-line-number="3286"></td>
        <td id="LC3286" class="blob-code js-file-line">      <span class="k">return</span>;</td>
      </tr>
      <tr>
        <td id="L3287" class="blob-num js-line-number" data-line-number="3287"></td>
        <td id="LC3287" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L3288" class="blob-num js-line-number" data-line-number="3288"></td>
        <td id="LC3288" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3289" class="blob-num js-line-number" data-line-number="3289"></td>
        <td id="LC3289" class="blob-code js-file-line">    <span class="k">var</span> <span class="nf">invalidate</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">invalidHours</span>, <span class="nv">invalidMinutes</span>) {</td>
      </tr>
      <tr>
        <td id="L3290" class="blob-num js-line-number" data-line-number="3290"></td>
        <td id="LC3290" class="blob-code js-file-line">      ngModelCtrl.$setViewValue( <span class="kc">null</span> );</td>
      </tr>
      <tr>
        <td id="L3291" class="blob-num js-line-number" data-line-number="3291"></td>
        <td id="LC3291" class="blob-code js-file-line">      ngModelCtrl.$setValidity(<span class="s1">'time'</span>, <span class="kc">false</span>);</td>
      </tr>
      <tr>
        <td id="L3292" class="blob-num js-line-number" data-line-number="3292"></td>
        <td id="LC3292" class="blob-code js-file-line">      <span class="k">if</span> (angular.isDefined(invalidHours)) {</td>
      </tr>
      <tr>
        <td id="L3293" class="blob-num js-line-number" data-line-number="3293"></td>
        <td id="LC3293" class="blob-code js-file-line">        $scope.invalidHours <span class="o">=</span> invalidHours;</td>
      </tr>
      <tr>
        <td id="L3294" class="blob-num js-line-number" data-line-number="3294"></td>
        <td id="LC3294" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L3295" class="blob-num js-line-number" data-line-number="3295"></td>
        <td id="LC3295" class="blob-code js-file-line">      <span class="k">if</span> (angular.isDefined(invalidMinutes)) {</td>
      </tr>
      <tr>
        <td id="L3296" class="blob-num js-line-number" data-line-number="3296"></td>
        <td id="LC3296" class="blob-code js-file-line">        $scope.invalidMinutes <span class="o">=</span> invalidMinutes;</td>
      </tr>
      <tr>
        <td id="L3297" class="blob-num js-line-number" data-line-number="3297"></td>
        <td id="LC3297" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L3298" class="blob-num js-line-number" data-line-number="3298"></td>
        <td id="LC3298" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L3299" class="blob-num js-line-number" data-line-number="3299"></td>
        <td id="LC3299" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3300" class="blob-num js-line-number" data-line-number="3300"></td>
        <td id="LC3300" class="blob-code js-file-line">    <span class="no">$scope</span>.<span class="nf">updateHours</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3301" class="blob-num js-line-number" data-line-number="3301"></td>
        <td id="LC3301" class="blob-code js-file-line">      <span class="k">var</span> hours <span class="o">=</span> getHoursFromTemplate();</td>
      </tr>
      <tr>
        <td id="L3302" class="blob-num js-line-number" data-line-number="3302"></td>
        <td id="LC3302" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3303" class="blob-num js-line-number" data-line-number="3303"></td>
        <td id="LC3303" class="blob-code js-file-line">      <span class="k">if</span> ( angular.isDefined(hours) ) {</td>
      </tr>
      <tr>
        <td id="L3304" class="blob-num js-line-number" data-line-number="3304"></td>
        <td id="LC3304" class="blob-code js-file-line">        selected.<span class="nf">setHours</span>( hours );</td>
      </tr>
      <tr>
        <td id="L3305" class="blob-num js-line-number" data-line-number="3305"></td>
        <td id="LC3305" class="blob-code js-file-line">        refresh( <span class="s1">'h'</span> );</td>
      </tr>
      <tr>
        <td id="L3306" class="blob-num js-line-number" data-line-number="3306"></td>
        <td id="LC3306" class="blob-code js-file-line">      } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L3307" class="blob-num js-line-number" data-line-number="3307"></td>
        <td id="LC3307" class="blob-code js-file-line">        invalidate(<span class="kc">true</span>);</td>
      </tr>
      <tr>
        <td id="L3308" class="blob-num js-line-number" data-line-number="3308"></td>
        <td id="LC3308" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L3309" class="blob-num js-line-number" data-line-number="3309"></td>
        <td id="LC3309" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L3310" class="blob-num js-line-number" data-line-number="3310"></td>
        <td id="LC3310" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3311" class="blob-num js-line-number" data-line-number="3311"></td>
        <td id="LC3311" class="blob-code js-file-line">    hoursInputEl.bind(<span class="s1">'blur'</span>, <span class="kt">function</span>(<span class="nv">e</span>) {</td>
      </tr>
      <tr>
        <td id="L3312" class="blob-num js-line-number" data-line-number="3312"></td>
        <td id="LC3312" class="blob-code js-file-line">      <span class="k">if</span> ( <span class="o">!</span>$scope.invalidHours <span class="o">&amp;&amp;</span> $scope.hours <span class="o">&lt;</span> <span class="m">10</span>) {</td>
      </tr>
      <tr>
        <td id="L3313" class="blob-num js-line-number" data-line-number="3313"></td>
        <td id="LC3313" class="blob-code js-file-line">        $scope.$<span class="nf">apply</span>( <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3314" class="blob-num js-line-number" data-line-number="3314"></td>
        <td id="LC3314" class="blob-code js-file-line">          $scope.hours <span class="o">=</span> pad( $scope.hours );</td>
      </tr>
      <tr>
        <td id="L3315" class="blob-num js-line-number" data-line-number="3315"></td>
        <td id="LC3315" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L3316" class="blob-num js-line-number" data-line-number="3316"></td>
        <td id="LC3316" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L3317" class="blob-num js-line-number" data-line-number="3317"></td>
        <td id="LC3317" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L3318" class="blob-num js-line-number" data-line-number="3318"></td>
        <td id="LC3318" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3319" class="blob-num js-line-number" data-line-number="3319"></td>
        <td id="LC3319" class="blob-code js-file-line">    <span class="no">$scope</span>.<span class="nf">updateMinutes</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3320" class="blob-num js-line-number" data-line-number="3320"></td>
        <td id="LC3320" class="blob-code js-file-line">      <span class="k">var</span> minutes <span class="o">=</span> getMinutesFromTemplate();</td>
      </tr>
      <tr>
        <td id="L3321" class="blob-num js-line-number" data-line-number="3321"></td>
        <td id="LC3321" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3322" class="blob-num js-line-number" data-line-number="3322"></td>
        <td id="LC3322" class="blob-code js-file-line">      <span class="k">if</span> ( angular.isDefined(minutes) ) {</td>
      </tr>
      <tr>
        <td id="L3323" class="blob-num js-line-number" data-line-number="3323"></td>
        <td id="LC3323" class="blob-code js-file-line">        selected.<span class="nf">setMinutes</span>( minutes );</td>
      </tr>
      <tr>
        <td id="L3324" class="blob-num js-line-number" data-line-number="3324"></td>
        <td id="LC3324" class="blob-code js-file-line">        refresh( <span class="s1">'m'</span> );</td>
      </tr>
      <tr>
        <td id="L3325" class="blob-num js-line-number" data-line-number="3325"></td>
        <td id="LC3325" class="blob-code js-file-line">      } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L3326" class="blob-num js-line-number" data-line-number="3326"></td>
        <td id="LC3326" class="blob-code js-file-line">        invalidate(<span class="kc">undefined</span>, <span class="kc">true</span>);</td>
      </tr>
      <tr>
        <td id="L3327" class="blob-num js-line-number" data-line-number="3327"></td>
        <td id="LC3327" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L3328" class="blob-num js-line-number" data-line-number="3328"></td>
        <td id="LC3328" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L3329" class="blob-num js-line-number" data-line-number="3329"></td>
        <td id="LC3329" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3330" class="blob-num js-line-number" data-line-number="3330"></td>
        <td id="LC3330" class="blob-code js-file-line">    minutesInputEl.bind(<span class="s1">'blur'</span>, <span class="kt">function</span>(<span class="nv">e</span>) {</td>
      </tr>
      <tr>
        <td id="L3331" class="blob-num js-line-number" data-line-number="3331"></td>
        <td id="LC3331" class="blob-code js-file-line">      <span class="k">if</span> ( <span class="o">!</span>$scope.invalidMinutes <span class="o">&amp;&amp;</span> $scope.minutes <span class="o">&lt;</span> <span class="m">10</span> ) {</td>
      </tr>
      <tr>
        <td id="L3332" class="blob-num js-line-number" data-line-number="3332"></td>
        <td id="LC3332" class="blob-code js-file-line">        $scope.$<span class="nf">apply</span>( <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3333" class="blob-num js-line-number" data-line-number="3333"></td>
        <td id="LC3333" class="blob-code js-file-line">          $scope.minutes <span class="o">=</span> pad( $scope.minutes );</td>
      </tr>
      <tr>
        <td id="L3334" class="blob-num js-line-number" data-line-number="3334"></td>
        <td id="LC3334" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L3335" class="blob-num js-line-number" data-line-number="3335"></td>
        <td id="LC3335" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L3336" class="blob-num js-line-number" data-line-number="3336"></td>
        <td id="LC3336" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L3337" class="blob-num js-line-number" data-line-number="3337"></td>
        <td id="LC3337" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3338" class="blob-num js-line-number" data-line-number="3338"></td>
        <td id="LC3338" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L3339" class="blob-num js-line-number" data-line-number="3339"></td>
        <td id="LC3339" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3340" class="blob-num js-line-number" data-line-number="3340"></td>
        <td id="LC3340" class="blob-code js-file-line">  <span class="no">this</span>.<span class="nf">render</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3341" class="blob-num js-line-number" data-line-number="3341"></td>
        <td id="LC3341" class="blob-code js-file-line">    <span class="k">var</span> date <span class="o">=</span> ngModelCtrl.$modelValue <span class="o">?</span> <span class="o">new</span> <span class="nc">Date</span>( ngModelCtrl.$modelValue ) <span class="o">:</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L3342" class="blob-num js-line-number" data-line-number="3342"></td>
        <td id="LC3342" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3343" class="blob-num js-line-number" data-line-number="3343"></td>
        <td id="LC3343" class="blob-code js-file-line">    <span class="k">if</span> ( <span class="nf">isNaN</span>(date) ) {</td>
      </tr>
      <tr>
        <td id="L3344" class="blob-num js-line-number" data-line-number="3344"></td>
        <td id="LC3344" class="blob-code js-file-line">      ngModelCtrl.$setValidity(<span class="s1">'time'</span>, <span class="kc">false</span>);</td>
      </tr>
      <tr>
        <td id="L3345" class="blob-num js-line-number" data-line-number="3345"></td>
        <td id="LC3345" class="blob-code js-file-line">      $log<span class="nf">.error</span>(<span class="s1">'Timepicker directive: &quot;ng-model&quot; value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'</span>);</td>
      </tr>
      <tr>
        <td id="L3346" class="blob-num js-line-number" data-line-number="3346"></td>
        <td id="LC3346" class="blob-code js-file-line">    } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L3347" class="blob-num js-line-number" data-line-number="3347"></td>
        <td id="LC3347" class="blob-code js-file-line">      <span class="k">if</span> ( date ) {</td>
      </tr>
      <tr>
        <td id="L3348" class="blob-num js-line-number" data-line-number="3348"></td>
        <td id="LC3348" class="blob-code js-file-line">        selected <span class="o">=</span> date;</td>
      </tr>
      <tr>
        <td id="L3349" class="blob-num js-line-number" data-line-number="3349"></td>
        <td id="LC3349" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L3350" class="blob-num js-line-number" data-line-number="3350"></td>
        <td id="LC3350" class="blob-code js-file-line">      makeValid();</td>
      </tr>
      <tr>
        <td id="L3351" class="blob-num js-line-number" data-line-number="3351"></td>
        <td id="LC3351" class="blob-code js-file-line">      updateTemplate();</td>
      </tr>
      <tr>
        <td id="L3352" class="blob-num js-line-number" data-line-number="3352"></td>
        <td id="LC3352" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L3353" class="blob-num js-line-number" data-line-number="3353"></td>
        <td id="LC3353" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L3354" class="blob-num js-line-number" data-line-number="3354"></td>
        <td id="LC3354" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3355" class="blob-num js-line-number" data-line-number="3355"></td>
        <td id="LC3355" class="blob-code js-file-line">  <span class="c1">// Call internally when we know that model is valid.</span></td>
      </tr>
      <tr>
        <td id="L3356" class="blob-num js-line-number" data-line-number="3356"></td>
        <td id="LC3356" class="blob-code js-file-line">  <span class="kt">function</span> <span class="nf">refresh</span>( <span class="nv">keyboardChange</span> ) {</td>
      </tr>
      <tr>
        <td id="L3357" class="blob-num js-line-number" data-line-number="3357"></td>
        <td id="LC3357" class="blob-code js-file-line">    makeValid();</td>
      </tr>
      <tr>
        <td id="L3358" class="blob-num js-line-number" data-line-number="3358"></td>
        <td id="LC3358" class="blob-code js-file-line">    ngModelCtrl.$setViewValue( <span class="o">new</span> <span class="nc">Date</span>(selected) );</td>
      </tr>
      <tr>
        <td id="L3359" class="blob-num js-line-number" data-line-number="3359"></td>
        <td id="LC3359" class="blob-code js-file-line">    updateTemplate( keyboardChange );</td>
      </tr>
      <tr>
        <td id="L3360" class="blob-num js-line-number" data-line-number="3360"></td>
        <td id="LC3360" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L3361" class="blob-num js-line-number" data-line-number="3361"></td>
        <td id="LC3361" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3362" class="blob-num js-line-number" data-line-number="3362"></td>
        <td id="LC3362" class="blob-code js-file-line">  <span class="kt">function</span> <span class="nf">makeValid</span>() {</td>
      </tr>
      <tr>
        <td id="L3363" class="blob-num js-line-number" data-line-number="3363"></td>
        <td id="LC3363" class="blob-code js-file-line">    ngModelCtrl.$setValidity(<span class="s1">'time'</span>, <span class="kc">true</span>);</td>
      </tr>
      <tr>
        <td id="L3364" class="blob-num js-line-number" data-line-number="3364"></td>
        <td id="LC3364" class="blob-code js-file-line">    $scope.invalidHours <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L3365" class="blob-num js-line-number" data-line-number="3365"></td>
        <td id="LC3365" class="blob-code js-file-line">    $scope.invalidMinutes <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L3366" class="blob-num js-line-number" data-line-number="3366"></td>
        <td id="LC3366" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L3367" class="blob-num js-line-number" data-line-number="3367"></td>
        <td id="LC3367" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3368" class="blob-num js-line-number" data-line-number="3368"></td>
        <td id="LC3368" class="blob-code js-file-line">  <span class="kt">function</span> <span class="nf">updateTemplate</span>( <span class="nv">keyboardChange</span> ) {</td>
      </tr>
      <tr>
        <td id="L3369" class="blob-num js-line-number" data-line-number="3369"></td>
        <td id="LC3369" class="blob-code js-file-line">    <span class="k">var</span> hours <span class="o">=</span> selected.<span class="nf">getHours</span>(), minutes <span class="o">=</span> selected.<span class="nf">getMinutes</span>();</td>
      </tr>
      <tr>
        <td id="L3370" class="blob-num js-line-number" data-line-number="3370"></td>
        <td id="LC3370" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3371" class="blob-num js-line-number" data-line-number="3371"></td>
        <td id="LC3371" class="blob-code js-file-line">    <span class="k">if</span> ( $scope.showMeridian ) {</td>
      </tr>
      <tr>
        <td id="L3372" class="blob-num js-line-number" data-line-number="3372"></td>
        <td id="LC3372" class="blob-code js-file-line">      hours <span class="o">=</span> ( hours <span class="o">===</span> <span class="m">0</span> <span class="o">||</span> hours <span class="o">===</span> <span class="m">12</span> ) <span class="o">?</span> <span class="m">12</span> <span class="o">:</span> hours <span class="o">%</span> <span class="m">12</span>; <span class="c1">// Convert 24 to 12 hour system</span></td>
      </tr>
      <tr>
        <td id="L3373" class="blob-num js-line-number" data-line-number="3373"></td>
        <td id="LC3373" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L3374" class="blob-num js-line-number" data-line-number="3374"></td>
        <td id="LC3374" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3375" class="blob-num js-line-number" data-line-number="3375"></td>
        <td id="LC3375" class="blob-code js-file-line">    $scope.hours <span class="o">=</span> keyboardChange <span class="o">===</span> <span class="s1">'h'</span> <span class="o">?</span> hours <span class="o">:</span> pad(hours);</td>
      </tr>
      <tr>
        <td id="L3376" class="blob-num js-line-number" data-line-number="3376"></td>
        <td id="LC3376" class="blob-code js-file-line">    $scope.minutes <span class="o">=</span> keyboardChange <span class="o">===</span> <span class="s1">'m'</span> <span class="o">?</span> minutes <span class="o">:</span> pad(minutes);</td>
      </tr>
      <tr>
        <td id="L3377" class="blob-num js-line-number" data-line-number="3377"></td>
        <td id="LC3377" class="blob-code js-file-line">    $scope.meridian <span class="o">=</span> selected.<span class="nf">getHours</span>() <span class="o">&lt;</span> <span class="m">12</span> <span class="o">?</span> meridians[<span class="m">0</span>] <span class="o">:</span> meridians[<span class="m">1</span>];</td>
      </tr>
      <tr>
        <td id="L3378" class="blob-num js-line-number" data-line-number="3378"></td>
        <td id="LC3378" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L3379" class="blob-num js-line-number" data-line-number="3379"></td>
        <td id="LC3379" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3380" class="blob-num js-line-number" data-line-number="3380"></td>
        <td id="LC3380" class="blob-code js-file-line">  <span class="kt">function</span> <span class="nf">addMinutes</span>( <span class="nv">minutes</span> ) {</td>
      </tr>
      <tr>
        <td id="L3381" class="blob-num js-line-number" data-line-number="3381"></td>
        <td id="LC3381" class="blob-code js-file-line">    <span class="k">var</span> dt <span class="o">=</span> <span class="o">new</span> <span class="nc">Date</span>( selected.<span class="nf">getTime</span>() <span class="o">+</span> minutes <span class="o">*</span> <span class="m">60000</span> );</td>
      </tr>
      <tr>
        <td id="L3382" class="blob-num js-line-number" data-line-number="3382"></td>
        <td id="LC3382" class="blob-code js-file-line">    selected.<span class="nf">setHours</span>( dt.<span class="nf">getHours</span>(), dt.<span class="nf">getMinutes</span>() );</td>
      </tr>
      <tr>
        <td id="L3383" class="blob-num js-line-number" data-line-number="3383"></td>
        <td id="LC3383" class="blob-code js-file-line">    refresh();</td>
      </tr>
      <tr>
        <td id="L3384" class="blob-num js-line-number" data-line-number="3384"></td>
        <td id="LC3384" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L3385" class="blob-num js-line-number" data-line-number="3385"></td>
        <td id="LC3385" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3386" class="blob-num js-line-number" data-line-number="3386"></td>
        <td id="LC3386" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">incrementHours</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3387" class="blob-num js-line-number" data-line-number="3387"></td>
        <td id="LC3387" class="blob-code js-file-line">    addMinutes( hourStep <span class="o">*</span> <span class="m">60</span> );</td>
      </tr>
      <tr>
        <td id="L3388" class="blob-num js-line-number" data-line-number="3388"></td>
        <td id="LC3388" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L3389" class="blob-num js-line-number" data-line-number="3389"></td>
        <td id="LC3389" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">decrementHours</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3390" class="blob-num js-line-number" data-line-number="3390"></td>
        <td id="LC3390" class="blob-code js-file-line">    addMinutes( <span class="o">-</span> hourStep <span class="o">*</span> <span class="m">60</span> );</td>
      </tr>
      <tr>
        <td id="L3391" class="blob-num js-line-number" data-line-number="3391"></td>
        <td id="LC3391" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L3392" class="blob-num js-line-number" data-line-number="3392"></td>
        <td id="LC3392" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">incrementMinutes</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3393" class="blob-num js-line-number" data-line-number="3393"></td>
        <td id="LC3393" class="blob-code js-file-line">    addMinutes( minuteStep );</td>
      </tr>
      <tr>
        <td id="L3394" class="blob-num js-line-number" data-line-number="3394"></td>
        <td id="LC3394" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L3395" class="blob-num js-line-number" data-line-number="3395"></td>
        <td id="LC3395" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">decrementMinutes</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3396" class="blob-num js-line-number" data-line-number="3396"></td>
        <td id="LC3396" class="blob-code js-file-line">    addMinutes( <span class="o">-</span> minuteStep );</td>
      </tr>
      <tr>
        <td id="L3397" class="blob-num js-line-number" data-line-number="3397"></td>
        <td id="LC3397" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L3398" class="blob-num js-line-number" data-line-number="3398"></td>
        <td id="LC3398" class="blob-code js-file-line">  <span class="no">$scope</span>.<span class="nf">toggleMeridian</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3399" class="blob-num js-line-number" data-line-number="3399"></td>
        <td id="LC3399" class="blob-code js-file-line">    addMinutes( <span class="m">12</span> <span class="o">*</span> <span class="m">60</span> <span class="o">*</span> (( selected.<span class="nf">getHours</span>() <span class="o">&lt;</span> <span class="m">12</span> ) <span class="o">?</span> <span class="m">1</span> <span class="o">:</span> <span class="o">-</span><span class="m">1</span>) );</td>
      </tr>
      <tr>
        <td id="L3400" class="blob-num js-line-number" data-line-number="3400"></td>
        <td id="LC3400" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L3401" class="blob-num js-line-number" data-line-number="3401"></td>
        <td id="LC3401" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L3402" class="blob-num js-line-number" data-line-number="3402"></td>
        <td id="LC3402" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3403" class="blob-num js-line-number" data-line-number="3403"></td>
        <td id="LC3403" class="blob-code js-file-line">.directive(<span class="s1">'timepicker'</span>, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L3404" class="blob-num js-line-number" data-line-number="3404"></td>
        <td id="LC3404" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L3405" class="blob-num js-line-number" data-line-number="3405"></td>
        <td id="LC3405" class="blob-code js-file-line">    restrict<span class="o">:</span> <span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L3406" class="blob-num js-line-number" data-line-number="3406"></td>
        <td id="LC3406" class="blob-code js-file-line">    require<span class="o">:</span> [<span class="s1">'timepicker'</span>, <span class="s1">'?^ngModel'</span>],</td>
      </tr>
      <tr>
        <td id="L3407" class="blob-num js-line-number" data-line-number="3407"></td>
        <td id="LC3407" class="blob-code js-file-line">    controller<span class="o">:</span><span class="s1">'TimepickerController'</span>,</td>
      </tr>
      <tr>
        <td id="L3408" class="blob-num js-line-number" data-line-number="3408"></td>
        <td id="LC3408" class="blob-code js-file-line">    replace<span class="o">:</span> <span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L3409" class="blob-num js-line-number" data-line-number="3409"></td>
        <td id="LC3409" class="blob-code js-file-line">    scope<span class="o">:</span> {},</td>
      </tr>
      <tr>
        <td id="L3410" class="blob-num js-line-number" data-line-number="3410"></td>
        <td id="LC3410" class="blob-code js-file-line">    templateUrl<span class="o">:</span> <span class="s1">'template/timepicker/timepicker.html'</span>,</td>
      </tr>
      <tr>
        <td id="L3411" class="blob-num js-line-number" data-line-number="3411"></td>
        <td id="LC3411" class="blob-code js-file-line">    <span class="nf">link</span>: <span class="kt">function</span>(<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>, <span class="nv">ctrls</span>) {</td>
      </tr>
      <tr>
        <td id="L3412" class="blob-num js-line-number" data-line-number="3412"></td>
        <td id="LC3412" class="blob-code js-file-line">      <span class="k">var</span> timepickerCtrl <span class="o">=</span> ctrls[<span class="m">0</span>], ngModelCtrl <span class="o">=</span> ctrls[<span class="m">1</span>];</td>
      </tr>
      <tr>
        <td id="L3413" class="blob-num js-line-number" data-line-number="3413"></td>
        <td id="LC3413" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3414" class="blob-num js-line-number" data-line-number="3414"></td>
        <td id="LC3414" class="blob-code js-file-line">      <span class="k">if</span> ( ngModelCtrl ) {</td>
      </tr>
      <tr>
        <td id="L3415" class="blob-num js-line-number" data-line-number="3415"></td>
        <td id="LC3415" class="blob-code js-file-line">        timepickerCtrl.init( ngModelCtrl, element.<span class="nf">find</span>(<span class="s1">'input'</span>) );</td>
      </tr>
      <tr>
        <td id="L3416" class="blob-num js-line-number" data-line-number="3416"></td>
        <td id="LC3416" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L3417" class="blob-num js-line-number" data-line-number="3417"></td>
        <td id="LC3417" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L3418" class="blob-num js-line-number" data-line-number="3418"></td>
        <td id="LC3418" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L3419" class="blob-num js-line-number" data-line-number="3419"></td>
        <td id="LC3419" class="blob-code js-file-line">});</td>
      </tr>
      <tr>
        <td id="L3420" class="blob-num js-line-number" data-line-number="3420"></td>
        <td id="LC3420" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3421" class="blob-num js-line-number" data-line-number="3421"></td>
        <td id="LC3421" class="blob-code js-file-line">angular.module(<span class="s1">'ui.bootstrap.typeahead'</span>, [<span class="s1">'ui.bootstrap.position'</span>, <span class="s1">'ui.bootstrap.bindHtml'</span>])</td>
      </tr>
      <tr>
        <td id="L3422" class="blob-num js-line-number" data-line-number="3422"></td>
        <td id="LC3422" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3423" class="blob-num js-line-number" data-line-number="3423"></td>
        <td id="LC3423" class="blob-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L3424" class="blob-num js-line-number" data-line-number="3424"></td>
        <td id="LC3424" class="blob-code js-file-line"><span class="cm"> * A helper service that can parse typeahead's syntax (string provided by users)</span></td>
      </tr>
      <tr>
        <td id="L3425" class="blob-num js-line-number" data-line-number="3425"></td>
        <td id="LC3425" class="blob-code js-file-line"><span class="cm"> * Extracted to a separate service for ease of unit testing</span></td>
      </tr>
      <tr>
        <td id="L3426" class="blob-num js-line-number" data-line-number="3426"></td>
        <td id="LC3426" class="blob-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L3427" class="blob-num js-line-number" data-line-number="3427"></td>
        <td id="LC3427" class="blob-code js-file-line">  .factory(<span class="s1">'typeaheadParser'</span>, [<span class="s1">'$parse'</span>, <span class="kt">function</span> (<span class="nv">$parse</span>) {</td>
      </tr>
      <tr>
        <td id="L3428" class="blob-num js-line-number" data-line-number="3428"></td>
        <td id="LC3428" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3429" class="blob-num js-line-number" data-line-number="3429"></td>
        <td id="LC3429" class="blob-code js-file-line">  <span class="c1">//                      00000111000000000000022200000000000000003333333333333330000000000044000</span></td>
      </tr>
      <tr>
        <td id="L3430" class="blob-num js-line-number" data-line-number="3430"></td>
        <td id="LC3430" class="blob-code js-file-line">  <span class="k">var</span> TYPEAHEAD_REGEXP <span class="o">=</span><span class="sr"> /<span class="k">^</span><span class="sc">\s</span><span class="o">*</span>(<span class="sc">.</span><span class="o">*?</span>)(?:<span class="sc">\s</span><span class="o">+</span>as<span class="sc">\s</span><span class="o">+</span>(<span class="sc">.</span><span class="o">*?</span>))<span class="o">?</span><span class="sc">\s</span><span class="o">+</span>for<span class="sc">\s</span><span class="o">+</span>(?:(<span class="no">[<span class="sc">\$</span><span class="sc">\w</span>][<span class="sc">\$</span><span class="sc">\w\d</span>]</span><span class="o">*</span>))<span class="sc">\s</span><span class="o">+</span>in<span class="sc">\s</span><span class="o">+</span>(<span class="sc">.</span><span class="o">*</span>)<span class="k">$</span>/</span>;</td>
      </tr>
      <tr>
        <td id="L3431" class="blob-num js-line-number" data-line-number="3431"></td>
        <td id="LC3431" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3432" class="blob-num js-line-number" data-line-number="3432"></td>
        <td id="LC3432" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L3433" class="blob-num js-line-number" data-line-number="3433"></td>
        <td id="LC3433" class="blob-code js-file-line">    <span class="nf">parse</span>:<span class="kt">function</span> (<span class="nv">input</span>) {</td>
      </tr>
      <tr>
        <td id="L3434" class="blob-num js-line-number" data-line-number="3434"></td>
        <td id="LC3434" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3435" class="blob-num js-line-number" data-line-number="3435"></td>
        <td id="LC3435" class="blob-code js-file-line">      <span class="k">var</span> match <span class="o">=</span> input.<span class="nf">match</span>(TYPEAHEAD_REGEXP);</td>
      </tr>
      <tr>
        <td id="L3436" class="blob-num js-line-number" data-line-number="3436"></td>
        <td id="LC3436" class="blob-code js-file-line">      <span class="k">if</span> (<span class="o">!</span>match) {</td>
      </tr>
      <tr>
        <td id="L3437" class="blob-num js-line-number" data-line-number="3437"></td>
        <td id="LC3437" class="blob-code js-file-line">        <span class="k">throw</span> <span class="o">new</span> <span class="nc">Error</span>(</td>
      </tr>
      <tr>
        <td id="L3438" class="blob-num js-line-number" data-line-number="3438"></td>
        <td id="LC3438" class="blob-code js-file-line">          <span class="s1">'Expected typeahead specification in form of &quot;_modelValue_ (as _label_)? for _item_ in _collection_&quot;'</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L3439" class="blob-num js-line-number" data-line-number="3439"></td>
        <td id="LC3439" class="blob-code js-file-line">            <span class="s1">' but got &quot;'</span> <span class="o">+</span> input <span class="o">+</span> <span class="s1">'&quot;.'</span>);</td>
      </tr>
      <tr>
        <td id="L3440" class="blob-num js-line-number" data-line-number="3440"></td>
        <td id="LC3440" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L3441" class="blob-num js-line-number" data-line-number="3441"></td>
        <td id="LC3441" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3442" class="blob-num js-line-number" data-line-number="3442"></td>
        <td id="LC3442" class="blob-code js-file-line">      <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L3443" class="blob-num js-line-number" data-line-number="3443"></td>
        <td id="LC3443" class="blob-code js-file-line">        itemName<span class="o">:</span>match[<span class="m">3</span>],</td>
      </tr>
      <tr>
        <td id="L3444" class="blob-num js-line-number" data-line-number="3444"></td>
        <td id="LC3444" class="blob-code js-file-line">        source<span class="o">:</span>$<span class="nf">parse</span>(match[<span class="m">4</span>]),</td>
      </tr>
      <tr>
        <td id="L3445" class="blob-num js-line-number" data-line-number="3445"></td>
        <td id="LC3445" class="blob-code js-file-line">        viewMapper<span class="o">:</span>$<span class="nf">parse</span>(match[<span class="m">2</span>] <span class="o">||</span> match[<span class="m">1</span>]),</td>
      </tr>
      <tr>
        <td id="L3446" class="blob-num js-line-number" data-line-number="3446"></td>
        <td id="LC3446" class="blob-code js-file-line">        modelMapper<span class="o">:</span>$<span class="nf">parse</span>(match[<span class="m">1</span>])</td>
      </tr>
      <tr>
        <td id="L3447" class="blob-num js-line-number" data-line-number="3447"></td>
        <td id="LC3447" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L3448" class="blob-num js-line-number" data-line-number="3448"></td>
        <td id="LC3448" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L3449" class="blob-num js-line-number" data-line-number="3449"></td>
        <td id="LC3449" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L3450" class="blob-num js-line-number" data-line-number="3450"></td>
        <td id="LC3450" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L3451" class="blob-num js-line-number" data-line-number="3451"></td>
        <td id="LC3451" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3452" class="blob-num js-line-number" data-line-number="3452"></td>
        <td id="LC3452" class="blob-code js-file-line">  .directive(<span class="s1">'typeahead'</span>, [<span class="s1">'$compile'</span>, <span class="s1">'$parse'</span>, <span class="s1">'$q'</span>, <span class="s1">'$timeout'</span>, <span class="s1">'$document'</span>, <span class="s1">'$position'</span>, <span class="s1">'typeaheadParser'</span>,</td>
      </tr>
      <tr>
        <td id="L3453" class="blob-num js-line-number" data-line-number="3453"></td>
        <td id="LC3453" class="blob-code js-file-line">    <span class="kt">function</span> (<span class="nv">$compile</span>, <span class="nv">$parse</span>, <span class="nv">$q</span>, <span class="nv">$timeout</span>, <span class="nv">$document</span>, <span class="nv">$position</span>, <span class="nv">typeaheadParser</span>) {</td>
      </tr>
      <tr>
        <td id="L3454" class="blob-num js-line-number" data-line-number="3454"></td>
        <td id="LC3454" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3455" class="blob-num js-line-number" data-line-number="3455"></td>
        <td id="LC3455" class="blob-code js-file-line">  <span class="k">var</span> HOT_KEYS <span class="o">=</span> [<span class="m">9</span>, <span class="m">13</span>, <span class="m">27</span>, <span class="m">38</span>, <span class="m">40</span>];</td>
      </tr>
      <tr>
        <td id="L3456" class="blob-num js-line-number" data-line-number="3456"></td>
        <td id="LC3456" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3457" class="blob-num js-line-number" data-line-number="3457"></td>
        <td id="LC3457" class="blob-code js-file-line">  <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L3458" class="blob-num js-line-number" data-line-number="3458"></td>
        <td id="LC3458" class="blob-code js-file-line">    require<span class="o">:</span><span class="s1">'ngModel'</span>,</td>
      </tr>
      <tr>
        <td id="L3459" class="blob-num js-line-number" data-line-number="3459"></td>
        <td id="LC3459" class="blob-code js-file-line">    <span class="nf">link</span>:<span class="kt">function</span> (<span class="nv">originalScope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>, <span class="nv">modelCtrl</span>) {</td>
      </tr>
      <tr>
        <td id="L3460" class="blob-num js-line-number" data-line-number="3460"></td>
        <td id="LC3460" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3461" class="blob-num js-line-number" data-line-number="3461"></td>
        <td id="LC3461" class="blob-code js-file-line">      <span class="c1">//SUPPORTED ATTRIBUTES (OPTIONS)</span></td>
      </tr>
      <tr>
        <td id="L3462" class="blob-num js-line-number" data-line-number="3462"></td>
        <td id="LC3462" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3463" class="blob-num js-line-number" data-line-number="3463"></td>
        <td id="LC3463" class="blob-code js-file-line">      <span class="c1">//minimal no of characters that needs to be entered before typeahead kicks-in</span></td>
      </tr>
      <tr>
        <td id="L3464" class="blob-num js-line-number" data-line-number="3464"></td>
        <td id="LC3464" class="blob-code js-file-line">      <span class="k">var</span> minSearch <span class="o">=</span> originalScope.$<span class="nf">eval</span>(attrs.typeaheadMinLength) <span class="o">||</span> <span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L3465" class="blob-num js-line-number" data-line-number="3465"></td>
        <td id="LC3465" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3466" class="blob-num js-line-number" data-line-number="3466"></td>
        <td id="LC3466" class="blob-code js-file-line">      <span class="c1">//minimal wait time after last character typed before typehead kicks-in</span></td>
      </tr>
      <tr>
        <td id="L3467" class="blob-num js-line-number" data-line-number="3467"></td>
        <td id="LC3467" class="blob-code js-file-line">      <span class="k">var</span> waitTime <span class="o">=</span> originalScope.$<span class="nf">eval</span>(attrs.typeaheadWaitMs) <span class="o">||</span> <span class="m">0</span>;</td>
      </tr>
      <tr>
        <td id="L3468" class="blob-num js-line-number" data-line-number="3468"></td>
        <td id="LC3468" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3469" class="blob-num js-line-number" data-line-number="3469"></td>
        <td id="LC3469" class="blob-code js-file-line">      <span class="c1">//should it restrict model values to the ones selected from the popup only?</span></td>
      </tr>
      <tr>
        <td id="L3470" class="blob-num js-line-number" data-line-number="3470"></td>
        <td id="LC3470" class="blob-code js-file-line">      <span class="k">var</span> isEditable <span class="o">=</span> originalScope.$<span class="nf">eval</span>(attrs.typeaheadEditable) <span class="o">!==</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L3471" class="blob-num js-line-number" data-line-number="3471"></td>
        <td id="LC3471" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3472" class="blob-num js-line-number" data-line-number="3472"></td>
        <td id="LC3472" class="blob-code js-file-line">      <span class="c1">//binding to a variable that indicates if matches are being retrieved asynchronously</span></td>
      </tr>
      <tr>
        <td id="L3473" class="blob-num js-line-number" data-line-number="3473"></td>
        <td id="LC3473" class="blob-code js-file-line">      <span class="k">var</span> isLoadingSetter <span class="o">=</span> $<span class="nf">parse</span>(attrs.typeaheadLoading).assign <span class="o">||</span> angular.noop;</td>
      </tr>
      <tr>
        <td id="L3474" class="blob-num js-line-number" data-line-number="3474"></td>
        <td id="LC3474" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3475" class="blob-num js-line-number" data-line-number="3475"></td>
        <td id="LC3475" class="blob-code js-file-line">      <span class="c1">//a callback executed when a match is selected</span></td>
      </tr>
      <tr>
        <td id="L3476" class="blob-num js-line-number" data-line-number="3476"></td>
        <td id="LC3476" class="blob-code js-file-line">      <span class="k">var</span> onSelectCallback <span class="o">=</span> $<span class="nf">parse</span>(attrs.typeaheadOnSelect);</td>
      </tr>
      <tr>
        <td id="L3477" class="blob-num js-line-number" data-line-number="3477"></td>
        <td id="LC3477" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3478" class="blob-num js-line-number" data-line-number="3478"></td>
        <td id="LC3478" class="blob-code js-file-line">      <span class="k">var</span> inputFormatter <span class="o">=</span> attrs.typeaheadInputFormatter <span class="o">?</span> $<span class="nf">parse</span>(attrs.typeaheadInputFormatter) <span class="o">:</span> <span class="kc">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L3479" class="blob-num js-line-number" data-line-number="3479"></td>
        <td id="LC3479" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3480" class="blob-num js-line-number" data-line-number="3480"></td>
        <td id="LC3480" class="blob-code js-file-line">      <span class="k">var</span> appendToBody <span class="o">=</span>  attrs.typeaheadAppendToBody <span class="o">?</span> originalScope.$<span class="nf">eval</span>(attrs.typeaheadAppendToBody) <span class="o">:</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L3481" class="blob-num js-line-number" data-line-number="3481"></td>
        <td id="LC3481" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3482" class="blob-num js-line-number" data-line-number="3482"></td>
        <td id="LC3482" class="blob-code js-file-line">      <span class="c1">//INTERNAL VARIABLES</span></td>
      </tr>
      <tr>
        <td id="L3483" class="blob-num js-line-number" data-line-number="3483"></td>
        <td id="LC3483" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3484" class="blob-num js-line-number" data-line-number="3484"></td>
        <td id="LC3484" class="blob-code js-file-line">      <span class="c1">//model setter executed upon match selection</span></td>
      </tr>
      <tr>
        <td id="L3485" class="blob-num js-line-number" data-line-number="3485"></td>
        <td id="LC3485" class="blob-code js-file-line">      <span class="k">var</span> $setModelValue <span class="o">=</span> $<span class="nf">parse</span>(attrs.ngModel).assign;</td>
      </tr>
      <tr>
        <td id="L3486" class="blob-num js-line-number" data-line-number="3486"></td>
        <td id="LC3486" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3487" class="blob-num js-line-number" data-line-number="3487"></td>
        <td id="LC3487" class="blob-code js-file-line">      <span class="c1">//expressions used by typeahead</span></td>
      </tr>
      <tr>
        <td id="L3488" class="blob-num js-line-number" data-line-number="3488"></td>
        <td id="LC3488" class="blob-code js-file-line">      <span class="k">var</span> parserResult <span class="o">=</span> typeaheadParser.<span class="nf">parse</span>(attrs.typeahead);</td>
      </tr>
      <tr>
        <td id="L3489" class="blob-num js-line-number" data-line-number="3489"></td>
        <td id="LC3489" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3490" class="blob-num js-line-number" data-line-number="3490"></td>
        <td id="LC3490" class="blob-code js-file-line">      <span class="k">var</span> hasFocus;</td>
      </tr>
      <tr>
        <td id="L3491" class="blob-num js-line-number" data-line-number="3491"></td>
        <td id="LC3491" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3492" class="blob-num js-line-number" data-line-number="3492"></td>
        <td id="LC3492" class="blob-code js-file-line">      <span class="c1">//create a child scope for the typeahead directive so we are not polluting original scope</span></td>
      </tr>
      <tr>
        <td id="L3493" class="blob-num js-line-number" data-line-number="3493"></td>
        <td id="LC3493" class="blob-code js-file-line">      <span class="c1">//with typeahead-specific data (matches, query etc.)</span></td>
      </tr>
      <tr>
        <td id="L3494" class="blob-num js-line-number" data-line-number="3494"></td>
        <td id="LC3494" class="blob-code js-file-line">      <span class="k">var</span> scope <span class="o">=</span> originalScope.$<span class="o">new</span>();</td>
      </tr>
      <tr>
        <td id="L3495" class="blob-num js-line-number" data-line-number="3495"></td>
        <td id="LC3495" class="blob-code js-file-line">      originalScope.$on(<span class="s1">'$destroy'</span>, <span class="kt">function</span>(){</td>
      </tr>
      <tr>
        <td id="L3496" class="blob-num js-line-number" data-line-number="3496"></td>
        <td id="LC3496" class="blob-code js-file-line">        scope.$destroy();</td>
      </tr>
      <tr>
        <td id="L3497" class="blob-num js-line-number" data-line-number="3497"></td>
        <td id="LC3497" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L3498" class="blob-num js-line-number" data-line-number="3498"></td>
        <td id="LC3498" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3499" class="blob-num js-line-number" data-line-number="3499"></td>
        <td id="LC3499" class="blob-code js-file-line">      <span class="c1">// WAI-ARIA</span></td>
      </tr>
      <tr>
        <td id="L3500" class="blob-num js-line-number" data-line-number="3500"></td>
        <td id="LC3500" class="blob-code js-file-line">      <span class="k">var</span> popupId <span class="o">=</span> <span class="s1">'typeahead-'</span> <span class="o">+</span> scope.$id <span class="o">+</span> <span class="s1">'-'</span> <span class="o">+</span> <span class="no">Math</span>.<span class="nf">floor</span>(<span class="no">Math</span>.<span class="nf">random</span>() <span class="o">*</span> <span class="m">10000</span>);</td>
      </tr>
      <tr>
        <td id="L3501" class="blob-num js-line-number" data-line-number="3501"></td>
        <td id="LC3501" class="blob-code js-file-line">      element.attr({</td>
      </tr>
      <tr>
        <td id="L3502" class="blob-num js-line-number" data-line-number="3502"></td>
        <td id="LC3502" class="blob-code js-file-line">        <span class="s1">'aria-autocomplete'</span><span class="o">:</span> <span class="s1">'list'</span>,</td>
      </tr>
      <tr>
        <td id="L3503" class="blob-num js-line-number" data-line-number="3503"></td>
        <td id="LC3503" class="blob-code js-file-line">        <span class="s1">'aria-expanded'</span><span class="o">:</span> <span class="kc">false</span>,</td>
      </tr>
      <tr>
        <td id="L3504" class="blob-num js-line-number" data-line-number="3504"></td>
        <td id="LC3504" class="blob-code js-file-line">        <span class="s1">'aria-owns'</span><span class="o">:</span> popupId</td>
      </tr>
      <tr>
        <td id="L3505" class="blob-num js-line-number" data-line-number="3505"></td>
        <td id="LC3505" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L3506" class="blob-num js-line-number" data-line-number="3506"></td>
        <td id="LC3506" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3507" class="blob-num js-line-number" data-line-number="3507"></td>
        <td id="LC3507" class="blob-code js-file-line">      <span class="c1">//pop-up element used to display matches</span></td>
      </tr>
      <tr>
        <td id="L3508" class="blob-num js-line-number" data-line-number="3508"></td>
        <td id="LC3508" class="blob-code js-file-line">      <span class="k">var</span> popUpEl <span class="o">=</span> angular.element(<span class="s1">'&lt;div typeahead-popup&gt;&lt;/div&gt;'</span>);</td>
      </tr>
      <tr>
        <td id="L3509" class="blob-num js-line-number" data-line-number="3509"></td>
        <td id="LC3509" class="blob-code js-file-line">      popUpEl.attr({</td>
      </tr>
      <tr>
        <td id="L3510" class="blob-num js-line-number" data-line-number="3510"></td>
        <td id="LC3510" class="blob-code js-file-line">        id<span class="o">:</span> popupId,</td>
      </tr>
      <tr>
        <td id="L3511" class="blob-num js-line-number" data-line-number="3511"></td>
        <td id="LC3511" class="blob-code js-file-line">        matches<span class="o">:</span> <span class="s1">'matches'</span>,</td>
      </tr>
      <tr>
        <td id="L3512" class="blob-num js-line-number" data-line-number="3512"></td>
        <td id="LC3512" class="blob-code js-file-line">        active<span class="o">:</span> <span class="s1">'activeIdx'</span>,</td>
      </tr>
      <tr>
        <td id="L3513" class="blob-num js-line-number" data-line-number="3513"></td>
        <td id="LC3513" class="blob-code js-file-line">        select<span class="o">:</span> <span class="s1">'select(activeIdx)'</span>,</td>
      </tr>
      <tr>
        <td id="L3514" class="blob-num js-line-number" data-line-number="3514"></td>
        <td id="LC3514" class="blob-code js-file-line">        query<span class="o">:</span> <span class="s1">'query'</span>,</td>
      </tr>
      <tr>
        <td id="L3515" class="blob-num js-line-number" data-line-number="3515"></td>
        <td id="LC3515" class="blob-code js-file-line">        position<span class="o">:</span> <span class="s1">'position'</span></td>
      </tr>
      <tr>
        <td id="L3516" class="blob-num js-line-number" data-line-number="3516"></td>
        <td id="LC3516" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L3517" class="blob-num js-line-number" data-line-number="3517"></td>
        <td id="LC3517" class="blob-code js-file-line">      <span class="c1">//custom item template</span></td>
      </tr>
      <tr>
        <td id="L3518" class="blob-num js-line-number" data-line-number="3518"></td>
        <td id="LC3518" class="blob-code js-file-line">      <span class="k">if</span> (angular.isDefined(attrs.typeaheadTemplateUrl)) {</td>
      </tr>
      <tr>
        <td id="L3519" class="blob-num js-line-number" data-line-number="3519"></td>
        <td id="LC3519" class="blob-code js-file-line">        popUpEl.attr(<span class="s1">'template-url'</span>, attrs.typeaheadTemplateUrl);</td>
      </tr>
      <tr>
        <td id="L3520" class="blob-num js-line-number" data-line-number="3520"></td>
        <td id="LC3520" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L3521" class="blob-num js-line-number" data-line-number="3521"></td>
        <td id="LC3521" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3522" class="blob-num js-line-number" data-line-number="3522"></td>
        <td id="LC3522" class="blob-code js-file-line">      <span class="k">var</span> <span class="nf">resetMatches</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3523" class="blob-num js-line-number" data-line-number="3523"></td>
        <td id="LC3523" class="blob-code js-file-line">        scope.matches <span class="o">=</span> [];</td>
      </tr>
      <tr>
        <td id="L3524" class="blob-num js-line-number" data-line-number="3524"></td>
        <td id="LC3524" class="blob-code js-file-line">        scope.activeIdx <span class="o">=</span> <span class="o">-</span><span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L3525" class="blob-num js-line-number" data-line-number="3525"></td>
        <td id="LC3525" class="blob-code js-file-line">        element.attr(<span class="s1">'aria-expanded'</span>, <span class="kc">false</span>);</td>
      </tr>
      <tr>
        <td id="L3526" class="blob-num js-line-number" data-line-number="3526"></td>
        <td id="LC3526" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L3527" class="blob-num js-line-number" data-line-number="3527"></td>
        <td id="LC3527" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3528" class="blob-num js-line-number" data-line-number="3528"></td>
        <td id="LC3528" class="blob-code js-file-line">      <span class="k">var</span> <span class="nf">getMatchId</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">index</span>) {</td>
      </tr>
      <tr>
        <td id="L3529" class="blob-num js-line-number" data-line-number="3529"></td>
        <td id="LC3529" class="blob-code js-file-line">        <span class="k">return</span> popupId <span class="o">+</span> <span class="s1">'-option-'</span> <span class="o">+</span> index;</td>
      </tr>
      <tr>
        <td id="L3530" class="blob-num js-line-number" data-line-number="3530"></td>
        <td id="LC3530" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L3531" class="blob-num js-line-number" data-line-number="3531"></td>
        <td id="LC3531" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3532" class="blob-num js-line-number" data-line-number="3532"></td>
        <td id="LC3532" class="blob-code js-file-line">      <span class="c1">// Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.</span></td>
      </tr>
      <tr>
        <td id="L3533" class="blob-num js-line-number" data-line-number="3533"></td>
        <td id="LC3533" class="blob-code js-file-line">      <span class="c1">// This attribute is added or removed automatically when the `activeIdx` changes.</span></td>
      </tr>
      <tr>
        <td id="L3534" class="blob-num js-line-number" data-line-number="3534"></td>
        <td id="LC3534" class="blob-code js-file-line">      scope.$<span class="nf">watch</span>(<span class="s1">'activeIdx'</span>, <span class="kt">function</span>(<span class="nv">index</span>) {</td>
      </tr>
      <tr>
        <td id="L3535" class="blob-num js-line-number" data-line-number="3535"></td>
        <td id="LC3535" class="blob-code js-file-line">        <span class="k">if</span> (index <span class="o">&lt;</span> <span class="m">0</span>) {</td>
      </tr>
      <tr>
        <td id="L3536" class="blob-num js-line-number" data-line-number="3536"></td>
        <td id="LC3536" class="blob-code js-file-line">          element.removeAttr(<span class="s1">'aria-activedescendant'</span>);</td>
      </tr>
      <tr>
        <td id="L3537" class="blob-num js-line-number" data-line-number="3537"></td>
        <td id="LC3537" class="blob-code js-file-line">        } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L3538" class="blob-num js-line-number" data-line-number="3538"></td>
        <td id="LC3538" class="blob-code js-file-line">          element.attr(<span class="s1">'aria-activedescendant'</span>, getMatchId(index));</td>
      </tr>
      <tr>
        <td id="L3539" class="blob-num js-line-number" data-line-number="3539"></td>
        <td id="LC3539" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L3540" class="blob-num js-line-number" data-line-number="3540"></td>
        <td id="LC3540" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L3541" class="blob-num js-line-number" data-line-number="3541"></td>
        <td id="LC3541" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3542" class="blob-num js-line-number" data-line-number="3542"></td>
        <td id="LC3542" class="blob-code js-file-line">      <span class="k">var</span> <span class="nf">getMatchesAsync</span> <span class="o">=</span> <span class="kt">function</span>(<span class="nv">inputValue</span>) {</td>
      </tr>
      <tr>
        <td id="L3543" class="blob-num js-line-number" data-line-number="3543"></td>
        <td id="LC3543" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3544" class="blob-num js-line-number" data-line-number="3544"></td>
        <td id="LC3544" class="blob-code js-file-line">        <span class="k">var</span> locals <span class="o">=</span> {$viewValue<span class="o">:</span> inputValue};</td>
      </tr>
      <tr>
        <td id="L3545" class="blob-num js-line-number" data-line-number="3545"></td>
        <td id="LC3545" class="blob-code js-file-line">        isLoadingSetter(originalScope, <span class="kc">true</span>);</td>
      </tr>
      <tr>
        <td id="L3546" class="blob-num js-line-number" data-line-number="3546"></td>
        <td id="LC3546" class="blob-code js-file-line">        $q.when(parserResult.<span class="no">source</span>(originalScope, locals)).then(<span class="kt">function</span>(<span class="nv">matches</span>) {</td>
      </tr>
      <tr>
        <td id="L3547" class="blob-num js-line-number" data-line-number="3547"></td>
        <td id="LC3547" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3548" class="blob-num js-line-number" data-line-number="3548"></td>
        <td id="LC3548" class="blob-code js-file-line">          <span class="c1">//it might happen that several async queries were in progress if a user were typing fast</span></td>
      </tr>
      <tr>
        <td id="L3549" class="blob-num js-line-number" data-line-number="3549"></td>
        <td id="LC3549" class="blob-code js-file-line">          <span class="c1">//but we are interested only in responses that correspond to the current view value</span></td>
      </tr>
      <tr>
        <td id="L3550" class="blob-num js-line-number" data-line-number="3550"></td>
        <td id="LC3550" class="blob-code js-file-line">          <span class="k">var</span> onCurrentRequest <span class="o">=</span> (inputValue <span class="o">===</span> modelCtrl.$viewValue);</td>
      </tr>
      <tr>
        <td id="L3551" class="blob-num js-line-number" data-line-number="3551"></td>
        <td id="LC3551" class="blob-code js-file-line">          <span class="k">if</span> (onCurrentRequest <span class="o">&amp;&amp;</span> hasFocus) {</td>
      </tr>
      <tr>
        <td id="L3552" class="blob-num js-line-number" data-line-number="3552"></td>
        <td id="LC3552" class="blob-code js-file-line">            <span class="k">if</span> (matches.<span class="no">length</span> <span class="o">&gt;</span> <span class="m">0</span>) {</td>
      </tr>
      <tr>
        <td id="L3553" class="blob-num js-line-number" data-line-number="3553"></td>
        <td id="LC3553" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3554" class="blob-num js-line-number" data-line-number="3554"></td>
        <td id="LC3554" class="blob-code js-file-line">              scope.activeIdx <span class="o">=</span> <span class="m">0</span>;</td>
      </tr>
      <tr>
        <td id="L3555" class="blob-num js-line-number" data-line-number="3555"></td>
        <td id="LC3555" class="blob-code js-file-line">              scope.matches.<span class="no">length</span> <span class="o">=</span> <span class="m">0</span>;</td>
      </tr>
      <tr>
        <td id="L3556" class="blob-num js-line-number" data-line-number="3556"></td>
        <td id="LC3556" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3557" class="blob-num js-line-number" data-line-number="3557"></td>
        <td id="LC3557" class="blob-code js-file-line">              <span class="c1">//transform labels</span></td>
      </tr>
      <tr>
        <td id="L3558" class="blob-num js-line-number" data-line-number="3558"></td>
        <td id="LC3558" class="blob-code js-file-line">              <span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>; i<span class="o">&lt;</span>matches.<span class="no">length</span>; i<span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L3559" class="blob-num js-line-number" data-line-number="3559"></td>
        <td id="LC3559" class="blob-code js-file-line">                locals[parserResult.itemName] <span class="o">=</span> matches[i];</td>
      </tr>
      <tr>
        <td id="L3560" class="blob-num js-line-number" data-line-number="3560"></td>
        <td id="LC3560" class="blob-code js-file-line">                scope.matches.<span class="nf">push</span>({</td>
      </tr>
      <tr>
        <td id="L3561" class="blob-num js-line-number" data-line-number="3561"></td>
        <td id="LC3561" class="blob-code js-file-line">                  id<span class="o">:</span> getMatchId(i),</td>
      </tr>
      <tr>
        <td id="L3562" class="blob-num js-line-number" data-line-number="3562"></td>
        <td id="LC3562" class="blob-code js-file-line">                  label<span class="o">:</span> parserResult.viewMapper(scope, locals),</td>
      </tr>
      <tr>
        <td id="L3563" class="blob-num js-line-number" data-line-number="3563"></td>
        <td id="LC3563" class="blob-code js-file-line">                  model<span class="o">:</span> matches[i]</td>
      </tr>
      <tr>
        <td id="L3564" class="blob-num js-line-number" data-line-number="3564"></td>
        <td id="LC3564" class="blob-code js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L3565" class="blob-num js-line-number" data-line-number="3565"></td>
        <td id="LC3565" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L3566" class="blob-num js-line-number" data-line-number="3566"></td>
        <td id="LC3566" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3567" class="blob-num js-line-number" data-line-number="3567"></td>
        <td id="LC3567" class="blob-code js-file-line">              scope.query <span class="o">=</span> inputValue;</td>
      </tr>
      <tr>
        <td id="L3568" class="blob-num js-line-number" data-line-number="3568"></td>
        <td id="LC3568" class="blob-code js-file-line">              <span class="c1">//position pop-up with matches - we need to re-calculate its position each time we are opening a window</span></td>
      </tr>
      <tr>
        <td id="L3569" class="blob-num js-line-number" data-line-number="3569"></td>
        <td id="LC3569" class="blob-code js-file-line">              <span class="c1">//with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page</span></td>
      </tr>
      <tr>
        <td id="L3570" class="blob-num js-line-number" data-line-number="3570"></td>
        <td id="LC3570" class="blob-code js-file-line">              <span class="c1">//due to other elements being rendered</span></td>
      </tr>
      <tr>
        <td id="L3571" class="blob-num js-line-number" data-line-number="3571"></td>
        <td id="LC3571" class="blob-code js-file-line">              scope.position <span class="o">=</span> appendToBody <span class="o">?</span> $position.offset(element) <span class="o">:</span> $position.position(element);</td>
      </tr>
      <tr>
        <td id="L3572" class="blob-num js-line-number" data-line-number="3572"></td>
        <td id="LC3572" class="blob-code js-file-line">              scope.position.<span class="no">top</span> <span class="o">=</span> scope.position.<span class="no">top</span> <span class="o">+</span> element.prop(<span class="s1">'offsetHeight'</span>);</td>
      </tr>
      <tr>
        <td id="L3573" class="blob-num js-line-number" data-line-number="3573"></td>
        <td id="LC3573" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3574" class="blob-num js-line-number" data-line-number="3574"></td>
        <td id="LC3574" class="blob-code js-file-line">              element.attr(<span class="s1">'aria-expanded'</span>, <span class="kc">true</span>);</td>
      </tr>
      <tr>
        <td id="L3575" class="blob-num js-line-number" data-line-number="3575"></td>
        <td id="LC3575" class="blob-code js-file-line">            } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L3576" class="blob-num js-line-number" data-line-number="3576"></td>
        <td id="LC3576" class="blob-code js-file-line">              resetMatches();</td>
      </tr>
      <tr>
        <td id="L3577" class="blob-num js-line-number" data-line-number="3577"></td>
        <td id="LC3577" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L3578" class="blob-num js-line-number" data-line-number="3578"></td>
        <td id="LC3578" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L3579" class="blob-num js-line-number" data-line-number="3579"></td>
        <td id="LC3579" class="blob-code js-file-line">          <span class="k">if</span> (onCurrentRequest) {</td>
      </tr>
      <tr>
        <td id="L3580" class="blob-num js-line-number" data-line-number="3580"></td>
        <td id="LC3580" class="blob-code js-file-line">            isLoadingSetter(originalScope, <span class="kc">false</span>);</td>
      </tr>
      <tr>
        <td id="L3581" class="blob-num js-line-number" data-line-number="3581"></td>
        <td id="LC3581" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L3582" class="blob-num js-line-number" data-line-number="3582"></td>
        <td id="LC3582" class="blob-code js-file-line">        }, <span class="kt">function</span>(){</td>
      </tr>
      <tr>
        <td id="L3583" class="blob-num js-line-number" data-line-number="3583"></td>
        <td id="LC3583" class="blob-code js-file-line">          resetMatches();</td>
      </tr>
      <tr>
        <td id="L3584" class="blob-num js-line-number" data-line-number="3584"></td>
        <td id="LC3584" class="blob-code js-file-line">          isLoadingSetter(originalScope, <span class="kc">false</span>);</td>
      </tr>
      <tr>
        <td id="L3585" class="blob-num js-line-number" data-line-number="3585"></td>
        <td id="LC3585" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L3586" class="blob-num js-line-number" data-line-number="3586"></td>
        <td id="LC3586" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L3587" class="blob-num js-line-number" data-line-number="3587"></td>
        <td id="LC3587" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3588" class="blob-num js-line-number" data-line-number="3588"></td>
        <td id="LC3588" class="blob-code js-file-line">      resetMatches();</td>
      </tr>
      <tr>
        <td id="L3589" class="blob-num js-line-number" data-line-number="3589"></td>
        <td id="LC3589" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3590" class="blob-num js-line-number" data-line-number="3590"></td>
        <td id="LC3590" class="blob-code js-file-line">      <span class="c1">//we need to propagate user's query so we can higlight matches</span></td>
      </tr>
      <tr>
        <td id="L3591" class="blob-num js-line-number" data-line-number="3591"></td>
        <td id="LC3591" class="blob-code js-file-line">      scope.query <span class="o">=</span> <span class="kc">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L3592" class="blob-num js-line-number" data-line-number="3592"></td>
        <td id="LC3592" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3593" class="blob-num js-line-number" data-line-number="3593"></td>
        <td id="LC3593" class="blob-code js-file-line">      <span class="c1">//Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later </span></td>
      </tr>
      <tr>
        <td id="L3594" class="blob-num js-line-number" data-line-number="3594"></td>
        <td id="LC3594" class="blob-code js-file-line">      <span class="k">var</span> timeoutPromise;</td>
      </tr>
      <tr>
        <td id="L3595" class="blob-num js-line-number" data-line-number="3595"></td>
        <td id="LC3595" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3596" class="blob-num js-line-number" data-line-number="3596"></td>
        <td id="LC3596" class="blob-code js-file-line">      <span class="c1">//plug into $parsers pipeline to open a typeahead on view changes initiated from DOM</span></td>
      </tr>
      <tr>
        <td id="L3597" class="blob-num js-line-number" data-line-number="3597"></td>
        <td id="LC3597" class="blob-code js-file-line">      <span class="c1">//$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue</span></td>
      </tr>
      <tr>
        <td id="L3598" class="blob-num js-line-number" data-line-number="3598"></td>
        <td id="LC3598" class="blob-code js-file-line">      modelCtrl.$parsers.<span class="nf">unshift</span>(<span class="kt">function</span> (<span class="nv">inputValue</span>) {</td>
      </tr>
      <tr>
        <td id="L3599" class="blob-num js-line-number" data-line-number="3599"></td>
        <td id="LC3599" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3600" class="blob-num js-line-number" data-line-number="3600"></td>
        <td id="LC3600" class="blob-code js-file-line">        hasFocus <span class="o">=</span> <span class="kc">true</span>;</td>
      </tr>
      <tr>
        <td id="L3601" class="blob-num js-line-number" data-line-number="3601"></td>
        <td id="LC3601" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3602" class="blob-num js-line-number" data-line-number="3602"></td>
        <td id="LC3602" class="blob-code js-file-line">        <span class="k">if</span> (inputValue <span class="o">&amp;&amp;</span> inputValue.<span class="no">length</span> <span class="o">&gt;=</span> minSearch) {</td>
      </tr>
      <tr>
        <td id="L3603" class="blob-num js-line-number" data-line-number="3603"></td>
        <td id="LC3603" class="blob-code js-file-line">          <span class="k">if</span> (waitTime <span class="o">&gt;</span> <span class="m">0</span>) {</td>
      </tr>
      <tr>
        <td id="L3604" class="blob-num js-line-number" data-line-number="3604"></td>
        <td id="LC3604" class="blob-code js-file-line">            <span class="k">if</span> (timeoutPromise) {</td>
      </tr>
      <tr>
        <td id="L3605" class="blob-num js-line-number" data-line-number="3605"></td>
        <td id="LC3605" class="blob-code js-file-line">              $timeout.cancel(timeoutPromise);<span class="c1">//cancel previous timeout</span></td>
      </tr>
      <tr>
        <td id="L3606" class="blob-num js-line-number" data-line-number="3606"></td>
        <td id="LC3606" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L3607" class="blob-num js-line-number" data-line-number="3607"></td>
        <td id="LC3607" class="blob-code js-file-line">            timeoutPromise <span class="o">=</span> $timeout(<span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L3608" class="blob-num js-line-number" data-line-number="3608"></td>
        <td id="LC3608" class="blob-code js-file-line">              getMatchesAsync(inputValue);</td>
      </tr>
      <tr>
        <td id="L3609" class="blob-num js-line-number" data-line-number="3609"></td>
        <td id="LC3609" class="blob-code js-file-line">            }, waitTime);</td>
      </tr>
      <tr>
        <td id="L3610" class="blob-num js-line-number" data-line-number="3610"></td>
        <td id="LC3610" class="blob-code js-file-line">          } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L3611" class="blob-num js-line-number" data-line-number="3611"></td>
        <td id="LC3611" class="blob-code js-file-line">            getMatchesAsync(inputValue);</td>
      </tr>
      <tr>
        <td id="L3612" class="blob-num js-line-number" data-line-number="3612"></td>
        <td id="LC3612" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L3613" class="blob-num js-line-number" data-line-number="3613"></td>
        <td id="LC3613" class="blob-code js-file-line">        } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L3614" class="blob-num js-line-number" data-line-number="3614"></td>
        <td id="LC3614" class="blob-code js-file-line">          isLoadingSetter(originalScope, <span class="kc">false</span>);</td>
      </tr>
      <tr>
        <td id="L3615" class="blob-num js-line-number" data-line-number="3615"></td>
        <td id="LC3615" class="blob-code js-file-line">          resetMatches();</td>
      </tr>
      <tr>
        <td id="L3616" class="blob-num js-line-number" data-line-number="3616"></td>
        <td id="LC3616" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L3617" class="blob-num js-line-number" data-line-number="3617"></td>
        <td id="LC3617" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3618" class="blob-num js-line-number" data-line-number="3618"></td>
        <td id="LC3618" class="blob-code js-file-line">        <span class="k">if</span> (isEditable) {</td>
      </tr>
      <tr>
        <td id="L3619" class="blob-num js-line-number" data-line-number="3619"></td>
        <td id="LC3619" class="blob-code js-file-line">          <span class="k">return</span> inputValue;</td>
      </tr>
      <tr>
        <td id="L3620" class="blob-num js-line-number" data-line-number="3620"></td>
        <td id="LC3620" class="blob-code js-file-line">        } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L3621" class="blob-num js-line-number" data-line-number="3621"></td>
        <td id="LC3621" class="blob-code js-file-line">          <span class="k">if</span> (<span class="o">!</span>inputValue) {</td>
      </tr>
      <tr>
        <td id="L3622" class="blob-num js-line-number" data-line-number="3622"></td>
        <td id="LC3622" class="blob-code js-file-line">            <span class="c1">// Reset in case user had typed something previously.</span></td>
      </tr>
      <tr>
        <td id="L3623" class="blob-num js-line-number" data-line-number="3623"></td>
        <td id="LC3623" class="blob-code js-file-line">            modelCtrl.$setValidity(<span class="s1">'editable'</span>, <span class="kc">true</span>);</td>
      </tr>
      <tr>
        <td id="L3624" class="blob-num js-line-number" data-line-number="3624"></td>
        <td id="LC3624" class="blob-code js-file-line">            <span class="k">return</span> inputValue;</td>
      </tr>
      <tr>
        <td id="L3625" class="blob-num js-line-number" data-line-number="3625"></td>
        <td id="LC3625" class="blob-code js-file-line">          } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L3626" class="blob-num js-line-number" data-line-number="3626"></td>
        <td id="LC3626" class="blob-code js-file-line">            modelCtrl.$setValidity(<span class="s1">'editable'</span>, <span class="kc">false</span>);</td>
      </tr>
      <tr>
        <td id="L3627" class="blob-num js-line-number" data-line-number="3627"></td>
        <td id="LC3627" class="blob-code js-file-line">            <span class="k">return</span> <span class="kc">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L3628" class="blob-num js-line-number" data-line-number="3628"></td>
        <td id="LC3628" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L3629" class="blob-num js-line-number" data-line-number="3629"></td>
        <td id="LC3629" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L3630" class="blob-num js-line-number" data-line-number="3630"></td>
        <td id="LC3630" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L3631" class="blob-num js-line-number" data-line-number="3631"></td>
        <td id="LC3631" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3632" class="blob-num js-line-number" data-line-number="3632"></td>
        <td id="LC3632" class="blob-code js-file-line">      modelCtrl.$formatters.<span class="nf">push</span>(<span class="kt">function</span> (<span class="nv">modelValue</span>) {</td>
      </tr>
      <tr>
        <td id="L3633" class="blob-num js-line-number" data-line-number="3633"></td>
        <td id="LC3633" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3634" class="blob-num js-line-number" data-line-number="3634"></td>
        <td id="LC3634" class="blob-code js-file-line">        <span class="k">var</span> candidateViewValue, emptyViewValue;</td>
      </tr>
      <tr>
        <td id="L3635" class="blob-num js-line-number" data-line-number="3635"></td>
        <td id="LC3635" class="blob-code js-file-line">        <span class="k">var</span> locals <span class="o">=</span> {};</td>
      </tr>
      <tr>
        <td id="L3636" class="blob-num js-line-number" data-line-number="3636"></td>
        <td id="LC3636" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3637" class="blob-num js-line-number" data-line-number="3637"></td>
        <td id="LC3637" class="blob-code js-file-line">        <span class="k">if</span> (inputFormatter) {</td>
      </tr>
      <tr>
        <td id="L3638" class="blob-num js-line-number" data-line-number="3638"></td>
        <td id="LC3638" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3639" class="blob-num js-line-number" data-line-number="3639"></td>
        <td id="LC3639" class="blob-code js-file-line">          locals[<span class="s1">'$model'</span>] <span class="o">=</span> modelValue;</td>
      </tr>
      <tr>
        <td id="L3640" class="blob-num js-line-number" data-line-number="3640"></td>
        <td id="LC3640" class="blob-code js-file-line">          <span class="k">return</span> inputFormatter(originalScope, locals);</td>
      </tr>
      <tr>
        <td id="L3641" class="blob-num js-line-number" data-line-number="3641"></td>
        <td id="LC3641" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3642" class="blob-num js-line-number" data-line-number="3642"></td>
        <td id="LC3642" class="blob-code js-file-line">        } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L3643" class="blob-num js-line-number" data-line-number="3643"></td>
        <td id="LC3643" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3644" class="blob-num js-line-number" data-line-number="3644"></td>
        <td id="LC3644" class="blob-code js-file-line">          <span class="c1">//it might happen that we don't have enough info to properly render input value</span></td>
      </tr>
      <tr>
        <td id="L3645" class="blob-num js-line-number" data-line-number="3645"></td>
        <td id="LC3645" class="blob-code js-file-line">          <span class="c1">//we need to check for this situation and simply return model value if we can't apply custom formatting</span></td>
      </tr>
      <tr>
        <td id="L3646" class="blob-num js-line-number" data-line-number="3646"></td>
        <td id="LC3646" class="blob-code js-file-line">          locals[parserResult.itemName] <span class="o">=</span> modelValue;</td>
      </tr>
      <tr>
        <td id="L3647" class="blob-num js-line-number" data-line-number="3647"></td>
        <td id="LC3647" class="blob-code js-file-line">          candidateViewValue <span class="o">=</span> parserResult.viewMapper(originalScope, locals);</td>
      </tr>
      <tr>
        <td id="L3648" class="blob-num js-line-number" data-line-number="3648"></td>
        <td id="LC3648" class="blob-code js-file-line">          locals[parserResult.itemName] <span class="o">=</span> <span class="kc">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L3649" class="blob-num js-line-number" data-line-number="3649"></td>
        <td id="LC3649" class="blob-code js-file-line">          emptyViewValue <span class="o">=</span> parserResult.viewMapper(originalScope, locals);</td>
      </tr>
      <tr>
        <td id="L3650" class="blob-num js-line-number" data-line-number="3650"></td>
        <td id="LC3650" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3651" class="blob-num js-line-number" data-line-number="3651"></td>
        <td id="LC3651" class="blob-code js-file-line">          <span class="k">return</span> candidateViewValue<span class="o">!==</span> emptyViewValue <span class="o">?</span> candidateViewValue <span class="o">:</span> modelValue;</td>
      </tr>
      <tr>
        <td id="L3652" class="blob-num js-line-number" data-line-number="3652"></td>
        <td id="LC3652" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L3653" class="blob-num js-line-number" data-line-number="3653"></td>
        <td id="LC3653" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L3654" class="blob-num js-line-number" data-line-number="3654"></td>
        <td id="LC3654" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3655" class="blob-num js-line-number" data-line-number="3655"></td>
        <td id="LC3655" class="blob-code js-file-line">      <span class="no">scope</span>.<span class="nf">select</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">activeIdx</span>) {</td>
      </tr>
      <tr>
        <td id="L3656" class="blob-num js-line-number" data-line-number="3656"></td>
        <td id="LC3656" class="blob-code js-file-line">        <span class="c1">//called from within the $digest() cycle</span></td>
      </tr>
      <tr>
        <td id="L3657" class="blob-num js-line-number" data-line-number="3657"></td>
        <td id="LC3657" class="blob-code js-file-line">        <span class="k">var</span> locals <span class="o">=</span> {};</td>
      </tr>
      <tr>
        <td id="L3658" class="blob-num js-line-number" data-line-number="3658"></td>
        <td id="LC3658" class="blob-code js-file-line">        <span class="k">var</span> model, item;</td>
      </tr>
      <tr>
        <td id="L3659" class="blob-num js-line-number" data-line-number="3659"></td>
        <td id="LC3659" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3660" class="blob-num js-line-number" data-line-number="3660"></td>
        <td id="LC3660" class="blob-code js-file-line">        locals[parserResult.itemName] <span class="o">=</span> item <span class="o">=</span> scope.matches[activeIdx].model;</td>
      </tr>
      <tr>
        <td id="L3661" class="blob-num js-line-number" data-line-number="3661"></td>
        <td id="LC3661" class="blob-code js-file-line">        model <span class="o">=</span> parserResult.modelMapper(originalScope, locals);</td>
      </tr>
      <tr>
        <td id="L3662" class="blob-num js-line-number" data-line-number="3662"></td>
        <td id="LC3662" class="blob-code js-file-line">        $setModelValue(originalScope, model);</td>
      </tr>
      <tr>
        <td id="L3663" class="blob-num js-line-number" data-line-number="3663"></td>
        <td id="LC3663" class="blob-code js-file-line">        modelCtrl.$setValidity(<span class="s1">'editable'</span>, <span class="kc">true</span>);</td>
      </tr>
      <tr>
        <td id="L3664" class="blob-num js-line-number" data-line-number="3664"></td>
        <td id="LC3664" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3665" class="blob-num js-line-number" data-line-number="3665"></td>
        <td id="LC3665" class="blob-code js-file-line">        onSelectCallback(originalScope, {</td>
      </tr>
      <tr>
        <td id="L3666" class="blob-num js-line-number" data-line-number="3666"></td>
        <td id="LC3666" class="blob-code js-file-line">          $item<span class="o">:</span> item,</td>
      </tr>
      <tr>
        <td id="L3667" class="blob-num js-line-number" data-line-number="3667"></td>
        <td id="LC3667" class="blob-code js-file-line">          $model<span class="o">:</span> model,</td>
      </tr>
      <tr>
        <td id="L3668" class="blob-num js-line-number" data-line-number="3668"></td>
        <td id="LC3668" class="blob-code js-file-line">          $label<span class="o">:</span> parserResult.viewMapper(originalScope, locals)</td>
      </tr>
      <tr>
        <td id="L3669" class="blob-num js-line-number" data-line-number="3669"></td>
        <td id="LC3669" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L3670" class="blob-num js-line-number" data-line-number="3670"></td>
        <td id="LC3670" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3671" class="blob-num js-line-number" data-line-number="3671"></td>
        <td id="LC3671" class="blob-code js-file-line">        resetMatches();</td>
      </tr>
      <tr>
        <td id="L3672" class="blob-num js-line-number" data-line-number="3672"></td>
        <td id="LC3672" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3673" class="blob-num js-line-number" data-line-number="3673"></td>
        <td id="LC3673" class="blob-code js-file-line">        <span class="c1">//return focus to the input element if a match was selected via a mouse click event</span></td>
      </tr>
      <tr>
        <td id="L3674" class="blob-num js-line-number" data-line-number="3674"></td>
        <td id="LC3674" class="blob-code js-file-line">        <span class="c1">// use timeout to avoid $rootScope:inprog error</span></td>
      </tr>
      <tr>
        <td id="L3675" class="blob-num js-line-number" data-line-number="3675"></td>
        <td id="LC3675" class="blob-code js-file-line">        $timeout(<span class="kt">function</span>() { element[<span class="m">0</span>].<span class="nf">focus</span>(); }, <span class="m">0</span>, <span class="kc">false</span>);</td>
      </tr>
      <tr>
        <td id="L3676" class="blob-num js-line-number" data-line-number="3676"></td>
        <td id="LC3676" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L3677" class="blob-num js-line-number" data-line-number="3677"></td>
        <td id="LC3677" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3678" class="blob-num js-line-number" data-line-number="3678"></td>
        <td id="LC3678" class="blob-code js-file-line">      <span class="c1">//bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)</span></td>
      </tr>
      <tr>
        <td id="L3679" class="blob-num js-line-number" data-line-number="3679"></td>
        <td id="LC3679" class="blob-code js-file-line">      element.bind(<span class="s1">'keydown'</span>, <span class="kt">function</span> (<span class="nv">evt</span>) {</td>
      </tr>
      <tr>
        <td id="L3680" class="blob-num js-line-number" data-line-number="3680"></td>
        <td id="LC3680" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3681" class="blob-num js-line-number" data-line-number="3681"></td>
        <td id="LC3681" class="blob-code js-file-line">        <span class="c1">//typeahead is open and an &quot;interesting&quot; key was pressed</span></td>
      </tr>
      <tr>
        <td id="L3682" class="blob-num js-line-number" data-line-number="3682"></td>
        <td id="LC3682" class="blob-code js-file-line">        <span class="k">if</span> (scope.matches.<span class="no">length</span> <span class="o">===</span> <span class="m">0</span> <span class="o">||</span> HOT_KEYS.<span class="nf">indexOf</span>(evt.which) <span class="o">===</span> <span class="o">-</span><span class="m">1</span>) {</td>
      </tr>
      <tr>
        <td id="L3683" class="blob-num js-line-number" data-line-number="3683"></td>
        <td id="LC3683" class="blob-code js-file-line">          <span class="k">return</span>;</td>
      </tr>
      <tr>
        <td id="L3684" class="blob-num js-line-number" data-line-number="3684"></td>
        <td id="LC3684" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L3685" class="blob-num js-line-number" data-line-number="3685"></td>
        <td id="LC3685" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3686" class="blob-num js-line-number" data-line-number="3686"></td>
        <td id="LC3686" class="blob-code js-file-line">        evt.preventDefault();</td>
      </tr>
      <tr>
        <td id="L3687" class="blob-num js-line-number" data-line-number="3687"></td>
        <td id="LC3687" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3688" class="blob-num js-line-number" data-line-number="3688"></td>
        <td id="LC3688" class="blob-code js-file-line">        <span class="k">if</span> (evt.which <span class="o">===</span> <span class="m">40</span>) {</td>
      </tr>
      <tr>
        <td id="L3689" class="blob-num js-line-number" data-line-number="3689"></td>
        <td id="LC3689" class="blob-code js-file-line">          scope.activeIdx <span class="o">=</span> (scope.activeIdx <span class="o">+</span> <span class="m">1</span>) <span class="o">%</span> scope.matches.<span class="no">length</span>;</td>
      </tr>
      <tr>
        <td id="L3690" class="blob-num js-line-number" data-line-number="3690"></td>
        <td id="LC3690" class="blob-code js-file-line">          scope.$digest();</td>
      </tr>
      <tr>
        <td id="L3691" class="blob-num js-line-number" data-line-number="3691"></td>
        <td id="LC3691" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3692" class="blob-num js-line-number" data-line-number="3692"></td>
        <td id="LC3692" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (evt.which <span class="o">===</span> <span class="m">38</span>) {</td>
      </tr>
      <tr>
        <td id="L3693" class="blob-num js-line-number" data-line-number="3693"></td>
        <td id="LC3693" class="blob-code js-file-line">          scope.activeIdx <span class="o">=</span> (scope.activeIdx <span class="o">?</span> scope.activeIdx <span class="o">:</span> scope.matches.<span class="no">length</span>) <span class="o">-</span> <span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L3694" class="blob-num js-line-number" data-line-number="3694"></td>
        <td id="LC3694" class="blob-code js-file-line">          scope.$digest();</td>
      </tr>
      <tr>
        <td id="L3695" class="blob-num js-line-number" data-line-number="3695"></td>
        <td id="LC3695" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3696" class="blob-num js-line-number" data-line-number="3696"></td>
        <td id="LC3696" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (evt.which <span class="o">===</span> <span class="m">13</span> <span class="o">||</span> evt.which <span class="o">===</span> <span class="m">9</span>) {</td>
      </tr>
      <tr>
        <td id="L3697" class="blob-num js-line-number" data-line-number="3697"></td>
        <td id="LC3697" class="blob-code js-file-line">          scope.$<span class="nf">apply</span>(<span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L3698" class="blob-num js-line-number" data-line-number="3698"></td>
        <td id="LC3698" class="blob-code js-file-line">            scope.<span class="nf">select</span>(scope.activeIdx);</td>
      </tr>
      <tr>
        <td id="L3699" class="blob-num js-line-number" data-line-number="3699"></td>
        <td id="LC3699" class="blob-code js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L3700" class="blob-num js-line-number" data-line-number="3700"></td>
        <td id="LC3700" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3701" class="blob-num js-line-number" data-line-number="3701"></td>
        <td id="LC3701" class="blob-code js-file-line">        } <span class="k">else</span> <span class="k">if</span> (evt.which <span class="o">===</span> <span class="m">27</span>) {</td>
      </tr>
      <tr>
        <td id="L3702" class="blob-num js-line-number" data-line-number="3702"></td>
        <td id="LC3702" class="blob-code js-file-line">          evt.stopPropagation();</td>
      </tr>
      <tr>
        <td id="L3703" class="blob-num js-line-number" data-line-number="3703"></td>
        <td id="LC3703" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3704" class="blob-num js-line-number" data-line-number="3704"></td>
        <td id="LC3704" class="blob-code js-file-line">          resetMatches();</td>
      </tr>
      <tr>
        <td id="L3705" class="blob-num js-line-number" data-line-number="3705"></td>
        <td id="LC3705" class="blob-code js-file-line">          scope.$digest();</td>
      </tr>
      <tr>
        <td id="L3706" class="blob-num js-line-number" data-line-number="3706"></td>
        <td id="LC3706" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L3707" class="blob-num js-line-number" data-line-number="3707"></td>
        <td id="LC3707" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L3708" class="blob-num js-line-number" data-line-number="3708"></td>
        <td id="LC3708" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3709" class="blob-num js-line-number" data-line-number="3709"></td>
        <td id="LC3709" class="blob-code js-file-line">      element.bind(<span class="s1">'blur'</span>, <span class="kt">function</span> (<span class="nv">evt</span>) {</td>
      </tr>
      <tr>
        <td id="L3710" class="blob-num js-line-number" data-line-number="3710"></td>
        <td id="LC3710" class="blob-code js-file-line">        hasFocus <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L3711" class="blob-num js-line-number" data-line-number="3711"></td>
        <td id="LC3711" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L3712" class="blob-num js-line-number" data-line-number="3712"></td>
        <td id="LC3712" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3713" class="blob-num js-line-number" data-line-number="3713"></td>
        <td id="LC3713" class="blob-code js-file-line">      <span class="c1">// Keep reference to click handler to unbind it.</span></td>
      </tr>
      <tr>
        <td id="L3714" class="blob-num js-line-number" data-line-number="3714"></td>
        <td id="LC3714" class="blob-code js-file-line">      <span class="k">var</span> <span class="nf">dismissClickHandler</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">evt</span>) {</td>
      </tr>
      <tr>
        <td id="L3715" class="blob-num js-line-number" data-line-number="3715"></td>
        <td id="LC3715" class="blob-code js-file-line">        <span class="k">if</span> (element[<span class="m">0</span>] <span class="o">!==</span> evt.<span class="no">target</span>) {</td>
      </tr>
      <tr>
        <td id="L3716" class="blob-num js-line-number" data-line-number="3716"></td>
        <td id="LC3716" class="blob-code js-file-line">          resetMatches();</td>
      </tr>
      <tr>
        <td id="L3717" class="blob-num js-line-number" data-line-number="3717"></td>
        <td id="LC3717" class="blob-code js-file-line">          scope.$digest();</td>
      </tr>
      <tr>
        <td id="L3718" class="blob-num js-line-number" data-line-number="3718"></td>
        <td id="LC3718" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L3719" class="blob-num js-line-number" data-line-number="3719"></td>
        <td id="LC3719" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L3720" class="blob-num js-line-number" data-line-number="3720"></td>
        <td id="LC3720" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3721" class="blob-num js-line-number" data-line-number="3721"></td>
        <td id="LC3721" class="blob-code js-file-line">      $<span class="no">document</span>.bind(<span class="s1">'click'</span>, dismissClickHandler);</td>
      </tr>
      <tr>
        <td id="L3722" class="blob-num js-line-number" data-line-number="3722"></td>
        <td id="LC3722" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3723" class="blob-num js-line-number" data-line-number="3723"></td>
        <td id="LC3723" class="blob-code js-file-line">      originalScope.$on(<span class="s1">'$destroy'</span>, <span class="kt">function</span>(){</td>
      </tr>
      <tr>
        <td id="L3724" class="blob-num js-line-number" data-line-number="3724"></td>
        <td id="LC3724" class="blob-code js-file-line">        $<span class="no">document</span>.unbind(<span class="s1">'click'</span>, dismissClickHandler);</td>
      </tr>
      <tr>
        <td id="L3725" class="blob-num js-line-number" data-line-number="3725"></td>
        <td id="LC3725" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L3726" class="blob-num js-line-number" data-line-number="3726"></td>
        <td id="LC3726" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3727" class="blob-num js-line-number" data-line-number="3727"></td>
        <td id="LC3727" class="blob-code js-file-line">      <span class="k">var</span> $popup <span class="o">=</span> $<span class="nf">compile</span>(popUpEl)(scope);</td>
      </tr>
      <tr>
        <td id="L3728" class="blob-num js-line-number" data-line-number="3728"></td>
        <td id="LC3728" class="blob-code js-file-line">      <span class="k">if</span> ( appendToBody ) {</td>
      </tr>
      <tr>
        <td id="L3729" class="blob-num js-line-number" data-line-number="3729"></td>
        <td id="LC3729" class="blob-code js-file-line">        $<span class="no">document</span>.<span class="nf">find</span>(<span class="s1">'body'</span>).append($popup);</td>
      </tr>
      <tr>
        <td id="L3730" class="blob-num js-line-number" data-line-number="3730"></td>
        <td id="LC3730" class="blob-code js-file-line">      } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L3731" class="blob-num js-line-number" data-line-number="3731"></td>
        <td id="LC3731" class="blob-code js-file-line">        element.after($popup);</td>
      </tr>
      <tr>
        <td id="L3732" class="blob-num js-line-number" data-line-number="3732"></td>
        <td id="LC3732" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L3733" class="blob-num js-line-number" data-line-number="3733"></td>
        <td id="LC3733" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L3734" class="blob-num js-line-number" data-line-number="3734"></td>
        <td id="LC3734" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L3735" class="blob-num js-line-number" data-line-number="3735"></td>
        <td id="LC3735" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3736" class="blob-num js-line-number" data-line-number="3736"></td>
        <td id="LC3736" class="blob-code js-file-line">}])</td>
      </tr>
      <tr>
        <td id="L3737" class="blob-num js-line-number" data-line-number="3737"></td>
        <td id="LC3737" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3738" class="blob-num js-line-number" data-line-number="3738"></td>
        <td id="LC3738" class="blob-code js-file-line">  .directive(<span class="s1">'typeaheadPopup'</span>, <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L3739" class="blob-num js-line-number" data-line-number="3739"></td>
        <td id="LC3739" class="blob-code js-file-line">    <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L3740" class="blob-num js-line-number" data-line-number="3740"></td>
        <td id="LC3740" class="blob-code js-file-line">      restrict<span class="o">:</span><span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L3741" class="blob-num js-line-number" data-line-number="3741"></td>
        <td id="LC3741" class="blob-code js-file-line">      scope<span class="o">:</span>{</td>
      </tr>
      <tr>
        <td id="L3742" class="blob-num js-line-number" data-line-number="3742"></td>
        <td id="LC3742" class="blob-code js-file-line">        matches<span class="o">:</span><span class="s1">'='</span>,</td>
      </tr>
      <tr>
        <td id="L3743" class="blob-num js-line-number" data-line-number="3743"></td>
        <td id="LC3743" class="blob-code js-file-line">        query<span class="o">:</span><span class="s1">'='</span>,</td>
      </tr>
      <tr>
        <td id="L3744" class="blob-num js-line-number" data-line-number="3744"></td>
        <td id="LC3744" class="blob-code js-file-line">        active<span class="o">:</span><span class="s1">'='</span>,</td>
      </tr>
      <tr>
        <td id="L3745" class="blob-num js-line-number" data-line-number="3745"></td>
        <td id="LC3745" class="blob-code js-file-line">        position<span class="o">:</span><span class="s1">'='</span>,</td>
      </tr>
      <tr>
        <td id="L3746" class="blob-num js-line-number" data-line-number="3746"></td>
        <td id="LC3746" class="blob-code js-file-line">        select<span class="o">:</span><span class="s1">'&amp;'</span></td>
      </tr>
      <tr>
        <td id="L3747" class="blob-num js-line-number" data-line-number="3747"></td>
        <td id="LC3747" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L3748" class="blob-num js-line-number" data-line-number="3748"></td>
        <td id="LC3748" class="blob-code js-file-line">      replace<span class="o">:</span><span class="kc">true</span>,</td>
      </tr>
      <tr>
        <td id="L3749" class="blob-num js-line-number" data-line-number="3749"></td>
        <td id="LC3749" class="blob-code js-file-line">      templateUrl<span class="o">:</span><span class="s1">'template/typeahead/typeahead-popup.html'</span>,</td>
      </tr>
      <tr>
        <td id="L3750" class="blob-num js-line-number" data-line-number="3750"></td>
        <td id="LC3750" class="blob-code js-file-line">      <span class="nf">link</span>:<span class="kt">function</span> (<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>) {</td>
      </tr>
      <tr>
        <td id="L3751" class="blob-num js-line-number" data-line-number="3751"></td>
        <td id="LC3751" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3752" class="blob-num js-line-number" data-line-number="3752"></td>
        <td id="LC3752" class="blob-code js-file-line">        scope.templateUrl <span class="o">=</span> attrs.templateUrl;</td>
      </tr>
      <tr>
        <td id="L3753" class="blob-num js-line-number" data-line-number="3753"></td>
        <td id="LC3753" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3754" class="blob-num js-line-number" data-line-number="3754"></td>
        <td id="LC3754" class="blob-code js-file-line">        <span class="no">scope</span>.<span class="nf">isOpen</span> <span class="o">=</span> <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L3755" class="blob-num js-line-number" data-line-number="3755"></td>
        <td id="LC3755" class="blob-code js-file-line">          <span class="k">return</span> scope.matches.<span class="no">length</span> <span class="o">&gt;</span> <span class="m">0</span>;</td>
      </tr>
      <tr>
        <td id="L3756" class="blob-num js-line-number" data-line-number="3756"></td>
        <td id="LC3756" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L3757" class="blob-num js-line-number" data-line-number="3757"></td>
        <td id="LC3757" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3758" class="blob-num js-line-number" data-line-number="3758"></td>
        <td id="LC3758" class="blob-code js-file-line">        <span class="no">scope</span>.<span class="nf">isActive</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">matchIdx</span>) {</td>
      </tr>
      <tr>
        <td id="L3759" class="blob-num js-line-number" data-line-number="3759"></td>
        <td id="LC3759" class="blob-code js-file-line">          <span class="k">return</span> scope.active <span class="o">==</span> matchIdx;</td>
      </tr>
      <tr>
        <td id="L3760" class="blob-num js-line-number" data-line-number="3760"></td>
        <td id="LC3760" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L3761" class="blob-num js-line-number" data-line-number="3761"></td>
        <td id="LC3761" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3762" class="blob-num js-line-number" data-line-number="3762"></td>
        <td id="LC3762" class="blob-code js-file-line">        <span class="no">scope</span>.<span class="nf">selectActive</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">matchIdx</span>) {</td>
      </tr>
      <tr>
        <td id="L3763" class="blob-num js-line-number" data-line-number="3763"></td>
        <td id="LC3763" class="blob-code js-file-line">          scope.active <span class="o">=</span> matchIdx;</td>
      </tr>
      <tr>
        <td id="L3764" class="blob-num js-line-number" data-line-number="3764"></td>
        <td id="LC3764" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L3765" class="blob-num js-line-number" data-line-number="3765"></td>
        <td id="LC3765" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3766" class="blob-num js-line-number" data-line-number="3766"></td>
        <td id="LC3766" class="blob-code js-file-line">        <span class="no">scope</span>.<span class="nf">selectMatch</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">activeIdx</span>) {</td>
      </tr>
      <tr>
        <td id="L3767" class="blob-num js-line-number" data-line-number="3767"></td>
        <td id="LC3767" class="blob-code js-file-line">          scope.<span class="nf">select</span>({activeIdx<span class="o">:</span>activeIdx});</td>
      </tr>
      <tr>
        <td id="L3768" class="blob-num js-line-number" data-line-number="3768"></td>
        <td id="LC3768" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L3769" class="blob-num js-line-number" data-line-number="3769"></td>
        <td id="LC3769" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L3770" class="blob-num js-line-number" data-line-number="3770"></td>
        <td id="LC3770" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L3771" class="blob-num js-line-number" data-line-number="3771"></td>
        <td id="LC3771" class="blob-code js-file-line">  })</td>
      </tr>
      <tr>
        <td id="L3772" class="blob-num js-line-number" data-line-number="3772"></td>
        <td id="LC3772" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3773" class="blob-num js-line-number" data-line-number="3773"></td>
        <td id="LC3773" class="blob-code js-file-line">  .directive(<span class="s1">'typeaheadMatch'</span>, [<span class="s1">'$http'</span>, <span class="s1">'$templateCache'</span>, <span class="s1">'$compile'</span>, <span class="s1">'$parse'</span>, <span class="kt">function</span> (<span class="nv">$http</span>, <span class="nv">$templateCache</span>, <span class="nv">$compile</span>, <span class="nv">$parse</span>) {</td>
      </tr>
      <tr>
        <td id="L3774" class="blob-num js-line-number" data-line-number="3774"></td>
        <td id="LC3774" class="blob-code js-file-line">    <span class="k">return</span> {</td>
      </tr>
      <tr>
        <td id="L3775" class="blob-num js-line-number" data-line-number="3775"></td>
        <td id="LC3775" class="blob-code js-file-line">      restrict<span class="o">:</span><span class="s1">'EA'</span>,</td>
      </tr>
      <tr>
        <td id="L3776" class="blob-num js-line-number" data-line-number="3776"></td>
        <td id="LC3776" class="blob-code js-file-line">      scope<span class="o">:</span>{</td>
      </tr>
      <tr>
        <td id="L3777" class="blob-num js-line-number" data-line-number="3777"></td>
        <td id="LC3777" class="blob-code js-file-line">        index<span class="o">:</span><span class="s1">'='</span>,</td>
      </tr>
      <tr>
        <td id="L3778" class="blob-num js-line-number" data-line-number="3778"></td>
        <td id="LC3778" class="blob-code js-file-line">        match<span class="o">:</span><span class="s1">'='</span>,</td>
      </tr>
      <tr>
        <td id="L3779" class="blob-num js-line-number" data-line-number="3779"></td>
        <td id="LC3779" class="blob-code js-file-line">        query<span class="o">:</span><span class="s1">'='</span></td>
      </tr>
      <tr>
        <td id="L3780" class="blob-num js-line-number" data-line-number="3780"></td>
        <td id="LC3780" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L3781" class="blob-num js-line-number" data-line-number="3781"></td>
        <td id="LC3781" class="blob-code js-file-line">      <span class="nf">link</span>:<span class="kt">function</span> (<span class="nv">scope</span>, <span class="nv">element</span>, <span class="nv">attrs</span>) {</td>
      </tr>
      <tr>
        <td id="L3782" class="blob-num js-line-number" data-line-number="3782"></td>
        <td id="LC3782" class="blob-code js-file-line">        <span class="k">var</span> tplUrl <span class="o">=</span> $<span class="nf">parse</span>(attrs.templateUrl)(scope.$parent) <span class="o">||</span> <span class="s1">'template/typeahead/typeahead-match.html'</span>;</td>
      </tr>
      <tr>
        <td id="L3783" class="blob-num js-line-number" data-line-number="3783"></td>
        <td id="LC3783" class="blob-code js-file-line">        $http.get(tplUrl, {cache<span class="o">:</span> $templateCache}).success(<span class="kt">function</span>(<span class="nv">tplContent</span>){</td>
      </tr>
      <tr>
        <td id="L3784" class="blob-num js-line-number" data-line-number="3784"></td>
        <td id="LC3784" class="blob-code js-file-line">           element.replaceWith($<span class="nf">compile</span>(tplContent.trim())(scope));</td>
      </tr>
      <tr>
        <td id="L3785" class="blob-num js-line-number" data-line-number="3785"></td>
        <td id="LC3785" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L3786" class="blob-num js-line-number" data-line-number="3786"></td>
        <td id="LC3786" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L3787" class="blob-num js-line-number" data-line-number="3787"></td>
        <td id="LC3787" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L3788" class="blob-num js-line-number" data-line-number="3788"></td>
        <td id="LC3788" class="blob-code js-file-line">  }])</td>
      </tr>
      <tr>
        <td id="L3789" class="blob-num js-line-number" data-line-number="3789"></td>
        <td id="LC3789" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3790" class="blob-num js-line-number" data-line-number="3790"></td>
        <td id="LC3790" class="blob-code js-file-line">  .filter(<span class="s1">'typeaheadHighlight'</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3791" class="blob-num js-line-number" data-line-number="3791"></td>
        <td id="LC3791" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3792" class="blob-num js-line-number" data-line-number="3792"></td>
        <td id="LC3792" class="blob-code js-file-line">    <span class="kt">function</span> <span class="nf">escapeRegexp</span>(<span class="nv">queryToEscape</span>) {</td>
      </tr>
      <tr>
        <td id="L3793" class="blob-num js-line-number" data-line-number="3793"></td>
        <td id="LC3793" class="blob-code js-file-line">      <span class="k">return</span> queryToEscape.<span class="nf">replace</span>(<span class="sr">/(<span class="no">[<span class="sc">.</span>?*+^$[<span class="sc">\]\\</span>(){}|-]</span>)/g</span>, <span class="s1">'<span class="sc">\\</span>$1'</span>);</td>
      </tr>
      <tr>
        <td id="L3794" class="blob-num js-line-number" data-line-number="3794"></td>
        <td id="LC3794" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L3795" class="blob-num js-line-number" data-line-number="3795"></td>
        <td id="LC3795" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3796" class="blob-num js-line-number" data-line-number="3796"></td>
        <td id="LC3796" class="blob-code js-file-line">    <span class="k">return</span> <span class="kt">function</span>(<span class="nv">matchItem</span>, <span class="nv">query</span>) {</td>
      </tr>
      <tr>
        <td id="L3797" class="blob-num js-line-number" data-line-number="3797"></td>
        <td id="LC3797" class="blob-code js-file-line">      <span class="k">return</span> query <span class="o">?</span> (<span class="s1">''</span> <span class="o">+</span> matchItem).<span class="nf">replace</span>(<span class="o">new</span> <span class="nc">RegExp</span>(escapeRegexp(query), <span class="s1">'gi'</span>), <span class="s1">'&lt;strong&gt;$&amp;&lt;/strong&gt;'</span>) <span class="o">:</span> matchItem;</td>
      </tr>
      <tr>
        <td id="L3798" class="blob-num js-line-number" data-line-number="3798"></td>
        <td id="LC3798" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L3799" class="blob-num js-line-number" data-line-number="3799"></td>
        <td id="LC3799" class="blob-code js-file-line">  });</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.14092s from github-fe123-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-fe1dc1d9b25d6a0cda010576a3c4be01906c9fd2ac07462042e5fceda326d50c.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-aba45b8411f81a17de91f1837c70a8cb5d105fa6d6db2134e5b19f082a8049ce.js" type="text/javascript"></script>
      
      
  </body>
</html>

