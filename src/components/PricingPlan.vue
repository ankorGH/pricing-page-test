<template>
  <div>
    <div :class="isActive ? 'plan__container active' : 'plan__container'">
      <div class="plan__gradient"></div>

      <h2 class="plan__name">{{ name }}</h2>

      <div class="cost__container">
        <h3 class="cost__amount">{{ amount }}</h3>
        <p class="cost__type">per month</p>
      </div>

      <div class="seperator"></div>

      <ul class="plan__features">
        <li class="plan__feature" v-for="feature in features" :key="feature.id">
          {{ feature.name }}
        </li>
      </ul>

      <button @click="subscribe" class="plan__cta">Get Started</button>
    </div>
  </div>
</template>

<script>
import PricingApi from "./services/pricing.api";

export default {
  name: "PricingPlan",
  props: {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    features: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    async subscribe() {
      try {
        await PricingApi.subscribe();
        alert("congrats successfully subscribed");
      } catch (err) {
        const message = err.response
          ? JSON.stringify(err.response.data)
          : err.message;

        alert(message);
      }
    },
  },
};
</script>

<style scoped>
.plan__container {
  border: 1px solid #eeeeee;
  width: 260px;
  border-radius: 8px;
  text-align: center;
  background-color: #ffffff;
  padding: 0 15px 30px 15px;
  transition: all 0.2s;
}

.plan__container:hover {
  transform: scale(1.05);
}

.active {
  transform: scale(1.1);
}

.active:hover {
  transform: scale(1.15);
}

.plan__name {
  color: #1e1f57;
  font-size: 24px;
  padding: 10px 0;
  margin-bottom: -15px;
  text-transform: capitalize;
}

.cost__container {
  padding: 10px 0;
  line-height: 0;
}

.cost__amount {
  font-size: 45px;
  color: #0003ff;
}

.cost__type {
  color: #c3c3c3;
  font-weight: 400;
}

.seperator {
  height: 1px;
  width: 60%;
  margin: 0 auto;
  background-color: #f9f9f9;
}

.plan__features {
  list-style: none;
  padding: 20px 0;
  color: #9e9e9e;
}

.plan__feature {
  width: 80%;
  margin: 0 auto;
  text-transform: capitalize;
  font-size: 18px;
  padding: 10px 0;
  border-bottom: 1px solid #f9f9f9;
}

.plan__cta {
  outline: none;
  border: 1px solid #0003ff;
  padding: 10px 65px;
  background-color: #ffffff;
  font-size: 16px;
  color: #0003ff;
}

.active .plan__cta {
  color: #ffffff;
  background-color: #0003ff;
}

.plan__cta:hover {
  color: #ffffff;
  background-color: #0003ff;
}

@media only screen and (max-width: 799px) {
  .plan__container {
    margin-top: 25px;
  }

  .plan__container:hover {
    transform: scale(1.05);
  }

  .active {
    transform: none;
  }

  .active:hover {
    transform: none;
  }
}
</style>
