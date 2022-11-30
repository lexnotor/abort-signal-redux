/**
 * @type {{id:String, controller:AbortController}[]} Un tb
 */
export const listAbortControllers = [];

export const removeAbortController = (id, abort = false) => {
  const index = listAbortControllers.findIndex((item) => item.id == id);
  if (index != -1) {
    const { controller } = listAbortControllers.splice(index, 1)[0];
    abort && controller.abort();
  }
};

export const abortContorller = (id) => {
  const controller = listAbortControllers.find((item) => item.id == id);
  if (controller) {
    controller.controller.abort();
  }
};
