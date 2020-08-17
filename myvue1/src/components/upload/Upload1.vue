<template>
  <div id="upload1">
    <h2>这是Upload1</h2>
    <el-upload
      action="#"
      :limit='1'
      :auto-upload="false">
        <i slot="default" class="el-icon-plus"></i>
        <img :src="dialogImageUrl" class="avatar" />
    </el-upload>
    <!-- <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogImageUrl: '../../../static/image/verify01.png',
        dialogVisible: false,
        disabled: true
    }
  },
  methods: {
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        //this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
  }
}
</script>