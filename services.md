---
title: Services
redirect_from:
  - /services/
---
<div class="h-64 bg-right bg-cover" style="background-image: url(../assets/photos/facial_banner.webp)"></div>

<div class="flex flex-col items-center mb-40">
  <h1 class="mt-12 font-bold text-red-600 text-7xl">Facial</h1>
  <!-- Regular Mask Treatment Section -->
  <h2 class="m-10 text-5xl font-semibold lg:m-5">Casmara Exclusive</h2>
  {% for tier in site.data.facial %}
    {% if tier.label == "Premium" %}
      <div class="w-4/5 p-8 mb-6 bg-white border shadow-md lg:w-1/3 border-amber-200 rounded-2xl lg:p-6 lg:mb-4">
        <div class="pb-4 mb-4 border-b border-amber-100">
          <span class="text-5xl font-bold lg:text-3xl">{{ tier.label }}</span>
        </div>
        <ul class="space-y-5 lg:space-y-3">
          {% for mask in tier.masks %}
            <li>
              <div class="flex items-baseline justify-between gap-4">
                <span class="text-3xl font-semibold lg:text-base">{{ mask.name }}</span>
                <span class="text-3xl font-bold text-red-600 lg:text-base shrink-0">{{ mask.price }}</span>
              </div>
              <div class="flex items-baseline justify-between">
                <span class="text-2xl italic text-gray-500 lg:text-sm">({{ mask.property }})</span>
                <span class="text-2xl font-light text-gray-400 lg:text-sm shrink-0">{{ mask.time }}</span>
              </div>
            </li>
          {% endfor %}
          {% for extra in tier.extras %}
            <li>
              <div class="flex items-baseline justify-between gap-4">
                <span class="text-3xl font-semibold lg:text-base">{{ extra.name }}</span>
                <span class="text-3xl font-bold text-red-600 lg:text-base shrink-0">{{ extra.price }}</span>
              </div>
              <div class="flex items-baseline justify-between">
                <span class="text-2xl italic text-gray-500 lg:text-sm">{{ extra.property }}</span>
                <span class="text-2xl font-light text-gray-400 lg:text-sm shrink-0">{{ extra.time }}</span>
              </div>
            </li>
          {% endfor %}
        </ul>
      </div>
    {% else %}
      <div class="w-4/5 p-8 mb-6 bg-white border border-gray-100 shadow-md lg:w-1/3 rounded-2xl lg:p-6 lg:mb-4">
        <div class="pb-4 mb-4 border-b border-gray-100">
          <div class="flex items-baseline justify-between">
            <span class="text-5xl font-bold lg:text-3xl">{{ tier.label }}</span>
            <span class="text-3xl font-light text-gray-400 lg:text-sm">{{ tier.time }}</span>
          </div>
          <span class="text-4xl font-bold text-red-600 lg:text-2xl">{{ tier.price }}</span>
        </div>
        <ul class="space-y-4 lg:space-y-2">
          {% for mask in tier.masks %}
            <li class="text-3xl lg:text-base">
              <div class="flex items-center gap-3">
                <span class="font-semibold">{{ mask.name }}</span>
                {% if mask.recommended %}<span class="text-2xl lg:text-sm font-normal bg-red-50 text-red-500 rounded-full px-3 py-0.5 shrink-0">Recommended</span>{% endif %}
              </div>
              <div class="text-2xl italic text-gray-500 lg:text-sm">({{ mask.property }})</div>
            </li>
          {% endfor %}
        </ul>
        {% if tier.extras %}
          <div class="pt-4 mt-4 space-y-4 border-t border-gray-100 lg:space-y-3">
            {% for extra in tier.extras %}
              <div class="text-3xl lg:text-base">
                <div class="flex items-baseline justify-between gap-4">
                  <span class="font-semibold">{{ extra.name }}</span>
                  <span class="font-bold text-red-600 shrink-0">{{ extra.price }}</span>
                </div>
                <div class="flex items-baseline justify-between">
                  <span class="text-2xl italic text-gray-500 lg:text-sm">{{ extra.property }}</span>
                  <span class="text-2xl font-light text-gray-400 lg:text-sm shrink-0">{{ extra.time }}</span>
                </div>
              </div>
            {% endfor %}
          </div>
        {% endif %}
        {% if tier.addon %}<p class="pt-3 mt-4 text-3xl italic text-gray-400 border-t border-gray-100 lg:text-sm">{{ tier.addon }}</p>{% endif %}
      </div>
    {% endif %}
  {% endfor %}
  <!-- Special Mask Treatment Section -->
  <div class="w-4/5 p-8 mb-6 bg-white border border-gray-100 shadow-md lg:w-1/3 rounded-2xl mt-14 lg:p-6 lg:mt-10 lg:mb-4">
    <div class="pb-4 mb-4 border-b border-gray-100">
      <div class="flex items-baseline justify-between">
        <h2 class="text-5xl font-semibold lg:text-3xl">Deluxe</h2>
        <span class="text-3xl font-light text-gray-400 lg:text-sm">{{ site.data.facial-special.time }}</span>
      </div>
      <span class="text-4xl font-bold text-red-600 lg:text-2xl">{{ site.data.facial-special.price }}</span>
    </div>
    <ul class="space-y-4 lg:space-y-2">
      {% for mask in site.data.facial-special.items %}
        <li class="text-3xl lg:text-base">
          <div class="font-semibold">{{ mask.name }}</div>
          <div class="text-2xl italic text-gray-500 lg:text-sm">{{ mask.property }}</div>
        </li>
      {% endfor %}
    </ul>
  </div>
  <!-- TCM Facial Section -->
  <div class="w-4/5 p-8 mb-6 bg-white border border-gray-100 shadow-md lg:w-1/3 rounded-2xl lg:p-6 lg:mb-4">
    <div class="pb-4 mb-4 border-b border-gray-100">
      <div class="flex items-baseline justify-between">
        <h2 class="text-5xl font-semibold lg:text-3xl">TCM</h2>
        <span class="text-3xl font-light text-gray-400 lg:text-sm">{{ site.data.facial-tcm.time }}</span>
      </div>
      <span class="text-4xl font-bold text-red-600 lg:text-2xl">{{ site.data.facial-tcm.price }}</span>
    </div>
    <ul class="space-y-4 lg:space-y-2">
      {% for mask in site.data.facial-tcm.items %}
        <li class="text-3xl lg:text-base">
          <div class="font-semibold">{{ mask.name }}</div>
          <div class="text-2xl italic text-gray-500 lg:text-sm">{{ mask.property }}</div>
        </li>
      {% endfor %}
    </ul>
  </div>

  <div class="flex items-center justify-center mx-4 my-10 gap-x-6">
    <a href="#contactus" class="p-6 text-4xl font-semibold text-white bg-red-600 rounded-lg lg:text-2xl hover:bg-red-400 lg:p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Consult us</a>
  </div>
