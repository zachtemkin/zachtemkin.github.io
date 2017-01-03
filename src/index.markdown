---
layout: default
---

<div class="inner">
	{% include about.html %}
	<ul class="project-list" id="work">
		{% for post in site.posts %}
			<li class="project-preview">
				<div class="img-wrapper">
					<img src="{{ post.img | relative_url }}" alt="{{ post.title }}">
				</div>
				<div class="info">
					<h3>{{ post.title }}</h3>
					<p class="brief">{{ post.brief }}</p>
					<hr>
					<p class="roles">{{ post.roles }}</p>
					<a href="{{ post.url | relative_url }}" class="zt-button slide--next slide">MORE INFO</a>
				</div>
			</li>
		{% endfor %}
	</ul>
</div>