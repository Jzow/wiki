# 关于 kotlin 的变量问题

最近在使用 kotlin 的时候，发现了一个问题，就是关于变量的问题，在 Java 里习惯用引用来操作变量，但是在 kotlin 里，变量的操作和 Java 是不一样的，这里就记录一下。
`val`和`var`关键字在 kotlin 中都是用来定义变量的，其中，`val`用于声明只读变量（不可修改），而`var`用于声明可读写变量（可修改）。

## 问题代码

我在 Java 中需要把一个数据对象转换成 View Object 对象，这里的数据对象是一个 Java 对象，而 VO 对象是一个 kotlin 对象，这里的代码如下：

```java
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("supplier")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Supplier implements Serializable {

    @Serial
    private static final long serialVersionUID = 7918916161L;

    @TableId(value = "id")
    private Long id;

    private Long tenantId;

    private String supplierName;

    private String contact;

    private String contactNumber;

    private String phoneNumber;

    private String address;

    private String email;
}
```

这个是我的 Kotlin 的数据对象:

```kotlin
@NoArg
data class SupplierVO (

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    val id: Long,

    val supplierName: String,

    val contact: String?,

    val contactNumber: String?,

    val phoneNumber: String?,

    val address: String?,

    val email: String?,

    // other filed
)
```

这里的`@NoArg`是一个我自定义的注解，用于生成无参构造函数，而这里的`@JsonFormat`是一个注解，用于在序列化和反序列化的时候，对数据进行格式化。

## 问题描述

当我使用 Spring 的`BeanUtils.copyProperties()`的时候，我发现**代码运行正常但是无法拷贝数据**

```java
List<Supplier> suppliers = supplierService.list();
  List<SupplierVO> supplierVOS = new ArrayList<>();
  suppliers.forEach(item -> {
    var supplierVO = new SupplierVO();
    BeanUtils.copyProperties(item, supplierVO);
    supplierVOS.add(supplierVO);
});
```

## 问题分析&解决

因为我在 kotlin 中错误地使用了`val`关键字，这里的`supplierVO`是一个只读变量，所以无法进行拷贝，当我在百度和 Google 上搜类似问题的时候很抱歉没有发现，于是我去查了 Kotlin 和 Java 变量转换，
我原本以为它在`BeanUtils.copyProperties()`方法里无法识别 Java 和 Kotlin 之间的变量转换，但是我在查看`BeanUtils.copyProperties()`的源码的时候，
发现它是通过反射来进行拷贝的，所以这里的问题就是我在 kotlin 中错误地使用了`val`关键字，所以无法进行拷贝。
当我把`supplierVO`的`val`关键字改成`var`关键字的时候，就可以正常拷贝了。

```kotlin
@NoArg
data class SupplierVO (

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    var id: Long,

    var supplierName: String,

    var contact: String?,

    var contactNumber: String?,

    var phoneNumber: String?,

    var address: String?,

    var email: String?,

    // other filed
)
```

## 总结

当我替换成`var`变量声明的时候，我发现可以主动给`SupplierVO`对象进行赋值。本来的需求是我想在 Java 和 Kotlin 之间进行对象的字段数据转换
而我粗心的使用了`val`关键字，导致无法进行数据转换，我一直认为是 Spring 的`BeanUtils.copyProperties()`的错误，但是当我查看源码的时候并非如此。
这一次让我加深了对`val`和`var`关键字的理解，以及对 kotlin 的`data class`的理解，
后面当我有需要使用到`BeanUtils.copyProperties()`的时候，需要注意，不要再犯同样的错误了。
