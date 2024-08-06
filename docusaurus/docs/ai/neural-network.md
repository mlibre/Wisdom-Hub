---
sidebar_position: 2
tags:
  - Network
  - AI
  - Neural
---

# Neural Network

## Install Packages

```bash
pip install --upgrade pip --break-system-packages
# If you have permission issues
# sudo chmod a+rwx /usr/lib/python3.12/ -R

# https://wiki.archlinux.org/title/GPGPU
sudo pamac install opencl-amd --no-confirm
# Or
# sudo pamac install rocm-core rocm-hip-sdk rocm-opencl-sdk --no-confirm
sudo usermod -a -G render,video $LOGNAME
rocminfo

# If you are using RDNA or RDNA 2 architecture like AMD Radeon RX 6500 XT, you may need to follow this step:
sudo nano ~/.profile
# Add the following lines:
export HSA_OVERRIDE_GFX_VERSION=10.3.0
export ROC_ENABLE_PRE_VEGA=1


# https://www.tensorflow.org/install/pip
pip uninstall tensorflow-rocm numpy
pip install tensorflow --break-system-packages
pip install https://repo.radeon.com/rocm/manylinux/rocm-rel-6.1.3/tensorflow_rocm-2.15.1-cp310-cp310-manylinux_2_28_x86_64.whl numpy==1.26.4 --break-system-packages
# cp310 means you need to have python 3.10

# https://pytorch.org/
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm6.1 --break-system-packages
```

## Check GPU Support

```python
import tensorflow as tf   # TensorFlow registers PluggableDevices here
import torch

print(tf.config.list_physical_devices())
print(tf.__version__)

print(torch.cuda.is_available())
print(torch.version.hip)
```

## Concepts

### Neuron

A neuron is a function that takes some inputs, applies a weighted sum to them, and then generates an output using an activation function

```python
def neuronFunc(inputs):
    weights = [0.5, -0.5]
    bias = 0.0
    output = inputs[0] * weights[0] + inputs[1] * weights[1] + bias
    return output

neuronOut = neuronFunc([1.0, 2.0])
print("Neuron output:", neuronOut)
```

### Activation Function

An activation function is applied to the output of a neuron to introduce non-linearity into the model. This helps the neural network learn complex patterns

```python
import math

def sigmoid(x):
    return 1 / (1 + math.exp(-x)) # e^-x

# Apply the activation function
activeOutput = sigmoid(neuronOut)
print("Activated output (sigmoid):", activeOutput)
```

### Loss Function

A loss function measures how well a neural network model performs a certain task by calculating the difference between the predicted output and the actual output. The goal of training is to minimize this loss.

```python
y_true = 0.8
loss = (y_true - activeOutput)
print("Loss:", loss)
```

### Gradient

In neural networks, gradients are used to update the model parameters to minimize the loss function

```python
def f(x):
    return x**2

def gradient(f, x, delta_x=0.00001):
    return (f(x + delta_x) - f(x)) / delta_x

x = 3
grad = gradient(f, x)
print("Gradient of f at x = {}: {}".format(x, grad))

```

### Gradient Descent

Gradient Descent is an optimization algorithm used to minimize the loss function by iteratively moving towards the steepest descent direction defined by the negative of the gradient.

```python
def gradient_descent(f, starting_point, learning_rate, num_iterations):
    x = starting_point
    for _ in range(num_iterations):
        grad = gradient(f, x)
        x = x - (learning_rate * grad)
    return x

starting_point = 3
learning_rate = 0.1
num_iterations = 100
optimal_x = gradient_descent(f, starting_point, learning_rate, num_iterations)
print("Optimal x:", optimal_x)
```

## Resources
