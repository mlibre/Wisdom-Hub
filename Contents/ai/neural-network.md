---
sidebar_position: 2
tags:
  - Network
  - ai
  - Neural
---

# Neural Network

## Install Packges

```bash
pip install --upgrade pip --break-system-packages
# if you have permission issue
# sudo chmod a+rwx /usr/lib/python3.12/ -R

# https://wiki.archlinux.org/title/GPGPU
sudo pamac install opencl-amd --no-confirm
# Or sudo pamac install rocm-core rocm-hip-sdk rocm-opencl-sdk --no-confirm
sudo usermod -a -G render,video $LOGNAME

# If you are using RDNA or RDNA 2 architecture like AMD Radeon RX 6500 XT follow this step
sudo nano ~/.profile
export HSA_OVERRIDE_GFX_VERSION=10.3.0
export ROC_ENABLE_PRE_VEGA=1

# https://www.tensorflow.org/install/pip
pip install tensorflow --break-system-packages
pip3 uninstall tensorflow-rocm numpy
pip3 install https://repo.radeon.com/rocm/manylinux/rocm-rel-6.1.3/tensorflow_rocm-2.15.1-cp310-cp310-manylinux_2_28_x86_64.whl numpy==1.26.4 --break-system-packages

# https://pytorch.org/
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm6.1 --break-system-packages
```

## Check GPU Support

```python
import tensorflow as tf   # TensorFlow registers PluggableDevices here
tf.config.list_physical_devices()
print(tf.__version__)
```
