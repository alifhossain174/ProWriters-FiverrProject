<template>
  <li class="nav-item">
    <Link class="nav-link" :href="route('freelancer.dashboard')">{{
      __("Dashboard")
    }}</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" :href="route('freelancer.tasks.index')">{{
      __("My Tasks")
    }}</Link>
  </li>

  <li class="nav-item" v-if="$page.props.is_bidding_enable">
    <Link class="nav-link" :href="route('freelancer.bidRequests.index')">{{
      __("Bid Requests")
    }}</Link>
  </li>
  <li
    class="nav-item"
    v-if="$page.props.auth_user.is_self_assigning_tasks_enable"
  >
    <Link class="nav-link" :href="route('freelancer.find.work.index')">{{
      __("Find Work")
    }}</Link>
  </li>

  <li class="nav-item">
    <Link class="nav-link" :href="route('freelancer.calendar')">{{
      __("Calendar")
    }}</Link>
  </li>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      id="navbarDropdown"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ __("Earnings") }}
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li>
        <Link
          class="dropdown-item"
          :href="route('freelancer.paymentRequests.create')"
          >{{ __("Request For Payment") }}</Link
        >
      </li>
      <li>
        <Link
          class="dropdown-item"
          :href="route('freelancer.paymentRequests.index')"
          >{{ __("List of Payment Requests") }}</Link
        >
      </li>
    </ul>
  </li>
  <li class="nav-item">
    <Link class="nav-link" :href="route('freelancer.ratings.index')">{{
      __("Ratings")
    }}</Link>
  </li>
</template>

<script>
export default {};
</script>