<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <el-form :model="form" label-width="120px">
          <el-form-item label="Activity name">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="Activity room">
            <el-select
              v-model="form.room"
              placeholder="please select your room"
            >
              <el-option label="room 1" value="room 1" />
              <el-option label="room 2" value="room 2" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              :disabled="!form.name || !form.room"
              @click="onSubmit"
              >Create</el-button
            >
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const router = useRouter();

// do not use same name with ref
const form = reactive({
  name: "",
  room: "",
});

const onSubmit = () => {
  router.push(`/chat?username=${form.name}&room=${form.room}`);
  console.log(form);
};
</script>
