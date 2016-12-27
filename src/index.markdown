---
layout: default
---

{% include about.html %}

<ul class="project-container" id="work">
	{% for post in site.posts %}
		<li class="project">
			<div class="img-wrapper">
				<img src="{{ post.img }}" alt="{{ post.title }}">
			</div>
			<div class="info">
				<h3>{{ post.title }}</h3>
				<p>{{ post.brief }}</p>
				<hr>
				<p class="roles">{{ post.roles }}</p>
				<a href="{{ post.url | prepend: baseurl }}" class="zt-button-link slide--next slide"></a>
			</div>
		</li>
	{% endfor %}
</ul>