</div>


<div class="bg-center bg-cover h-72" style="background-image: url(../assets/photos/massage_banner_1.webp)"></div>

<!-- Body Treatments -->
<div class="flex flex-col items-center mb-40">
  <h1 class="mt-12 font-bold text-red-600 text-7xl">Body Treatments</h1>
  <!-- TCM -->
  <div class="w-4/5 p-8 mb-6 bg-white border border-gray-100 shadow-md lg:w-1/3 rounded-2xl lg:p-6 lg:mb-4">
    <div class="pb-4 mb-4 border-b border-gray-100">
      <h2 class="text-5xl font-semibold lg:text-3xl">TCM</h2>
    </div>
    <ul class="space-y-5 lg:space-y-3">
      {% for mask in site.data.tcm %}
        <li>
          <div class="flex items-baseline justify-between gap-4">
            <span class="text-3xl font-semibold lg:text-base">{{ mask.name }}</span>
            <span class="text-3xl font-bold text-red-600 lg:text-base shrink-0">{{ mask.price }}</span>
          </div>
          <div class="flex items-baseline justify-between">
            <span class="text-2xl italic text-gray-500 lg:text-sm">{{ mask.property }}</span>
            <span class="text-2xl font-light text-gray-400 lg:text-sm shrink-0">{{ mask.time }}</span>
          </div>
        </li>
      {% endfor %}
    </ul>
  </div>
  <!-- Aurora -->
  <div class="w-4/5 p-8 mb-6 bg-white border border-gray-100 shadow-md lg:w-1/3 rounded-2xl lg:p-6 lg:mb-4">
    <div class="pb-4 mb-4 border-b border-gray-100">
      <h2 class="text-5xl font-semibold lg:text-3xl">Aurora (RF) Machine</h2>
    </div>
    <ul class="space-y-5 lg:space-y-3">
      {% for mask in site.data.machine-aurora %}
        <li>
          <div class="flex items-baseline justify-between gap-4">
            <span class="text-3xl font-semibold lg:text-base">{{ mask.name }}</span>
            <span class="text-3xl font-bold text-red-600 lg:text-base shrink-0">{{ mask.price }}</span>
          </div>
          <div class="flex items-baseline justify-between">
            <span class="text-2xl italic text-gray-500 lg:text-sm">{{ mask.property }}</span>
            <span class="text-2xl font-light text-gray-400 lg:text-sm shrink-0">{{ mask.time }}</span>
          </div>
        </li>
      {% endfor %}
    </ul>
  </div>
  <!-- Indiba -->
  <div class="w-4/5 p-8 mb-6 bg-white border border-gray-100 shadow-md lg:w-1/3 rounded-2xl lg:p-6 lg:mb-4">
    <div class="pb-4 mb-4 border-b border-gray-100">
      <h2 class="text-5xl font-semibold lg:text-3xl">Indiba</h2>
    </div>
    <ul class="space-y-5 lg:space-y-3">
      {% for mask in site.data.machine-indiba %}
        <li>
          <div class="flex items-baseline justify-between gap-4">
            <span class="text-3xl font-semibold lg:text-base">{{ mask.name }}</span>
            <span class="text-3xl font-bold text-red-600 lg:text-base shrink-0">{{ mask.price }}</span>
          </div>
          <div class="flex items-baseline justify-between">
            <span class="text-2xl italic text-gray-500 lg:text-sm">{{ mask.property }}</span>
            <span class="text-2xl font-light text-gray-400 lg:text-sm shrink-0">{{ mask.time }}</span>
          </div>
        </li>
      {% endfor %}
    </ul>
  </div>
  <!-- Add On -->
  <div class="w-4/5 p-8 mb-6 bg-white border border-gray-100 shadow-md lg:w-1/3 rounded-2xl lg:p-6 lg:mb-4">
    <div class="pb-4 mb-4 border-b border-gray-100">
      <h2 class="text-5xl font-semibold lg:text-3xl">Add On</h2>
    </div>
    <ul class="space-y-5 lg:space-y-3">
      {% for add_on in site.data.add-ons %}
        <li>
          <div class="flex items-baseline justify-between gap-4">
            <span class="text-3xl font-semibold lg:text-base">{{ add_on.name }}</span>
            <span class="text-3xl font-bold text-red-600 lg:text-base shrink-0">{{ add_on.price }}</span>
          </div>
          <div class="flex items-baseline justify-between">
            <span class="text-2xl italic text-gray-500 lg:text-sm">{{ add_on.property }}</span>
            {% if add_on.time %}<span class="text-2xl font-light text-gray-400 lg:text-sm shrink-0">{{ add_on.time }}</span>{% endif %}
          </div>
        </li>
      {% endfor %}
    </ul>
  </div>
  <div class="flex items-center justify-center mx-4 my-10 gap-x-6">
    <a href="#contactus" class="p-6 text-4xl font-semibold text-white bg-red-600 rounded-lg lg:text-2xl hover:bg-red-400 lg:p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Consult us</a>
  </div>
</div>


<!-- Contact Section -->
<section id="contactus" class="flex flex-col justify-center py-24 my-40 h-96">
  <div class="max-w-4xl mx-auto text-center">
      <h2 class="mb-10 text-6xl font-semibold ">Consult Us</h2>
      <p class="mb-8 text-4xl text-gray-600 lg:text-xl">Call Us: +65 6763 4281<br><br>WhatsApp Us: +65 9698 2281</p>
  </div>
    <div class="flex items-center justify-center mx-4 my-10 gap-x-6">
      <!-- call button -->
      <a href="tel:+6567634281" class="p-6 text-4xl font-semibold text-white bg-red-600 rounded-lg lg:text-2xl hover:bg-red-400 lg:p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Book now</a>
      <!-- whatsapp button -->
      <a href="https://wa.me/6596982281" target="_blank" rel="noopener noreferrer" class="p-6 text-4xl font-semibold text-white bg-green-600 rounded-lg lg:text-2xl lg:p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-green-400">
        <span class="mr-2 fab fa-whatsapp">WhatsApp</span>
      </a>
    </div>
</section>


<!-- <ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul> -->
