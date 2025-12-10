<template>
  <div>
    <table>
      <tr>
        <td></td>
        <td>{{}}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
import locationService from "@/services/LocationService";

export default {
  name: 'LocationsTable',

  props: {
    counties: Array


  }
}
</script>