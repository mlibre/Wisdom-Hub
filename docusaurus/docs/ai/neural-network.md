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
sudo pamac -S opencl-amd --no-confirm
sudo usermod -a -G render,video $LOGNAME

# https://www.tensorflow.org/install/pip
pip install tensorflow --break-system-packages
pip install tensorflow-rocm --break-system-packages

# https://pytorch.org/
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm6.1 --break-system-packages
```

## Check GPU Support

```python
import tensorflow as tf   # TensorFlow registers PluggableDevices here
tf.config.list_physical_devices()
print(tf.__version__)
```
