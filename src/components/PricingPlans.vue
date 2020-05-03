<template>
  <div>
    <div class="pricing">
      <PricingPlan
        :name="silverPlan.name"
        :amount="silverPlan.amount"
        :features="silverPlan.features"
      />
      <PricingPlan
        :name="bronzePlan.name"
        :amount="bronzePlan.amount"
        :features="bronzePlan.features"
        :isActive="true"
      />
      <PricingPlan
        :name="goldPlan.name"
        :amount="goldPlan.amount"
        :features="goldPlan.features"
        background-color:
        #1e1f57;
      />
    </div>
  </div>
</template>

<script>
import PricingPlan from "./PricingPlan";

export default {
  components: {
    PricingPlan
  },
  data() {
    return {
      silverPlan: {
        amount: "$ 2.99",
        name: "Silver",
        features: [
          {
            id: 1,
            name: "feature 01"
          },
          {
            id: 2,
            name: "feature 02"
          },
          {
            id: 3,
            name: "feature 03"
          },
          {
            id: 4,
            name: "feature 04"
          }
        ]
      },
      bronzePlan: {
        amount: "$ 5.99",
        name: "Bronze",
        features: [
          {
            id: 1,
            name: "feature 01"
          },
          {
            id: 2,
            name: "feature 02"
          },
          {
            id: 3,
            name: "feature 03"
          },
          {
            id: 4,
            name: "feature 04"
          }
        ]
      },
      goldPlan: {
        amount: "$ 9.99",
        name: "Gold",
        features: [
          {
            id: 1,
            name: "feature 01"
          },
          {
            id: 2,
            name: "feature 02"
          },
          {
            id: 3,
            name: "feature 03"
          },
          {
            id: 4,
            name: "feature 04"
          }
        ]
      }
    };
  }
};
</script>

<style>
.pricing {
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

@media only screen and (max-width: 799px) {
  .pricing {
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
