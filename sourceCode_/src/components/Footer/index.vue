<!--  -->
<template>
  <div class="footer">
    <div class="footer-container">
      <div class="copyright">
        <ul class="helpLink">
          <li>About us</li>
        </ul>
        <p>Booksage from G0dl1ke</p>
        <p>South China Normal University</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
}
</script>

<style scoped lang="less">
.footer {
    background-color: #eaeaea;

    .footer-container {
        width: 1200px;
        margin: 0 auto;
        padding: 0 15px;

        .copyright {
            padding: 20px;

            .helpLink {
                text-align: center;

                li {
                    display: inline;

                    .space {
                        border-left: 1px solid #666;
                        width: 1px;
                        height: 13px;
                        background: #666;
                        margin: 8px 10px;
                    }
                }
            }

            p {
                margin: 10px 0;
                text-align: center;
            }
        }
    }
}
</style>