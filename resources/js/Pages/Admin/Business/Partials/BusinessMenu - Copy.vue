<template>
  <div class="flex-shrink-0 w-100">
    <ul class="list-unstyled ps-0">


      <li class="mb-1" v-for="(item, index) in items" :key="index">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          :data-bs-target="'#selector_' + index"
          aria-expanded="true"
        >
          {{ item.name }}
        </button>
        <div
          class="collapse"
          :class="isRouteGroup(item.route_group)"
          :id="'selector_' + index"
        >
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link
                :href="item.create"
                class="link-dark rounded"
                >{{ __("Create New") }}</Link
              >
            </li>
            <li>
              <Link
                :href="item.list"
                class="link-dark rounded"
                >{{ __("List") }}</Link
              >
            </li>
          </ul>
        </div>
      </li>


      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#assignments"
          aria-expanded="true"
        >
          {{ __("Assignments") }}
        </button>
        <div
          class="collapse"
          :class="isRouteGroup('admin.assignments')"
          id="assignments"
        >
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link
                :href="route('admin.assignments.create')"
                class="link-dark rounded"
                >{{ __("Create New") }}</Link
              >
            </li>
            <li>
              <Link
                :href="route('admin.assignments.index')"
                class="link-dark rounded"
                >{{ __("List") }}</Link
              >
            </li>
          </ul>
        </div>
      </li>

      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#urgencies"
          aria-expanded="true"
        >
          {{ __("Urgencies") }}
        </button>
        <div
          class="collapse"
          :class="isRouteGroup('admin.urgencies')"
          id="urgencies"
        >
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link
                :href="route('admin.urgencies.create')"
                class="link-dark rounded"
                >{{ __("Create New") }}</Link
              >
            </li>
            <li>
              <Link
                :href="route('admin.urgencies.index')"
                class="link-dark rounded"
                >{{ __("List") }}</Link
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#subjects"
          aria-expanded="true"
        >
          {{ __("Subjects") }}
        </button>
        <div
          class="collapse"
          :class="isRouteGroup('admin.subjects')"
          id="subjects"
        >
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link
                :href="route('admin.subjects.create')"
                class="link-dark rounded"
                >{{ __("Create New") }}</Link
              >
            </li>
            <li>
              <Link
                :href="route('admin.subjects.index')"
                class="link-dark rounded"
                >{{ __("List") }}</Link
              >
            </li>
          </ul>
        </div>
      </li>

      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#workLevels"
          aria-expanded="true"
        >
          {{ __("Academic Levels") }}
        </button>
        <div
          class="collapse"
          :class="isRouteGroup('admin.work.levels')"
          id="workLevels"
        >
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link
                :href="route('admin.work.levels.create')"
                class="link-dark rounded"
                >{{ __("Create New") }}</Link
              >
            </li>
            <li>
              <Link
                :href="route('admin.work.levels.index')"
                class="link-dark rounded"
                >{{ __("List") }}</Link
              >
            </li>
          </ul>
        </div>
      </li>

      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#paperFormats"
          aria-expanded="true"
        >
          {{ __("Paper Formats") }}
        </button>
        <div
          class="collapse"
          :class="isRouteGroup('admin.work.levels')"
          id="paperFormats"
        >
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link
                :href="route('admin.work.levels.create')"
                class="link-dark rounded"
                >{{ __("Create New") }}</Link
              >
            </li>
            <li>
              <Link
                :href="route('admin.work.levels.index')"
                class="link-dark rounded"
                >{{ __("List") }}</Link
              >
            </li>
          </ul>
        </div>
      </li>

      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#languages"
          aria-expanded="true"
        >
          {{ __("Languages") }}
        </button>
        <div
          class="collapse"
          :class="isRouteGroup('admin.work.levels')"
          id="languages"
        >
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link
                :href="route('admin.work.levels.create')"
                class="link-dark rounded"
                >{{ __("Create New") }}</Link
              >
            </li>
            <li>
              <Link
                :href="route('admin.work.levels.index')"
                class="link-dark rounded"
                >{{ __("List") }}</Link
              >
            </li>
          </ul>
        </div>
      </li>

      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#writerLevels"
          aria-expanded="true"
        >
          {{ __("Writer Levels") }}
        </button>
        <div
          class="collapse"
          :class="isRouteGroup('admin.work.levels')"
          id="writerLevels"
        >
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link
                :href="route('admin.work.levels.create')"
                class="link-dark rounded"
                >{{ __("Create New") }}</Link
              >
            </li>
            <li>
              <Link
                :href="route('admin.work.levels.index')"
                class="link-dark rounded"
                >{{ __("List") }}</Link
              >
            </li>
          </ul>
        </div>
      </li>

      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#grammaticalPerson"
          aria-expanded="true"
        >
          {{ __("Grammatical Person") }}
        </button>
        <div
          class="collapse"
          :class="isRouteGroup('admin.work.levels')"
          id="grammaticalPerson"
        >
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link
                :href="route('admin.work.levels.create')"
                class="link-dark rounded"
                >{{ __("Create New") }}</Link
              >
            </li>
            <li>
              <Link
                :href="route('admin.work.levels.index')"
                class="link-dark rounded"
                >{{ __("List") }}</Link
              >
            </li>
          </ul>
        </div>
      </li>

      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#additionalServices"
          aria-expanded="true"
        >
          {{ __("Additional Services") }}
        </button>
        <div class="collapse" id="additionalServices">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link
                :href="route('admin.additional.services.create')"
                class="link-dark rounded"
                >{{ __("Create New") }}</Link
              >
            </li>
            <li>
              <Link
                :href="route('admin.additional.services.index')"
                class="link-dark rounded"
                >{{ __("List") }}</Link
              >
            </li>
          </ul>
        </div>
      </li>

      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#serviceLevels"
          aria-expanded="true"
        >
          {{ __("Customer Service Levels") }}
        </button>
        <div
          class="collapse"
          :class="isRouteGroup('admin.service.levels')"
          id="serviceLevels"
        >
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link
                :href="route('admin.service.levels.create')"
                class="link-dark rounded"
                >{{ __("Create New") }}</Link
              >
            </li>
            <li>
              <Link
                :href="route('admin.service.levels.index')"
                class="link-dark rounded"
                >{{ __("List") }}</Link
              >
            </li>
          </ul>
        </div>
      </li>

      <li class="border-top my-3"></li>

      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#home-collapse"
          aria-expanded="true"
        >
          {{ __("Services") }}
        </button>
        <div
          class="collapse"
          :class="isRouteGroup('admin.services')"
          id="home-collapse"
        >
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link
                :href="route('admin.services.choose_type')"
                class="link-dark rounded"
                >{{ __("Create New") }}</Link
              >
            </li>
            <li>
              <Link
                :href="route('admin.services.index')"
                class="link-dark rounded"
                >{{ __("List") }}</Link
              >
            </li>
            <!-- <li>
              <a href="#" class="link-dark rounded">{{ __("Work Levels") }}</a>
            </li> -->
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: this.__("Assignments"),
          create: this.route("admin.assignments.create"),
          list: this.route("admin.assignments.index"),
          route_group : 'admin.assignments',
        },
        {
          name: this.__("Urgencies"),
          create: this.route("admin.urgencies.create"),
          list: this.route("admin.urgencies.index"),
          route_group : 'admin.urgencies',
        },
      ],
    };
  },
  methods: {
    isRouteGroup(r) {
      return route().current(r + ".*") ? "show" : "";
    },
  },
};
</script>