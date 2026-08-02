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
    {% if tier.label == "Gold" %}
      <div class="w-4/5 lg:w-2/5 bg-white border border-amber-200 shadow-md rounded-2xl p-8 mb-6 lg:p-6 lg:mb-4">
        <div class="pb-4 mb-4 border-b border-amber-100">
          <div class="flex justify-between items-baseline">
            <span class="text-5xl font-bold text-amber-600 lg:text-3xl">{{ tier.label }}</span>
            <span class="text-3xl text-gray-400 font-light lg:text-sm">{{ tier.time }}</span>
          </div>
          <span class="text-4xl font-bold text-red-600 lg:text-2xl">{{ tier.price }}</span>
        </div>
        <ul class="space-y-4 lg:space-y-2">
          {% for mask in tier.masks %}
            <li class="text-3xl lg:text-base">
              <div class="font-semibold">{{ mask.name }}</div>
              <div class="italic text-gray-500 text-2xl lg:text-sm">({{ mask.property }})</div>
            </li>
          {% endfor %}
        </ul>
      </div>
    {% else %}
      <div class="w-4/5 lg:w-2/5 bg-white border border-gray-100 shadow-md rounded-2xl p-8 mb-6 lg:p-6 lg:mb-4">
        <div class="pb-4 mb-4 border-b border-gray-100">
          <div class="flex justify-between items-baseline">
            <span class="text-5xl font-bold lg:text-3xl">{{ tier.label }}</span>
            <span class="text-3xl text-gray-400 font-light lg:text-sm">{{ tier.time }}</span>
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
              <div class="italic text-gray-500 text-2xl lg:text-sm">({{ mask.property }})</div>
            </li>
          {% endfor %}
        </ul>
        {% if tier.addon %}<p class="mt-4 pt-3 border-t border-gray-100 text-3xl text-gray-400 italic lg:text-sm">{{ tier.addon }}</p>{% endif %}
      </div>
    {% endif %}
  {% endfor %}
  <!-- Special Mask Treatment Section -->
  <h2 class="m-10 mt-20 text-5xl font-semibold lg:m-5">Delux Treatment</h2>
  {% for mask in site.data.facial-special %}
    <div class="grid w-2/3 grid-cols-6 m-2 my-4 text-4xl lg:text-xl lg:w-1/3 lg:my-2">
      <div class="col-span-5 lg:flex lg:justify-between">
        <div>
          <div class="font-semibold">{{ mask.name }}</div>
          <div class="italic font-light">{{ mask.property }}</div>
        </div>
        <div class="font-light">{{ mask.time }}</div>
      </div>
      <div class="text-right">{{ mask.price }}</div>
    </div>
  {% endfor %}
  <div class="flex items-center justify-center mx-4 my-10 gap-x-6">
    <a href="#contactus" class="p-6 text-4xl font-semibold text-white bg-red-600 rounded-lg lg:text-2xl hover:bg-red-400 lg:p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Consult us</a>
  </div>
</div>


<div class="bg-center bg-cover h-72" style="background-image: url(../assets/photos/massage_banner_1.webp)"></div>

<!-- Body Treatments -->
<div class="flex flex-col items-center mb-40">
  <h1 class="mt-12 font-bold text-red-600 text-7xl">Body Treatments</h1>
  <!-- Aurora -->
  <h2 class="m-10 text-5xl font-semibold lg:m-5">TCM</h2>
  {% for mask in site.data.tcm %}
    <div class="grid w-2/3 grid-cols-6 m-2 my-4 text-4xl lg:text-xl lg:w-1/3 lg:my-2">
      <div class="col-span-5 lg:flex lg:justify-between">
        <div>
          <div class="font-semibold">{{ mask.name }}</div>
          <div class="italic font-light">{{ mask.property }}</div>
        </div>
        <div class="font-light">{{ mask.time }}</div>
      </div>
      <div class="text-right">{{ mask.price }}</div>
    </div>
  {% endfor %}
  <!-- Aurora -->
  <h2 class="m-10 text-5xl font-semibold lg:m-5">Aurora (RF) Machine</h2>
  {% for mask in site.data.machine-aurora %}
    <div class="grid w-2/3 grid-cols-6 m-2 my-4 text-4xl lg:text-xl lg:w-1/3 lg:my-2">
      <div class="col-span-5 lg:flex lg:justify-between">
        <div>
          <div class="font-semibold">{{ mask.name }}</div>
          <div class="italic font-light">{{ mask.property }}</div>
        </div>
        <div class="font-light">{{ mask.time }}</div>
      </div>
      <div class="text-right">{{ mask.price }}</div>
    </div>
  {% endfor %}
  <!-- Indiba -->
  <h2 class="m-10 text-5xl font-semibold lg:m-5">Indiba</h2>
  {% for mask in site.data.machine-indiba %}
    <div class="grid w-2/3 grid-cols-6 m-2 my-4 text-4xl lg:text-xl lg:w-1/3 lg:my-2">
      <div class="col-span-5 lg:flex lg:justify-between">
        <div>
          <div class="font-semibold">{{ mask.name }}</div>
          <div class="italic font-light">{{ mask.property }}</div>
        </div>
        <div class="font-light">{{ mask.time }}</div>
      </div>
      <div class="text-right">{{ mask.price }}</div>
    </div>
  {% endfor %}
  <!-- Add On -->
  <h2 class="m-10 text-5xl font-semibold lg:m-5">Add On</h2>
  {% for add_on in site.data.add-ons %}
    <div class="grid w-2/3 grid-cols-6 m-2 my-4 text-4xl lg:text-xl lg:w-1/3 lg:my-2">
      <div class="col-span-5 lg:flex lg:justify-between">
        <div>
          <div class="font-semibold">{{ add_on.name }}</div>
          <div class="italic font-light">{{ add_on.property }}</div>
        </div>
        <div class="font-light">{{ add_on.time }}</div>
      </div>
      <div class="text-right">{{ add_on.price }}</div>
    </div>
  {% endfor %}
  <div class="flex items-center justify-center mx-4 my-10 gap-x-6">
    <a href="#contactus" class="p-6 text-4xl font-semibold text-white bg-red-600 rounded-lg lg:text-2xl hover:bg-red-400 lg:p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Consult us</a>
  </div>
</div>


<!-- Contact Section -->
<section id="contactus" class="flex flex-col justify-center py-24 my-40 h-96">
  <div class="max-w-4xl mx-auto text-center">
      <h2 class="mb-10 text-6xl font-semibold ">Consult Us</h2>
      <p class="mb-8 text-4xl text-gray-600 lg:text-xl">Book us: +65 6763 4281<br>or<br>Book Appointment WhatsApp: +65 9698 2281</p>
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
