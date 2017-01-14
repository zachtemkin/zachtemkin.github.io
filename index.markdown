---
layout: default
---
<div class="inner">
	{% include site-description.html %}
	<ul class="project-list" id="work">
		{% for post in site.posts reversed %}
		<li class="project-preview" id="{{ post.ID }}">
			<div class="img-wrapper {% if post.photo-img %}img-wrapper--photo-img{% endif %}">
				<img src="{{ post.img | prepend: site.github.url }}" alt="{{ post.title }}">
			</div>
			<div class="info">
				<h3>{{ post.title }}</h3>
				<p class="brief">{{ post.brief }}</p>
				<hr>
				<p class="roles">{{ post.roles }}</p>
				{%
					include zt-button.html
					dir = "right"
					link = post.url
					relUrl = true
					text = "MORE INFO"
				%}
			</div>
		</li>
		{% endfor %}
	</ul>
</div>