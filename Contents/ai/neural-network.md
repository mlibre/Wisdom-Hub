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

## Concepts

### Neuron

A neuron is a function that takes some inputs, applies a weighted sum to them, adds a bias, and then generates an output using an activation function

```python
inputs = [1.0, 2.0]
weights = [0.5, -0.5]
bias = 0.1

# Compute the weighted sum
weighted_sum = inputs[0] * weights[0] + inputs[1] * weights[1] + bias
print("Weighted Sum:", weighted_sum)
```

### Activation function

An activation function is applied to the output of a neuron to introduce non-linearity into the model. This helps the neural network learn complex patterns

```python
import math

def sigmoid(x):
    return 1 / (1 + math.exp(-x))

# Apply the activation function
output = sigmoid(weighted_sum)
print("Neuron Output (after activation):", output)
```

### Lose function

A loss function measures how well a neural network model performs a certain task by calculating the difference between the predicted output and the actual output. The goal of training is to minimize this loss

```python
y_true = 0.8

loss = (y_true - output)
print("Loss:", loss)
```
