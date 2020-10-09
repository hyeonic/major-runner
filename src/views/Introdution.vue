<template>
  <div id="wrap">
    <h3>About</h3>
    <div class="contents">
      <div>
        서로 떨어져 있으면 한 명에 전공인에 불과하지만 함께 모이면 우리는
        전문가가 됩니다.
      </div>
      <br />
      <div>
        모든 전공인들이 함께 달려가는 공간, Major Runner는 같은 꿈을 안고 있는
        대학생, 취업 준비생들이 모여 정보를 공유하고, 스터디를 모집하며,
        질의응답 등을 나눌 수 있는 공간입니다.
      </div>
    </div>

    <h3>Major Runner 에서</h3>
    <div class="contents">
      <div>
        나와 가는 길이 같은 사람들에게 궁금했던 것들을 물어보고, 아는 것을
        나누며 함께 성장해보세요.
      </div>
      <br />
      <div>
        여러분이 가고자 하는 길에 생각보다 더 많은 동행인이 있답니다. 혼자 가는
        것보다 재밌고, 조금 더 수월하게 원하는 목표를 이룰 수 있을거에요.
      </div>
    </div>

    <h3>함께 달려볼까요?</h3>
    <router-link to="/signup">
      <div class="signup-button">sign up!</div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#wrap {
  border: 1px solid #f1f9ff;
  border-radius: 20px;
  padding: 1rem;
}

h3 {
  margin: 1rem 0;
  font-size: 1.6rem;
  text-align: center;
  color: #2d76c9;
}

.contents {
  color: #005aa7;
}

.signup-button {
  border: 1px solid #2699fb;
  border-radius: 20px;
  text-align: center;
  padding: 0.5rem;
  color: whitesmoke;
  font-weight: bolder;
  width: 50%;
  background-color: #2699fb;
  margin-left: 25%;
}
</style>
