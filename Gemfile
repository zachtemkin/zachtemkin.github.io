source "https://rubygems.org"
ruby 2.3
require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages'
gem "jekyll-assets"

group :jekyll_plugins do
   gem "jekyll-feed", "~> 0.6"
end
