---
layout: default
---
{% include site-description.html %}
<ul class="project-list" id="work">
	{% for post in site.posts reversed %}
	{% if post.categories contains 'portfolio' %}
	<li class="project-preview" id="{{ post.ID }}">
		<a href="{{ post.url }}" class="img-wrapper {% if post.photo-img %}img-wrapper--photo-img{% endif %}" style="background-color: {{post.color}}">
			<img src="{{ post.img | prepend: site.github.url }}" alt="{{ post.title }}">
		</a>
		<div class="info">
			<h3>{{ post.title }}</h3>
			<p class="roles">{{ post.roles }}</p>
			<p class="brief">{{ post.brief }}</p>
			{%
				include zt-button.html
				dir = "right"
				link = post.url
				relUrl = true
				textButton = true
				text = "MORE INFO"
			%}
		</div>
	</li>
	{% endif %}
	{% endfor %}
</ul>