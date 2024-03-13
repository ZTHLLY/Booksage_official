<template>
  <div class="payment-modal">
    <div class="amount-container">
      <h1>Confirm The Payment</h1>
	  <p class="amount">Consignee Name: {{ name }}</p>
	  <p class="amount">Consignee Address: {{ address }}</p>
	  <p class="amount">Consignee Phone Number: {{ phoneNumber }}</p>
      <p class="amount" style="color: black;">Aggregate Amount: ${{ amount }}</p>
    </div>
    <div class="qr-code-container">
      <!-- 这里放置付款二维码的图片或组件 -->
      <img src="./assets/images/my-payment.jpg" alt="Payment QR Code" class="qr-code-image">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    address: {
      type: String,
      required: true,
    },
	name: {
	  type: String,
	  required: true,
	},
	phoneNumber: {
	  type: String,
	  required: true,
	},
	amount: {
	  type: String,
	  required: true,
	},
  },
  // 其他组件逻辑
};
</script>

<style scoped>
.payment-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 900px;
  margin: auto;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: -150px;
  border-radius: 8px;
}

.amount-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.amount-container h1{
	margin-top: -80px;
	margin-bottom: 150px;
	color: #000;
}

.amount {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}

.qr-code-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.qr-code-image {
  max-width: 100%;
  max-height: 100%;
}
</style>
