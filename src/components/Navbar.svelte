<header class="header">
    <h1 class="logo"><a href="#">Map Happy</a></h1>
  <ul class="main-nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
  </ul>
    <p>cart</p>
</header> 

<style lang='scss'>
* {
	box-sizing: border-box;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
	color: #34495e;
}

a {
	text-decoration: none;
}
.logo {
	margin: 0;
	font-size: 1.45em;
}

.main-nav {
	margin-top: 5px;

}
.logo a,
.main-nav a {
	padding: 10px 15px;
	text-transform: uppercase;
	text-align: center;
	display: block;
}

.main-nav a {
	color: #34495e;
	font-size: .99em;
}

.main-nav a:hover {
	color: #718daa;
}
.header {
    display: flex;
	padding-top: .5em;
	padding-bottom: .5em;
    margin-bottom: 1em;
	border: 1px solid #a2a2a2;
	background-color: #f4f4f4;
	-webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
	box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
}
.main-nav {
		display: flex;
	}
.header {
    flex-direction: row;
    justify-content: space-between;
}
</style>