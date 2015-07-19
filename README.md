# twitParser

twitParser is a little parser for elements containing tweets and trasnform URLS, @users & #hashtags in real url.

# Options

<pre>$('p').twitParser({
hashtag : 'https://twitter.com/hashtag/',
user    : 'https://twitter.com/',
url     : true
});
</pre>

defaults options are false, specify an url for each parameter for activate parser. Specify 'minify' for url parameter result a little url like 'al.li/e6e4'

# Exemple

<pre>
&lt;body&gt;
	&lt;p&gt;salut&lt;/p&gt;
	&lt;div&gt;&lt;p id='tweet'&gt;Hey! #salutlescopains, c'est le matin avec @lolotte sur http://www.jeuxvideo.com/videos/435016/comprendre-le-potentiel-de-guild-of-dungeoneering-en-trois-minutes.htm!&lt;/p&gt;&lt;/div&gt;
	&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"&gt;&lt;/script&gt;
	&lt;script src="dev/twitParser.js"&gt;&lt;/script&gt;
	&lt;script&gt;
		jQuery(function(){
			$('#tweet').twitParser({user: 'https://twitter.com/', hashtag: 'https://twitter.com/hashtag/', url: 'minify'});
		});
	&lt;/script&gt;
&lt;/body&gt;
</pre>

Output:
<pre>
Hey! 
<a href="https://twitter.com/hashtag/salutlescopains">#salutlescopains</a>, c'est le matin avec <a href="https://twitter.com/lolotte">@lolotte</a>sur <a href="http://www.jeuxvideo.com/videos/435016/comprendre-le-potentiel-de-guild-of-dungeoneering-en-trois-minutes.htm">al.li/e6e4</a>!
</pre>

# Acknowledgments

https://gist.github.com/chitchcock for minifier script
